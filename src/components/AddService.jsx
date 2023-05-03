import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addServiceByuser, getNearbyServices } from "../API/servicesApi";
import { upload } from "../middleware/imageupload";
import LocationSearch from "./LocationSearch";
import Loader from "./loader/Loader";

const AddService = ({ serviceExist, subscriptionTrue }) => {
    const [services, setServices] = useState([]);
    const [data, setData] = useState("");
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.data.user);
    const userid = user?._id;
    useEffect(() => {
        setLoader(true)
        getNearbyServices().then((res) => {
            setServices(res.data.services);
        setLoader(false)

        });
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitService = async (e) => {
        e.preventDefault();
        setLoader(true)
        const imageurl = await upload(data.image);
        data.id = userid;
        addServiceByuser(data, imageurl).then((res) => {
        setLoader(false)
        navigate("/profile/myprofile")
        });
    };

    const updateLocation = (obj) => {
        setData({
            ...data,
            ...obj,
        });
    };

    if (!serviceExist && !subscriptionTrue) {
        return (
            <div
                className="text-white py-2 px-4 w-full text-center flex justify-center  items-center"
                style={{
                    backgroundImage: "url('https://static1.shine.com/l/m/images/blog/job_search_portals.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "300px",
                    opacity: "0.7",
                }}
            >
                <Link to="/subscribe">
                    <div className="text-center flex flex-col justify-center text-black text-xl font-medium capitalize">
                        you need a subscription to add your service
                        <div className="bg-red-600 flex capitalize justify-center items-center text-white w-full h-10 rounded-md my-5">
                            click Here to subscribe
                        </div>
                    </div>
                </Link>
            </div>
        );
    } else {
        return (
            <div>
                <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                    <div className="bg-white  rounded  shadow-2xl p-6 m-4 w-full ">
                        <form className="w-full " onSubmit={submitService}>
                                <h1 className="text-grey-darkest text-xl text-center font-medium">ADD YOUR SERVICE HERE</h1>
                            <div className="flex">
                            <div className="md:w-full mb-4">
                                <div className="flex mt-4">
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                        placeholder="Add designation title"
                                        name="servicetitle"
                                        value={data.servicetitle}
                                        onChange={handleChange}
                                    >
                                        <option selected>designation title</option>
                                        {services.map((item) => (
                                            <option value={item.title} key={item.title}>
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex mt-4">
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                        placeholder="Add servic labour"
                                        name="labour"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex mt-4">
                                    <LocationSearch formLocation={updateLocation} />
                                </div>
                            </div>
                            <div className="md:w-full">

                                <div className="flex mt-4">
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                        placeholder="Add description"
                                        name="description"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col mt-8">
                                    <label>Add proof</label>
                                    <input
                                        type="file"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                        placeholder="Add proof"
                                        name="liecence"
                                        onChange={(e) => {
                                            setData({ ...data, image: e.target.files[0] });
                                        }}
                                    />
                                </div>
                            </div>
                            </div>
                                <div className="text-center">
                                    <button type="submit" className="bg-yellow-500 rounded hover:bg-black hover:text-yellow-500 text-black w-36 h-10 my-5">
                                        POST NOW
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
                {loader? <Loader loader={loader}/>:null}
            </div>
        );
    }
};

export default AddService;
