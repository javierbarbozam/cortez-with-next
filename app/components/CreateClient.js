"use client"

export function CreateClient({ createCustomer }) {
  return <form action={createCustomer}>
      <button  type="submit">Click</button>
    </form>
}