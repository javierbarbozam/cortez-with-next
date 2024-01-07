import { redirect } from 'next/navigation';
import { CreateClient } from '../components/CreateClient';

export default async function CheckoutStep1({ searchParams }) {

  async function createCustomer(formData) {
    'use server';

    const rawFormData = {
      address: {
        city: formData.get('address.city'),
        country: formData.get('address.country'),
        line1: formData.get('address.line1'),
        line2: formData.get('address.line2'),
        postalCode: formData.get('address.postalCode'),
        state: formData.get('address.state'),
      },
      description: formData.get('description'),
      email: formData.get('email'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      shipping: {
        address: {
          city: formData.get('shipping.address.city'),
          country: formData.get('shipping.address.country'),
          state: formData.get('shipping.address.state'),
          line1: formData.get('shipping.address.line1'),
          line2: formData.get('shipping.address.line2'),
          postalCode: formData.get('shipping.address.postalCode'),
        },
        name: formData.get('shipping.name'),
        phone: formData.get('shipping.phone'),
      },
    };

    const { id } = await fetch('https://api.onvopay.com/v1/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ONVO_TOKEN_SECRET}`,
      },
      body: JSON.stringify(rawFormData),
    }).then((res) => res.json());

    redirect(`/checkout-step-2?customerId=${id}`);
  }

  return (
    <>
      <h1>Checkout 1</h1>
      <CreateClient createCustomer={createCustomer} />
    </>
  );
}
