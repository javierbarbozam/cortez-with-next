'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

let Pay;

export function OnvoPay({ paymentId }) {
  const [onvoReady, setOnvoReady] = useState(null);

  useEffect(() => {
    Pay = onvo.pay.driver('react', { React, ReactDOM });
    setOnvoReady(true);
  }, []);

  return (
    <>
      {onvoReady ? (
        <Pay
          onError={(data) => {
            console.log('error', data);
          }}
          onSuccess={(data) => {
            console.log('success', data);
          }}
          publicKey={process.env.NEXT_PUBLIC_ONVO_TOKEN}
          paymentType="one_time"
          paymentIntentId={paymentId}
        />
      ) : null}
    </>
  );
}
