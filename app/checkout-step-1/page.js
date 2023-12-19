import {CreateClient} from '../components/CreateClient'

const dummyClient = {
  "address": {
    "city": "San José",
    "country": "CR",
    "line1": null,
    "line2": null,
    "postalCode": "10101",
    "state": "San José"
  },
  "description": "Cliente de prueba",
  "email": "test_customer@onvopay.com",
  "name": "John Doe",
  "phone": "+50688880000",
  "shipping": {
    "address": {
      "city": null,
      "country": "CR",
      "line1": null,
      "line2": null,
      "postalCode": null,
      "state": null
    },
    "name": "John Doe",
    "phone": null
  }
}

export default function CheckoutStep1({ searchParams }) {
  async function createCustomer() {
    'use server'
    console.log('createCustomer')
    fetch('https://api.onvopay.com/v1/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ONVO_TOKEN_SECRET}`
      },
      body: JSON.stringify(dummyClient)
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    })
  }


  return <>
    <h1>Checkout 1</h1>
    <CreateClient createCustomer={createCustomer} />
    
  </>
}