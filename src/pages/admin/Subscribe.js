import React, { useState, useEffect } from "react";
import AddSubscription from "../../components/admin/AddSubscription";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import PlanList from "../../components/admin/PlanList";
import { getSubscriptions } from "../../API/servicesApi";

const Subscribe = () => {
    const [list, setList] = useState(false);
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        getSubscriptions().then((res) => {
            console.log(res.data.plans, "function call subscribe");
            setPlans(res.data.plans);
        });
    }, []);
    return (
        <div className="w-full">
            <AdminNavbar />
            <div className="flex py-10  ">
                <div className="hidden lg:block px-10 ">
                    <AdminSidebar />
                </div>

                <div className="sm:w-[1240px]">
                    {list ? (
                        <AddSubscription list={list} setList={setList} />
                    ) : (
                        <PlanList list={list} setList={setList} plans={plans} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
