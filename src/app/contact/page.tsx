"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { IContactForm } from "../Models/Interface/Contact";
import { useForm, SubmitHandler } from "react-hook-form";
// Add sonner after completing the form handling logic

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm<IContactForm>();
    const onSubmit: SubmitHandler<IContactForm> = data => console.log(data);
    
    const [formData, setFormData] = useState<IContactForm>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    return <>
        <div className="grid grid-cols-2 grid-rows-1 gap-2 h-full my-12">
            <div>
                <div><h1 className="text-7xl font-bold mb-4">Let's Get in Touch</h1></div>
                <div><p>Or just reach out manually to <span><a className="text-(--primary)" href="mailto:prajjwal1997@gmail.com">prajjwal1997@gmail.com</a></span></p></div> {/** Add a hyperlink to email ID*/}
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-7">
                        <Label className="mb-2" htmlFor="name">Name</Label>
                        <Input {...register("name", {required: true, minLength: 2, maxLength: 30})}
                        aria-invalid={errors.name ? "true" : "false"}
                        id="name" name="name" placeholder="Name"/>
                        {errors.name?.type === "required" && (<p role="alert">Name is required</p>)}
                        {errors.name?.type === "minLength" && (<p role="alert">Name must be at least 2 characters</p>)}
                        {errors.name?.type === "maxLength" && (<p role="alert">Name must be at most 30 characters</p>)}
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="email">Email</Label>
                        <Input {...register("email", {required: true, minLength: 2, maxLength: 30})}
                        aria-invalid={errors.email ? "true" : "false"}
                        type="email" id="email" name="email" placeholder="Email"/>
                        {errors.email?.type === "required" && (<p role="alert">Email is required</p>)}
                        {errors.email?.type === "minLength" && (<p role="alert">Email must be at least 2 characters</p>)}
                        {errors.email?.type === "maxLength" && (<p role="alert">Email must be at most 30 characters</p>)}
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="phone">Phone Number</Label>
                        <Input {...register("phone", {minLength: 6, maxLength: 15})}
                        type="tel" id="phone" name="phone" placeholder="Phone No."/>
                        {errors.phone?.type === "minLength" && (<p role="alert">Phone Number must be at least 6 characters</p>)}
                        {errors.phone?.type === "maxLength" && (<p role="alert">Phone Number must be at most 15 characters</p>)}
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="message">Message</Label>
                        <Textarea {...register("message", {required: true, minLength: 30, maxLength: 500})}
                        aria-invalid={errors.message ? "true" : "false"}
                        id="message" name="message" placeholder="Message"/>
                        {errors.message?.type === "required" && (<p role="alert">Message is required</p>)}
                        {errors.message?.type === "minLength" && (<p role="alert">Message must be at least 30 characters</p>)}
                        {errors.message?.type === "maxLength" && (<p role="alert">Message must be at most 500 characters</p>)}
                    </div>
                    <div className="my-7 hidden">
                        <Input {...register("botField")} className="hidden" id="botField" name="botField"/>
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