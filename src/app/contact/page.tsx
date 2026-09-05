import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return <>
        <div className="px-6 py-8">
            {/* <div className="flex justify-center items-center m-auto"><h3>Have a role, partnership, or collaboration in mind? I&apos;d love to hear from you.</h3></div> */}
            <div className="flex flex-column justify-between mt-12">
                <div className="w-full">
                    <h4>Reach out to me</h4>
                    
                </div>
                <div className="m-auto w-1/2">
                    <Card>
                        <div className="pb-12 px-4">
                            <form action="">
                                <FieldSet>
                                    <FieldLegend className="pb-5">Send me a Message</FieldLegend>
                                    <FieldGroup>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Field>
                                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                                <Input id="name" autoComplete="off" placeholder="Your Name" />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                                <Input id="email" autoComplete="off" placeholder="you@example.com" />
                                            </Field>
                                        </div>
                                        <Field>
                                            <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                            <Input id="subject" autoComplete="off" placeholder="What's this about?" />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="subject">Message</FieldLabel>
                                            <Textarea id="subject" autoComplete="off" placeholder="What's this about?" />
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>
                                <Field orientation="horizontal">
                                    <Button className="mt-6" type="submit">Send Message</Button>
                                </Field>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </>
}
