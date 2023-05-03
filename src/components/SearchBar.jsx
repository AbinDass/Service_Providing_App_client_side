/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Search } from "../API/servicesApi";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/slice/searchslice";
import { Link } from "react-router-dom";
// import { AppContext } from '../pages/Context';

const SearchBar = ({ distval }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data.user);
    const id = user?._id;
    
    // const {searchData, setSearchData} = useContext(AppContext)

    const [search, setSearch] = useState();
    const [searchResult, setSearchResult] = useState([]);

    const submitSearch = () => {};

    const handleChange = (e) => {
        const exp = e.target.value.toString();
        const match = exp.match(/^[a-zA-z ]*/);
        const match2 = exp.match(/\s*/);
        if (match2[0] === e.target.value) {
            setSearch(e.target.value);
        }
        if (match[0] === e.target.value && e.target.value !== "") {
            setSearch(e.target.value);
        }
    };


    useEffect(() => {
        Search(search, id, distval).then((res) => {
            if (!res.data.message) {
                setSearchResult(res.data);
            }
        });
    }, [search]);

    const gotoSearchItems = () => {
        if (searchResult) {
            dispatch(
                searchAction.setSearch({
                    searchdata: searchResult,
                })
            );
        }
    };

    return (
        <div className="pt-5 w-full">
            <form onSubmit={submitSearch}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                    Search
                </label>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        onChange={handleChange}
                        className="block  p-4 pl-10 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search services, location..."
                        required
                    />
                    {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </form>

            {/* list items */}
            <div className="text-center">
                <ul>
                    {search &&
                        (searchResult.length === 0 ? (
                            <li className="text-red-500 py-5 rounded-lg bg-black bg-opacity-30 h-10 flex justify-center items-center">
                                {" "}
                                Not found any result near your location{" "}
                            </li>
                        ) : (
                            searchResult &&
                            searchResult?.map((items) => (
                                <Link to={"/servicelist/" + items?.servicetitle}>
                                    <li onClick={gotoSearchItems} className="text-red-500 cursor-pointer pt-5">
                                        <div className="flex space-x-10 px-20 bg-red-400 bg-opacity-25 rounded h-16 items-center justify-between">
                                            <h1 className="text-xl font-medium">{items?.servicetitle}</h1>
                                            <h1 className="text-xl font-medium">{items?.location}</h1>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;
