import LoginAndRegisterTab from "./_components/LoginAndRegisterTab";

export default function LoginPage() {

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center p-10 gap-10">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold uppercase">Ambagan</h1>
                <p className="hidden">Split bills effortlessly with friends, family, and colleagues. Create groups, track expenses, and settle up with ease.</p>
            </div>

            <div className="flex flex-col items-center gap-5 rounded-2xl p-4 shadow border border-black/10">
                <p>Sign in to your account or create a new one</p>
                <LoginAndRegisterTab />
            </div>

        </div>
    )
}
