'use client';

import React, { useState } from 'react';

export const CreateClient = ({ createCustomer }) => {
  const [formData, setFormData] = useState({
    address: {
      city: 'San José',
      country: 'CR',
      line1: 'line1',
      line2: 'line2',
      postalCode: '10101',
      state: 'San José',
    },
    description: 'Cliente de prueba',
    email: 'test_customer@onvopay.com',
    name: 'John Doe',
    phone: '+50688880000',
    shipping: {
      address: {
        city: 'city',
        country: 'CR',
        line1: 'line1',
        line2: 'line2',
        postalCode: 'postalCode',
        state: 'state',
      },
      name: 'John Doe',
      phone: '+50688880000',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    let data = formData;

    keys.reduce((acc, key, index) => {
      if (index === keys.length - 1) {
        acc[key] = value;
      } else {
        if (!acc[key]) acc[key] = {};
        return acc[key];
      }
      return null;
    }, data);

    setFormData({ ...data });
  };

  return (
    <form action={createCustomer}>
      <h2>Customer Form</h2>

      {/* Basic Info */}
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"></textarea>

      {/* Address */}
      <h3>Address</h3>
      <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" />
      <input
        type="text"
        name="address.country"
        value={formData.address.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        type="text"
        name="address.line1"
        value={formData.address.line1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="address.line2"
        value={formData.address.line2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        type="text"
        name="address.postalCode"
        value={formData.address.postalCode}
        onChange={handleChange}
        placeholder="Postal Code"
      />
      <input
        type="text"
        name="address.state"
        value={formData.address.state}
        onChange={handleChange}
        placeholder="State"
      />

      {/* Shipping */}
      <h3>Shipping</h3>
      <input
        type="text"
        name="shipping.name"
        value={formData.shipping.name}
        onChange={handleChange}
        placeholder="Shipping Name"
      />
      <input
        type="text"
        name="shipping.phone"
        value={formData.shipping.phone}
        onChange={handleChange}
        placeholder="Shipping Phone"
      />

      {/* Shipping Address */}
      <h4>Shipping Address</h4>
      <input
        type="text"
        name="shipping.address.city"
        value={formData.shipping.address.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="shipping.address.country"
        value={formData.shipping.address.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        type="text"
        name="shipping.address.line1"
        value={formData.shipping.address.line1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="shipping.address.line2"
        value={formData.shipping.address.line2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        type="text"
        name="shipping.address.postalCode"
        value={formData.shipping.address.postalCode}
        onChange={handleChange}
        placeholder="Postal Code"
      />
      <input
        type="text"
        name="shipping.address.state"
        value={formData.shipping.address.state}
        onChange={handleChange}
        placeholder="State"
      />

      <button type="submit">Submit</button>
    </form>
  );
};
