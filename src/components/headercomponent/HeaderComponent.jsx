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
            <div className="group">
                <div className="overlap-group">
                    <div className="div">
                        <div className="text-wrapper">Home</div>
                        <div className="text-wrapper-2">Shop</div>
                        <div className="text-wrapper-3">About</div>
                        <div className="text-wrapper-4">Contact</div>
                    </div>
                    <div className="group-2">
                        <AlertOutlined 
                        className="mdi-account-alert" 
                        alt="alert"
                        />
                        <SearchOutlined 
                        className="akar-icons-search" 
                        alt="search"
                        />
                        <HeartOutlined 
                        className="akar-icons-heart" 
                        alt="heart"
                        />
                        <ShoppingCartOutlined
                            className="ant-design-shopping"
                            alt="shopping"
                        />
                        <div className="frame">
                            <img className="funny-commerce-logos" alt="FunnyCommerceLogos" src="" />
                            <img className="skin-clinic" alt="Skin clinic" src="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;