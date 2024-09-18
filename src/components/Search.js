import  {React, useEffect, useState } from 'react';
import '../style/Search.css';
import { FaSearch } from "react-icons/fa";
import {searchCategory} from "../services/CategoryService";

const Search = () => {
    const [key, setKey] = useState('');


    const handleOnClickSearch = async () => {
        var res = await searchCategory(key);
    }
    return (
        <div className='col-lg-6 col-12'>
            <input className='searching mt-3 px-5 p-1' value={key} onChange={(e) => setKey(e.target.value)}/>
            <div className='searchIcon'><FaSearch/></div>
            <button className='btnSearch p-1 px-2' onClick={() => handleOnClickSearch()}>Search</button>
        </div>
    );
};

export default Search;