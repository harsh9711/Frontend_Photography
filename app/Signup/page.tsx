"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../lib/slices/authSlice";
import Link from "next/link";
import Footer from "../components/Footer";

const Signup = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = { username: "testadmin", password: password }; // Use password from state

    const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const result = await response.json();
      dispatch(setToken(result.token));
      console.log('Token:', result.token); 
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <div className="flex py-10 sm:py-0 px-20 justify-center mx-auto rounded-[50px] gap-y-28 flex-col bg-white max-w-[1538px] xl:h-[750px] h-full w-full items-start text-black">
        <div className="w-full">
          <Image
            src="/Logo.svg"
            width={100}
            height={100}
            alt="companylogo"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 w-full mx-auto justify-between items-end">
          <div className="max-w-[278px] sm:max-w-[470px] sm:w-1/2">
            <h1 className="sm:text-[24px] text-[16px] font-medium">STEP 2</h1>
            <h2 className="sm:text-[48px] text-[24px] font-bold leading-tight">
              Create an account to continue
            </h2>
            <p className="sm:text-[24px] pt-2 sm:pt-4 text-[12px] font-medium">
              You will be able to log in to Dingoo with this email address and password.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-end sm:w-1/2"
          >
            <div className="max-w-[728px] w-full gap-y-2 flex flex-col">
              <p className="sm:text-[24px] text-[12px] font-medium">
                Enter a password to create your account with
              </p>
              <input
                className="border-[#939393] p-6 border w-full rounded-[5px]"
                placeholder="Choose a password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Correct password state
              />
            </div>
            <div className="flex flex-row w-full justify-between items-end">
              <h2 className="sm:no-underline max-w-[350px] w-full underline sm:text-[16px] text-[10px] text-[#4E4E4E] font-medium">
                Use a minimum of 6 characters (case sensitive) with at least one number or special character.
              </h2>
              <Link href="/dashboard">
                <button
                  type="submit"
                  className="mt-4 max-w-[113.5px] sm:max-w-[227px] w-full p-2 font-bold sm:p-4 bg-[#000000] text-white rounded-[10px]"
                >
                  Agree & Continue
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-20 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
