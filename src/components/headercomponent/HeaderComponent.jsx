'use client'

import React, { useState } from "react";
import "./style.css";
import "./styleSearch.css";
import Link from "next/link";
import {
    ShoppingCartOutlined,
    HeartOutlined,
    SearchOutlined,
    AlertOutlined,
    UserOutlined
} from '@ant-design/icons';
import SearchHistoryItem from "./SearchHistoryItem";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            setSearchHistory([searchTerm, ...searchHistory]); // Add search term to history
            try {
                const response = await fetch(`http://localhost:5000/Search-product/${searchTerm}`);
                const data = await response.json();
                // Check if the response is an array, otherwise set it to an empty array
                setSearchResults(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setSearchResults([]); // Set search results to an empty array in case of error
            }
            setSearchTerm(""); // Reset search term
        }
    };

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo">
                    <Link href={'/'}>
                        Drakon
                    </Link>
                </div>
                <div className="hcenter">
                    <ul className="hlist">
                        <li><Link href={'/'} className="text-wrapper">Home</Link></li>
                        <li><Link href={'/shop'} className="text-wrapper">Shop</Link></li>
                        <li><Link href={'/about'} className="text-wrapper">About</Link></li>
                        <li><Link href={'/contact'} className="text-wrapper">Contact</Link></li>
                    </ul>
                </div>
                <div className="hright">
                    <ul className="hlist">
                        <li>
                            <Link href={'/alerts'}>
                                <AlertOutlined className="icon" alt="alert" />
                            </Link>
                        </li>
                        <li>
                            <form className="search-box" onSubmit={handleSearchSubmit}>
                                <div className="input-search-wrapper">
                                    <input 
                                        type="text" 
                                        name="search" 
                                        placeholder="Search for..." 
                                        required 
                                        className="input-search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <div className="search-history">
                                        <ul className="search-history-list">
                                            {searchHistory.map((item, index) => (
                                                <SearchHistoryItem key={index} content={item} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <button type="submit" className="btn-search">
                                    <SearchOutlined alt="search" className="icon"/>
                                </button>
                            </form>
                        </li>
                        <li>
                            <Link href={'/favorites'}>
                                <HeartOutlined className="icon" alt="heart" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'/cart'}>
                                <ShoppingCartOutlined className="icon" alt="shopping" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'/userprofile'}>
                                <UserOutlined className="icon" alt="user" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="search-results">
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;