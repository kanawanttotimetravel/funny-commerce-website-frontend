import React from "react";
import "./style.css";
import {
    ShoppingCartOutlined,
    HeartOutlined,
    SearchOutlined,
    AlertOutlined
} from '@ant-design/icons';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                    <img className="funny-commerce-logos" alt="FunnyCommerceLogos" src="src\components\headercomponent\logouet.png"/>
                    <img className="skin-clinic" alt="Skin clinic" src="" />
            </div>
            <div className="hcenter">
                <ul className="hlist">
                    <li><div className="text-wrapper">Home</div></li>
                    <li><div className="text-wrapper">Shop</div></li>
                    <li><div className="text-wrapper">About</div></li>
                    <li><div className="text-wrapper">Contact</div></li>
                </ul>
            </div>
            <div className="hright">
                <ul className="hlist">
                    <li><AlertOutlined 
                        className="icon" 
                        alt="alert"
                    /></li>
                    <li><SearchOutlined 
                        className="icon" 
                        alt="search"
                    /></li>
                    <li><HeartOutlined 
                        className="icon"
                        alt="heart"
                    /></li>
                    <li><ShoppingCartOutlined
                        className="icon"
                        alt="shopping"
                    /></li>
                </ul>
            </div> 
        </div>
    );
};  

export default Header;