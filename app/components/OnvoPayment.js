"use client"

import { useEffect, useRef } from 'react';
import { redirect } from 'next/navigation';

export function OnvoPayment({ id, customerId }) {
  const onvoRef = useRef(null);

  useEffect(() => {
    (async () => {
      createSDKInstance(id, "one_time", customerId);
    })();
  }, [id, customerId]);

  const createSDKInstance = (id, paymentType = null, customerId = null) => {
    onvoRef.current?.close(); // Destroy the previous instance

    onvoRef.current = window.onvo.pay({
      publicKey: process.env.NEXT_PUBLIC_ONVO_TOKEN,
      paymentType: paymentType,
      onSuccess: (data) => {
        console.log('success', data);
        redirect('/pago-confirmado')
      },
      onError: (error) => {
        console.log('error', error);
      },
      // Optional params
      ...(customerId && { customerId }),
      ...(paymentType === 'subscription' && { subscriptionId: id }),
      ...(paymentType === 'one_time' && { paymentIntentId: id }),
    });

    onvoRef.current.render('#sdk-container'); // Render the new instance
  };

  return (
    <>
      <div id="sdk-container" style={{ height: 600 }} />
    </>
  )
}