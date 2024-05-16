
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const SearchBox: React.FC = () => {
    return (
        <div>
            <div className="search-box w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
        </div>


    );
};

export default SearchBox;
