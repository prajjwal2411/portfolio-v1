import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact(){
    return <>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-screen my-10">
            <div>
                <div><h1>Let's Get in Touch</h1></div>
                <div><p>Or just reach out manually to prajjwal1997@gmail.com</p></div> {/** Add a hyperlink to email ID*/}
            </div>
            <div>
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Name"/>
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input type="text" id="phone" name="phone" placeholder="Phone No."/>
                </div>
                <div>
                    <Label htmlFor="message">Message</Label>
                    <Input type="text" id="message" name="message" placeholder="Message"/>
                </div>
                <div></div>
            </div>
        </div>
    </>
}