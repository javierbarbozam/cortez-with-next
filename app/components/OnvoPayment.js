"use client"

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

export function OnvoPayment({ id }) {
  const onvoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      createSDKInstance(id, "one_time");
    })();
  }, [id]);

  const createSDKInstance = (id, paymentType = null, customerId = null) => {
    onvoRef.current?.close(); // Destroy the previous instance

    onvoRef.current = window.onvo.pay({
      publicKey: process.env.NEXT_PUBLIC_ONVO_TOKEN,
      paymentType: paymentType,
      onSuccess: (data) => {
        console.log('success', data);
        router.push('/pago-confirmado')
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
      <Script src="https://sdk.onvopay.com/sdk.js" strategy="beforeInteractive" />
      <div id="sdk-container" style={{ height: 600 }} />
    </>
  )
}