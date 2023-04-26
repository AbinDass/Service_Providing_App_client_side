import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import { addSubscription } from "../../API/servicesApi";
import { upload } from "../../middleware/imageupload";

const AddSubscription = ({ list, setList }) => {
    const [Data, setData] = useState("");
    const [image, setImage] = useState();
    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };

    const subscribeSubmit = async (e) => {
        e.preventDefault();
    const background = await upload(image);

        const res = await addSubscription(Data,background);
        setData({ mainHead: "", subHead: "", plan: "", price: "", description: "" });
        if (res) {
        }
    };

    return (
        <div className="bg-[#D3D3D3] h-screen w-full md:min-h-[800px] rounded-md">
            <h1 className="text-center text-2xl">ADD THE SUBSCRIPTION PLAN HERE</h1>
            <div className="flex flex-col items-center">
                <form onSubmit={subscribeSubmit}>
                    <div className="flex flex-col items-center pt-12 justify-center">
                        <div className="mx-auto w-full max-w-[550px]">
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label className="font-medium mb-5">Main heading</label>
                                        <input
                                            type="text"
                                            name="mainHead"
                                            value={Data.mainHead}
                                            onChange={handleChange}
                                            placeholder="add main heading"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label className="font-medium mb-5">Sub heading</label>
                                        <input
                                            type="text"
                                            name="subHead"
                                            value={Data.subHead}
                                            onChange={handleChange}
                                            placeholder="add subheading"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label className="font-medium mb-5">subscription plan</label>
                                        <input
                                            type="text"
                                            name="plan"
                                            value={Data.plan}
                                            onChange={handleChange}
                                            placeholder="add plan"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label classNameName="font-medium mb-5">Add background Image</label>

                                <input
                                    type="file"
                                    name="image"
                                    id="iamge"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    placeholder="add image"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label className="font-medium mb-5">prcie</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={Data.price}
                                            onChange={handleChange}
                                            placeholder="add price"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="font-medium mb-5">Add Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={Data.description}
                                    onChange={handleChange}
                                    placeholder="add  description"
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <button
                    className="bg-green-400 mt-10 h-10 text-2xl font-bold rounded-md md:w-[50%]"
                    onClick={() => setList(!list)}
                >
                    {" "}
                    See Added subscription plans
                </button>
            </div>
        </div>
    );
};

export default AddSubscription;
