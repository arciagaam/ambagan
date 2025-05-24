import { Input } from "@/components/ui/input";
import { signup } from "./actions";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignupPage() {

    return (
        <div className="h-screen w-screen flex items-center justify-center p-10">
            <form action={signup} className="rounded-2xl border border-black/50 p-10 flex flex-col gap-5 w-full">

                <h1>Signup</h1>

                <div className="flex flex-col gap-1">
                    <Label>Email</Label>
                    <Input id="email" name="email" />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>Password</Label>
                    <Input id="password" name="password" type="password" />
                </div>

                <Button>Login</Button>
            </form>
        </div>
    )
}
