"use server"

import { OnvoPayment } from '../components/OnvoPayment';
import { useRouter } from 'next/navigation';

import axios from 'axios';

export default async function Onvo() {
  const router = useRouter();
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
      router.push('/pago-confirmado');
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