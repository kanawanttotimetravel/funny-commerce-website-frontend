/*
  Usage:
<UserProfile user={user} />
 */
import React from 'react';
import UserProfileField from '@/components/userprofileComponents/UserProfileField';
import "./style.css";

const UserProfile = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src={user.avatar} alt="Profile Avatar" className='avatar'/>
            </div>
            <div className="profile-details">
                <UserProfileField label="First Name" value={user.firstName} />
                <UserProfileField label="Last Name" value={user.lastName} />
                <UserProfileField label="Phone Number" value={user.phoneNumber} />
                <UserProfileField label="Email" value={user.email} />
                <UserProfileField label="Country / Region" value={user.country} />
                <UserProfileField label="Street" value={user.street} />
                <UserProfileField label="Town / City" value={user.city} />
            </div>
            <button className="edit-button">Edit</button>
        </div>
    );
};

export default UserProfile;
