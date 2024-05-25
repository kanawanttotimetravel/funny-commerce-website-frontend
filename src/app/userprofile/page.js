"use client";
import Footer from '@/components/footer/footer'
import Header from '@/components/headercomponent/HeaderComponent'
import React, { useState } from "react";
import UserProfile from './UserProfile';
import PurchaseHistory from './PurchaseHistory';

function UserProFilePage() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        country: "",
        city: "",
        street: "",
        avatar: "https://th.bing.com/th/id/OIP.7A9gSKP5femLgAKG8K131QAAAA?w=141&h=150&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    });
  
    const handleSave = (updatedUser) => {
        setUser(updatedUser);
    };
  
    return (
        <div>
        <Header />
        <UserProfile user={user} onSave={handleSave} />
        <PurchaseHistory/>
        <Footer />
        </div>
    );
  }
  
  export default UserProFilePage;