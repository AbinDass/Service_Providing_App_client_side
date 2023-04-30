import React, { useState } from "react";
import { Location_Search } from "../API/mapbox";

const LocationSearch = ({ formLocation, err }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const textChange = async (event) => {
        setSearchTerm(event.target.value);
        const results = await Location_Search(searchTerm);
        console.log(results);
        setSearchResults(results);
    };

    const handleLocationSelect = (result) => {
        setSearchTerm(result.text);
        setSearchResults([]);
        const context = result.context;
        let distric = null;
        let state = null;
        for (const x of context) {
            if (x.id.includes("district")) distric = x.text;
            if (x.id.includes("region")) state = x.text;
        }
        formLocation({
            location: result.text,
            distric,
            state,
        });
    };
    return (
        <div>
            <div className="">
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={searchTerm}
                        onChange={textChange}
                        placeholder="Enter location name"
                        id="location"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    />
                    <p className="text-red-500 text-xs italic"> </p>
                </div>
                <ul className="mt-4 w-full   rounded-md">
                    {searchResults.map((result) => (
                        <li
                            key={result.id}
                            onClick={() => handleLocationSelect(result)}
                            className="px-3 py-2 cursor-pointer border-b-2 hover:bg-gray-200"
                        >
                            <span className="text-lg font-bold">{result.text}</span> <br />
                            {result.place_name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocationSearch;
