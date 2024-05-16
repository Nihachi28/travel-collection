// components/SearchSection.tsx
import React from 'react';
import SearchBox from './searchBox';


const SearchSection: React.FC = () => {
    return (
        <div className="search-section flex items-center justify-center">
            <SearchBox />
        </div>
    );
};

export default SearchSection;
