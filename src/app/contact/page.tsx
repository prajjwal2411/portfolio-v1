"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
// Add sonner after completing the form handling logic

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        botField: "" // honeypot
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        console.log(e)
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
    // }


    
    useEffect(() => {
        console.log(formData)
    }, [formData])

    // const res = fetch("/api/asdasd", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    // });

    // const data = res.json();
    // if (data.success) {
    //     // show success UI
    // } else {
    //     // show error UI
    // }

    return <>
        <div className="grid grid-cols-2 grid-rows-1 gap-2 h-full my-12">
            <div>
                <div><h1 className="text-7xl font-bold mb-4">Let's Get in Touch</h1></div>
                <div><p>Or just reach out manually to <span><a className="text-(--primary)" href="mailto:prajjwal1997@gmail.com">prajjwal1997@gmail.com</a></span></p></div> {/** Add a hyperlink to email ID*/}
            </div>
            <div>
                <form>
                    <div className="mb-7">
                        <Label className="mb-2" htmlFor="name">Name</Label>
                        <Input onChange={handleOnChange} type="text" id="name" name="name" placeholder="Name" required />
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="email">Email</Label>
                        <Input onChange={handleOnChange} type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="phone">Phone Number</Label>
                        <Input onChange={handleOnChange} type="text" id="phone" name="phone" placeholder="Phone No."/>
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="message">Message</Label>
                        <Textarea onChange={handleOnChange} id="message" name="message" placeholder="Message" required />
                    </div>
                    <div className="my-7 hidden">
                        <Input onChange={handleOnChange} className="hidden" id="botField" name="botField"/>
                    </div>
                    <div className="mt-7">
                        <Button type="submit" className="m-auto">Submit Details</Button>
                    </div>
                </form>
                <div></div>
            </div>
        </div>
    </>
}