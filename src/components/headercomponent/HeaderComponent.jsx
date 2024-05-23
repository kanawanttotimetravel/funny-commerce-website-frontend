'use client'

import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import {
    ShoppingCartOutlined,
    HeartOutlined,
    SearchOutlined,
    AlertOutlined,
    UserOutlined
} from '@ant-design/icons';
import {useRouter} from "next/navigation";

function Header() {
    const router = useRouter()
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo">
                    <Link href={'/'} >
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
                            <form class="search-box">
                                <input type="text" name="" placeholder="Search for..." required class="input-search"/>
                                <button type="submit" class="btn-search">
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
        </div>
    );
};  

export default Header;