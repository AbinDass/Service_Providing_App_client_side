import React, { useState } from "react";
import { addServices } from "../../API/dashboardcontrols";
import { upload } from "../../middleware/imageupload";

const AddService = ({setShowService, showservice}) => {
    const [service, setService] = useState();
    const [image, setImage] = useState();
    const [logo, setLogo] = useState();
    const [description, setDescription] = useState();
    const addService = async (e) => {
        e.preventDefault();
        const iamgeurl = await upload(image);
        const logourl = await upload(logo);
        const serviceResponse = await addServices(service, iamgeurl,logourl, description);
        if(serviceResponse){
            setService();
            setImage();
            setLogo()
            setDescription(); 
            setShowService(!showservice)
        }
    };
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="mx-auto w-full max-w-[550px]">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label classNameName="font-medium mb-5">Add service</label>
                                <input
                                    type="text"
                                    name="service"
                                    onChange={(e) => setService(e.target.value)}
                                    placeholder="add service"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label classNameName="font-medium mb-5">Add Service Image</label>

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
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label classNameName="font-medium mb-5">Add Service logo</label>

                                <input
                                    type="file"
                                    name="servicelogo"
                                    id="iamge"
                                    onChange={(e) => setLogo(e.target.files[0])}
                                    placeholder="add image"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label classNameName="font-medium mb-5">Add Description</label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="add  description"
                            min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={addService}
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
