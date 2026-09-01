import { Card } from "@/components/ui/Card/card";
import { Input } from "@/components/ui/input";

export default function Contact() {
    return <>
        <div className="px-6 py-8">
            <div className="flex justify-center items-center m-auto"><h3>Have a role, partnership, or collaboration in mind? I&apos;d love to hear from you.</h3></div>
            <div className="flex flex-column justify-between mt-12">
                <div className="m-auto">
                    <h4>Reach out to me</h4>
                </div>
                <div className="m-auto">
                    <Card>
                        <div className="text-center">
                            <h4>Send me a Message</h4>
                            <div>
                                <Input></Input>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </>
}