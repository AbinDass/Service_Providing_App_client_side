import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import Userlist from "../../components/admin/Userlist";
import { userList } from "../../API/dashboardcontrols";

const Users = () => {
    const [refresh, setRefresh] = useState(false);
    const [list, setList] = useState([]);
    useEffect(() => {
        userList().then((res) => {
            console.log(res.data.userdata, "ith result");
            setList(res.data.userdata);
        });
        console.log(refresh, "state");
    }, [refresh]);

    return (
        <div className="w-full">
            <AdminNavbar />
            <div className="flex py-10  ">
                <div className="hidden lg:block px-10 ">
                    <AdminSidebar />
                </div>

                <div className="sm:w-[1240px]">
                    <Userlist list={list} refresh={refresh} setRefresh={setRefresh} />
                </div>
            </div>
        </div>
    );
};

export default Users;
