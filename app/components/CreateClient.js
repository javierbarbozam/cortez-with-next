'use client';

import React, { useState } from 'react';
import { CheckoutForm } from './CheckoutForm';

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
    <CheckoutForm formData={formData} action={createCustomer} handleChange={handleChange}/>
  );
};
