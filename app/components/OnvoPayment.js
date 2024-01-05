"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function OnvoPayment({ id, customerId }) {
  const router = useRouter();
  const onvoRef = useRef(null);

  useEffect(() => {
    const createSDKInstance = (id, paymentType = null, customerId = null) => {
      onvoRef.current?.close(); // Destroy the previous instance

      onvoRef.current = window.onvo.pay({
        publicKey: process.env.NEXT_PUBLIC_ONVO_TOKEN,
        paymentType: paymentType,
        onSuccess: (data) => {
          router.push("/pago-confirmado");
        },
        onError: (error) => {
          router.push("/");
          alert("El pago no pudo ser realizado, por favor intente de nuevo.");
          console.log("error", error);
        },
        // Optional params
        ...(customerId && { customerId }),
        ...(paymentType === "subscription" && { subscriptionId: id }),
        ...(paymentType === "one_time" && { paymentIntentId: id }),
      });

      onvoRef.current.render("#sdk-container"); // Render the new instance
    };

    (async () => {
      createSDKInstance(id, "one_time", customerId);
    })(id, customerId);
  }, [id, customerId, router]); // Agregar router al array de dependencias

  return (
    <>
      <div id="sdk-container" style={{ height: 600 }} />
    </>
  );
}
