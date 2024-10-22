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
export default function PasswortVergessen() {

    return (
        <div>
            <div className="flex justify-center pt-60">
                <Card className="w-5/6 md:w-2/6 bg-transparent  border border-white text-white">
                    <CardHeader>
                        <CardTitle className="">Passwort Vergessen</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="pb-6">
                            <Label className="font-bold text-lg">Email</Label>
                            <Input className="text-black" type="email" placeholder="Email" />
                        </div>

                        <div>

                            <div className="flex justify-center grid grid-cols-2 w-full">
                                <div className="flex justify-center">
                                    <Link to="/">
                                        <Button className="h-12 bg-green-950">Zurück</Button>
                                    </Link>
                                </div>
                                <div className="flex justify-center">
                                    <Button className=" h-12 bg-red-950">Senden</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}