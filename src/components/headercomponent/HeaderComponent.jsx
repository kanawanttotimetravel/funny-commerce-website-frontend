'use client'

import React from "react";
import "./style.css";
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
        <div className="header">
            <div className="logo">
                <button onClick={() => {
                    router.push('/')
                }}>
                    Drakon
                </button>
            </div>
            <div className="hcenter">
                <ul className="hlist">
                    <li><button onClick={() => {
                        router.push('/shop')
                    }} className="text-wrapper">Home</button></li>
                    <li><button onClick={''} className="text-wrapper">Shop</button></li>
                    <li><button onClick={''} className="text-wrapper">About</button></li>
                    <li><button onClick={''} className="text-wrapper">Contact</button></li>
                </ul>
            </div>
            <div className="hright">
                <ul className="hlist">
                    <li><AlertOutlined  
                        onClick={''}
                        className="icon" 
                        alt="alert"
                    /></li>
                    <li><SearchOutlined 
                        onClick={''}
                        className="icon" 
                        alt="search"
                    /></li>
                    <li><HeartOutlined 
                        onClick={''}
                        className="icon"
                        alt="heart"
                    /></li>
                    <li><ShoppingCartOutlined
                        onClick={''}
                        className="icon"
                        alt="shopping"
                    /></li>
                    <li><UserOutlined
                        onClick={''}
                        className="icon"
                        alt="shopping"
                    /></li>
                </ul>
            </div> 
        </div>
    );
};  

export default Header;