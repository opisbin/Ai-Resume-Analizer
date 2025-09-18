export const meta = () => {
    return [
        { title: "Resumind | Auth" },
        { name: "description", content: "Log into your account!" },
    ];
}

const Auth = () => {
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col item-center gap-2 text-center">
                        <h1>Welcome!</h1>
                        <h2>Log in to Continue Your Job Journey</h2>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth;