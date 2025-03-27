export default function Footer(){
    const year =new Date().getFullYear()
    return(
        <footer className={"lg:w-[45%] m-auto mt-6 p-4 leading-9"}>
            <section className={"flex gap-4 flex-col md:flex-row lg:flex-row md:items-center md:justify-between lg:items-center lg:justify-between" +
                " rounded"}>
                <div className={"flex flex-col"}>
                    <h3 className={"font-bold text-xl"}>Join over 100 Learners</h3>
                    <p className={"font-medium text-gray-200"}>Stay updated with the latest insights and resources</p>
                </div>
                <div className={"flex flex-col "}>
                    <p>Subscribe to our newsletter</p>
                    <form className={"w-full flex gap-2 "}>
                        <input
                            type={"email"}
                            className={"bg-gray-700  p-2 rounded outline-none active:outline-white "}
                            placeholder={"jim@gmail.com"}
                            autoFocus={false}
                        />
                        <button
                            type={"button"}
                            className={"bg-blue-600 rounded font-bold p-2 cursor-pointer"}>
                            Subscribe
                        </button>
                    </form>
                    <p className={"mt-2"}>We respect your privacy and will not share your details</p>
                </div>
            </section>
            <section className={"flex flex-col justify-between mt-10"}>
                <div className={"flex justify-between gap-9 flex-col md:flex-row lg:flex-row"}>
                    <div>
                        <div>
                            <div className={"text-xl font-bold"}>Nevani learning</div>
                            <p className={"mt-4"}>Explore new skills,Elevate your learning,Unlock your potential.</p>
                        </div>
                    </div>
                    <div className={"flex gap-2 justify-between"}>
                        <div>
                            <div className={"font-bold "}>Explore</div>
                            <nav className={"mt-4"}>
                                <ul className={"[&>*]:text-gray-300 [&>*]:cursor-pointer [&>*]:hover:text-gray-100"}>
                                    <li>Home</li>
                                    <li>Features</li>
                                    <li>Blog</li>
                                    <li>Pricing</li>
                                    <li>Testimonials</li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <div className={"font-bold "}>About Us</div>
                            <nav className={"mt-4"}>
                                <ul className={"font-medium [&>*]:cursor-pointer [&>*]:hover:text-gray-100 [&>*]:text-gray-400"}>
                                    <li>About</li>
                                    <li>Press & Media</li>
                                    <li>Careers</li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <p>socials</p>
                        </div>
                    </div>
                </div>
                <div className={"mt-4"}>&copy; {year} All rights preserved</div>
            </section>
        </footer>
    )
}