import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card/card";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TwitterIcon from "../../app/components/icons/x";
import GithubIcon from "../components/icons/github";
import LinkedInIcon from "../components/icons/linkedin";
import CodepenIcon from "../components/icons/codepen";

export default function Contact() {
    return <>
        <div className="px-6 py-8">
            <div className="flex flex-column justify-between mt-8">
                <div className="w-full mt-2">
                    <div className="my-1">
                        <h4>Let's connect and create something awesome</h4>
                        <p className="mt-4">Whether ypu're brand looking for a developer advocate, 
                        a company in need of FullStack Developer, or just want to chat about tech, 
                        I'd love to hear from you.</p>
                        <h4 className="underline underline-offset-8 mt-5">prajjwals2411@gmail.com</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-8 w-fit">
                        <Card className="flex flex-row w-fit p-5 items-center">
                            <div><TwitterIcon /></div>
                            <div className="flex flex-col">
                                <div>X (Twitter)</div>
                                <div>@username</div>
                            </div>                            
                        </Card>
                        <Card className="flex flex-row w-fit p-5 items-center">
                            <div><CodepenIcon /></div>
                            <div className="flex flex-col">
                                <div>Codepen</div>
                                <div>@username</div>
                            </div>                            
                        </Card>
                        <Card className="flex flex-row w-fit p-5 items-center">
                            <div><GithubIcon /></div>
                            <div className="flex flex-col">
                                <div>Github</div>
                                <div>@username</div>
                            </div>                            
                        </Card>
                        <Card className="flex flex-row w-fit p-5 items-center">
                            <div><LinkedInIcon /></div>
                            <div className="flex flex-col">
                                <div>Linkedin</div>
                                <div>@username</div>
                            </div>                            
                        </Card>
                        <Card className="flex flex-row w-fit p-5 items-center">
                            <div><TwitterIcon /></div>
                            <div className="flex flex-col">
                                <div>Leetcode</div>
                                <div>@username</div>
                            </div>                            
                        </Card>
                    </div>
                </div>
                <div className="m-auto w-1/2 h-full">
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
