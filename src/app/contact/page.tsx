import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact(){
    return <>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-screen my-12">
            <div>
                <div><h1 className="text-7xl font-bold mb-4">Let's Get in Touch</h1></div>
                <div><p>Or just reach out manually to <span><a className="text-(--primary)" href="mailto:prajjwal1997@gmail.com">prajjwal1997@gmail.com</a></span></p></div> {/** Add a hyperlink to email ID*/}
            </div>
            <div>
                <form action="">
                    <div className="mb-7">
                        <Label className="mb-2" htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" placeholder="Name"/>
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="phone">Phone Number</Label>
                        <Input type="text" id="phone" name="phone" placeholder="Phone No."/>
                    </div>
                    <div className="my-7">
                        <Label className="mb-2" htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Message"/>
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