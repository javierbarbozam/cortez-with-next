"use client";

import React, { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export const CreateClient = ({ createCustomer }) => {
  const [formData, setFormData] = useState({
    address: {
      city: null,
      line1: null,
      line2: null,
      postalCode: null,
      state: null,
    },
    description: null,
    email: null,
    name: null,
    phone: null,
    shipping: {
      address: {
        city: null,
        line1: null,
        line2: null,
        postalCode: null,
        state: null,
      },
      name: "",
      phone: null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
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
    <CheckoutForm
      formData={formData}
      action={createCustomer}
      handleChange={handleChange}
    />
  );
};
