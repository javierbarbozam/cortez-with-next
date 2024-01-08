"use server";

import { OnvoPayment } from "../components/OnvoPayment";

import axios from "axios";

export default async function Onvo({ searchParams }) {
  const paymentDescription = searchParams.description;
  // Book price is harcoded, this needs needs more integration with Onvo API
  async function getPaymentIntent(
    amount = 2100000,
    description = `${paymentDescription}`
  ) {
    const { data } = await axios.post(
      "https://api.onvopay.com/v1/payment-intents",
      {
        currency: "CRC",
        amount,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ONVO_TOKEN_SECRET}`,
        },
      }
    );

    return data.id;
  }

  const paymentIntentId = await getPaymentIntent();

  return (
    <>
      <OnvoPayment customerId={searchParams.customerId} id={paymentIntentId} />
    </>
  );
}
