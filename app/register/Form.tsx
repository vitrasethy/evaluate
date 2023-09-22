"use client";
import { useState } from "react";
import {handleSubmit} from "./actions"

export default function Form() {
  const [error, setError] = useState<boolean>(false);

  async function onCreate(formData: FormData) {
    const res = await handleSubmit(formData);
    setError(res.error);
  }

  return (
    <div>
      <form action={onCreate}>
        <div className="md:mt-4">
          <label className="block md:text-lg min-[300px]:text-base font-medium text-slate-700">
            Username
          </label>
          <div className="mt-1">
            <input
              name="username"
              className="text-sm text-black md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <label className="block md:text-lg text-base font-medium text-slate-700">
            Email
          </label>
          <div className="mt-1">
            <input
              name="email"
              placeholder="Enter your email"
              className="text-sm text-black md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <label className="block md:text-lg text-base font-medium text-slate-700">
            Password
          </label>
          <div className="mt-1">
            <input
              name="password"
              placeholder="Enter your password"
              className="text-sm text-black md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white">
            Register
          </button>
        </div>
      </form>
      <div className={error ? "" : "hidden"}>
        <p className="mt-1 md:mt-2 text-sm md:text-base text-red-500">
          We don't have an account with that email address.
        </p>
      </div>
    </div>
  );
}
