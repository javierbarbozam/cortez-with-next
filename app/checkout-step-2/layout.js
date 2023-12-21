import Script from 'next/script';


export default function CheckoutLayout({children}) {
  return (
    <div className="checkout-layout">
      <Script src="https://sdk.onvopay.com/sdk.js" strategy="beforeInteractive" />
      {children}
    </div>
  )
}