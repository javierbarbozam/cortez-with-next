import { CheckoutForm } from "./CheckoutForm";

export const CreateClient = ({ createCustomer }) => {
  return <CheckoutForm action={createCustomer} />;
};
