"use server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();
  const email = formData.get("email")?.toString();

  const data = {
    username,
    password,
    email,
  };

  const response = await fetch("http://127.0.0.1:5000/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    redirect("https://youtu.be/NcN_CrnRUXc?si=iGdK2KStW24H5xta");
  } else {
    return { error: true };
  }
}
