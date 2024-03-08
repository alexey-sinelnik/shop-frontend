"use client";
import AppButton from "@/components/inputs/button";
import TextInputComponent from "@/components/inputs/text-input";
import Link from "next/link";
import { FC, JSX } from "react";

const RegisterPage: FC = (): JSX.Element => {
    const handleSubmitForm = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="grid md:grid-cols-2">
            <div className="bg-authImage bg-cover bg-center bg-no-repeat h-dvh" />
            <div className="flex flex-col items-center md:pt-40 2xl:pt-60">
                <div className="flex flex-col justify-start items-center gap-4 w-full py-10 md:py-0">
                    <h2 className="h2">Sign up</h2>
                    <p className="text-sm md:text-xl opacity-60 text-wrap">
                        Already have an account?
                        <Link href="/auth/login">
                            <span className="text-green cursor-pointer ml-4">Sign in</span>
                        </Link>
                    </p>
                    <form onSubmit={handleSubmitForm} className="flex flex-col justify-between items-center gap-6 w-full">
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Your name" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Username" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Email address" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Password" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="flex flex-col items-center xl:flex-row justify-between w-1/2">
                            <div className="flex items-center gap-2">
                                <input id="login-checkbox" type="checkbox" />
                                <label htmlFor="login-checkbox" className="opacity-60 text-sm md:text-xl">
                                    I agree with Privacy Policy and Terms of Use
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <AppButton title="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
