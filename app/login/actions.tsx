"use server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  const data = {
    username,
    password,
  };

  const response = await fetch("http://127.0.0.1:5000/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    redirect("https://youtu.be/z6pCW7Q7x7M?si=IXB6t8YHbWrhVU4x");
  } else {
    return { error: true };
  }
}
