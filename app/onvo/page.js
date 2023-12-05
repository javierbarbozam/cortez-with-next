
import axios from 'axios';


import { OnvoPay } from '../components/OnvoPay';


async function createPaymentId() {
  // console.log(process.env.ONVO_TOKEN_SECRET);

  const { data, status } = await axios.post('https://api.onvopay.com/v1/payment-intents',
    {
      currency: 'USD',
      amount: 1000,
      description: 'my first payment intent',
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.ONVO_TOKEN_SECRET}`,
      },
    },
  );

  if (status == 201) {
    // Payment intent id to pass down to the front-end
    return data.id;
  }
  return null

}

export default async function Checkout() {
  const paymentId = await createPaymentId();

  console.log(paymentId);

  return (
    <OnvoPay paymentId={paymentId} />
  );
}
