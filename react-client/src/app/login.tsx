"use client"
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"


export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <div>
            <div className="flex justify-center pt-60">
                <Card className="w-5/6 md:w-2/6 bg-transparent  border border-white text-white">
                    <CardHeader>

                        <CardDescription className="text-right"><Link className="no-underline hover:underline" to="/register">Noch kein Konto?</Link></CardDescription>
                        <CardTitle className="">Anmelden</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="pb-6">
                            <Label className="font-bold text-lg">Email</Label>
                            <Input className="text-black" type="email" placeholder="Email" />
                        </div>

                        <div>
                            <Label className="font-bold text-lg">Passwort</Label>
                            <div className="grid grid-cols-12 gap-4 pb-6">
                                <Input className="col-span-11 text-black" type={showPassword ? "text" : "password"} placeholder="Passwort" />
                                {showPassword ?
                                    (<EyeIcon
                                        className="cursor-pointer text-gray-500 place-content-end"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />) :
                                    (<EyeOffIcon
                                        className="cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />)
                                }

                            </div>
                            <div className="flex justify-center grid grid-rows-1 gap-4">
                                <Button className=" h-12">Anmelden</Button>
                                <Button className="h-12 bg-white text-black hover:bg-white" ><GoogleLogo />Sign in with Google</Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <CardDescription className="text-right"><Link className="no-underline hover:underline" to="/passwort-vergessen">Passwort vergessen?</Link></CardDescription>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export function GoogleLogo() {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ display: "block" }}
        >
            <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
        </svg>


    )
}
