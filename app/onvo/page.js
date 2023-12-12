"use server"

import { OnvoPayment } from '../components/OnvoPayment';

import axios from 'axios';

export default async function Onvo() {
  async function getPaymentIntent(amount = 100000, description = 'my first payment intent 3') {
    const { data, status } = await axios.post('https://api.onvopay.com/v1/payment-intents',
      {
        currency: 'CRC',
        amount,
        description
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ONVO_TOKEN_SECRET}`,
        },
      },
    );

    if (status == 201) {
      // Payment intent id to pass down to the front-end
      console.log(data.id);
    }

    return data.id;

  }

  const paymentIntentId = await getPaymentIntent();

  return (
    <>
      <OnvoPayment id={paymentIntentId} />
    </>
  )
}