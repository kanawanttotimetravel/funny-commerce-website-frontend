"use client";

import React, { useState } from 'react';

const EditUserProfile = ({ user, onSave }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <label>Country / Region:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
            <label>Street:</label>
            <input type="text" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div>
            <label>Town / City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="save-button-container">
            <button type="submit" className="save-button">Save</button>
        </div>
    </form>
  );
};

export default EditUserProfile;
