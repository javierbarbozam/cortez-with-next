import { redirect } from "next/navigation";
import { CreateClient } from "../components/CreateClient";

export default async function CheckoutStep1() {
  async function createCustomer(formData) {
    "use server";

    const rawFormData = {
      address: {
        city: formData.get("address.city"),
        country: "CR",
        line1: formData.get("address.line1"),
        line2: formData.get("address.line2"),
        postalCode: formData.get("address.postalCode"),
        state: formData.get("address.state"),
      },
      description: formData.get("description"),
      email: formData.get("email") || null,
      name: formData.get("name"),
      phone: formData.get("phone") ? "+506" + formData.get("phone") : null,
      shipping: {
        address: {
          city: formData.get("shipping.address.city"),
          country: "CR",
          state: formData.get("shipping.address.state"),
          line1: formData.get("shipping.address.line1"),
          line2: formData.get("shipping.address.line2"),
          postalCode: formData.get("shipping.address.postalCode"),
        },
        name: formData.get("shipping.name")
          ? formData.get("shipping.name")
          : formData.get("name"),
        phone: formData.get("shipping.phone")
          ? "+506" + formData.get("shipping.phone")
          : "+506" + formData.get("phone"),
      },
    };
    

    const clientData = await fetch("https://api.onvopay.com/v1/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ONVO_TOKEN_SECRET}`,
      },
      body: JSON.stringify(rawFormData),
    }).then((res) => res.json());

    if (clientData.id) {
      redirect(
        `/checkout-step-2?customerId=${clientData.id}&description=${clientData.description}`
      );
    } else {
      redirect("/checkout-error");
    }
  }

  return (
    <>
      <CreateClient createCustomer={createCustomer} />
    </>
  );
}
