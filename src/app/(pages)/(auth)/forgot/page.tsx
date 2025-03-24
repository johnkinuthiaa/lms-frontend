export default function ForgotPassword(){
    return(
        <main className={"flex flex-col items-center justify-center lg:w-[90%] mt-20"}>
            <div className={"p-4 rounded-xl border border-gray-800 m-[0 auto] flex flex-col items-center justify-center "}>
                <div className={"flex flex-col gap-2"}>
                    <h1 className={"font-bold text-xl"}>Forgot Password?</h1>
                    <p className={"text-gray-300"}>Enter your email below to recover your account</p>
                </div>
                <form className={"w-full flex gap-3 flex-col mt-5 [&>button]:rounded-xl" +
                    " [&>button]:cursor:pointer [&>button]:p-2" +
                    "[&>input] [&>input]:active:outline  [&>input]:active:outline-white [&>input]:border [&>input]:border-gray-700 " +
                    " [&>input]:rounded [&>input]:p-2 "}>
                    <label className={"font-bold"}>Email</label>
                    <input type={"email"} placeholder={"m@example.com"} required={true}/>
                    <div className={" mt-2 [&>*]:cursor-pointer [&>*]:rounded flex flex-col [&>*]:p-2 gap-3"}>
                        <button className={"bg-white text-black"}>Send</button>
                    </div>
                    <div>Dont have an account? <span className={"underline"}><a href={"/register"}>Sign up</a></span></div>
                </form>
            </div>
        </main>
    )
}