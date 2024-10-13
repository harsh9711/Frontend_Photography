"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";

const Login = () =>
{
    const [emailEnter, setEmailEnter] = useState("");
    const router = useRouter(); 

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        router.push(`/Signup`);
    };
 
    return (
     <div>
            <div className="flex flex-col sm:flex-col justify-center items-center py-10 sm:py-0 px-20 gap-y-28 mx-auto rounded-[50px] bg-white max-w-[1538px] h-full xl:h-[750px] w-full text-black">
                <div className="w-full">
                    <Image
                        src="/Logo.svg"
                        width={100}
                        height={100}
                        alt="companylogo"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-10 w-full justify-between items-center">
                    <div className="max-w-[278px] sm:max-w-[470px] sm:w-1/2">
                        <h1 className="sm:text-[24px] text-[16px] font-medium">STEP 1</h1>
                        <h2 className="sm:text-[48px] text-[24px] font-bold leading-tight">
                            Enter your email address to continue
                        </h2>
                        <p className="sm:text-[24px] text-[12px] font-medium">
                            Log in to your account. If you don't have one, you will be prompted to create one.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-end sm:w-1/2 w-full"
                    >
                        <div className="w-full max-w-[728px]">
                            <input
                                className="border-[#939393] p-6 border w-full rounded-[5px]"
                                placeholder="Email"
                                type="email"
                                value={emailEnter}
                                onChange={(e) => setEmailEnter(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center w-full mt-4">
                            <h2 className="underline sm:text-[16px] text-[10px] font-medium">
                                Have an account
                            </h2>
                            <button
                                type="submit"
                                className="font-bold max-w-[113.5px] sm:max-w-[227px] w-full p-2 sm:p-4 bg-[#000000] text-white rounded-[10px]"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mx-auto mt-20 flex justify-center">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
