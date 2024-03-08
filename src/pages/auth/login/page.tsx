import AppButton from "@/components/inputs/button";
import TextInputComponent from "@/components/inputs/text-input";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
    const handleSubmitForm = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="grid md:grid-cols-2">
            <div className="bg-authImage bg-cover bg-center bg-no-repeat h-dvh" />
            <div className="flex flex-col items-center md:pt-40 2xl:pt-60">
                <div className="flex flex-col justify-start items-center gap-4 w-full py-10 md:py-0">
                    <h2 className="h2">Sign In</h2>
                    <p className="text-sm md:text-xl opacity-60 text-wrap">
                        Don’t have an account yet?{" "}
                        <Link href="/auth/register">
                            <span className="text-green cursor-pointer ml-4">Sign Up</span>
                        </Link>
                    </p>
                    <form onSubmit={handleSubmitForm} className="flex flex-col justify-between items-center gap-6 w-full">
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Your username or email address" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="w-full text-center">
                            <TextInputComponent type="text" placeholder="Password" className="md:w-1/2 text-sm md:text-xl" />
                        </div>
                        <div className="flex flex-col items-center xl:flex-row justify-between w-1/2">
                            <div className="flex items-center gap-2">
                                <input id="login-checkbox" type="checkbox" />
                                <label htmlFor="login-checkbox" className="opacity-60 text-sm md:text-xl">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <Link href={"#"} className="opacity-60 text-sm md:text-xl">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <AppButton title="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
