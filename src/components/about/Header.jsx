import Logo from "../../assets/company_logo.svg"

function Header() {
    return(
        <header>
            <div className="custom-container">
                <div className="flex flex-col justify-center items-center">
                    <img src={Logo} alt="" className="w-[300px]"/>
                    <div className="my-10 flex justify-center items-center flex-col">
                        <p className="text-[15px] text-[#306EF7] font-[600]">OUR MISSION</p>
                        <h1 className="text-[55px] font-[600]">We exist to help creators</h1>
                        <h1 className="text-[55px] font-[600]">own their audience.</h1>
                        <p className="text-[20px] font-[400]">We believe that social platforms are taking advantage of creators.</p>
                        <p className="text-[20px] font-[400]">We want to change that and help creators fight back. </p>
                    </div>

                    <article className="w-[700px] text-[18px] font-[400] my-15">
                        <p>
                            Building a career on social platforms is like building a home on someone else's
                            land. While social platforms are great for discovering and reaching your audience,
                            your goal as a creator should be to convert your followers into email or text
                            message subscribers. Why? Look no further than TikTok. Almost overnight,
                            millions of creative people almost lost their careers. 
                        </p>
                        <br />
                        <br />
                        <p>
                            If a platform removes your account, or their algorithm for distribution no longer
                            favours you, are you prepared? 
                        </p>
                        <br />
                        <br />
                        <p>
                            If you want to build a career as a creator, your focus should be on building durable
                            distribution channels. Without distribution, you have no business. So how can you
                            build an audience that you actually own? With emails and phone numbers. These
                            distribution channels are direct. Instead of going through some algorithm, when
                            you share over email and text message, you know that your audience will see your
                            content. Even better is the fact that you own these lists. Instagram removes your
                            account, you're ok. YouTube changes their algorithm, you're ok. You own your
                            audience. 
                        </p>
                        <br />
                        <p>
                            We built Marico to make this process easy, fast, and effective. The traditional
                            solution to this problem involves spending days building a website or hiring
                            someone expensive to do it for you. But those days are gone. With Marico, you
                            get a portfolio that is always up-to-date and converts visitors into email or text
                            message subscribers. The best thing? It takes under 5 minutes to setup, and it
                            automatically updates whenever you post new content anywhere online. We
                            believe the best tools are the ones you don't even notice. Marico helps you build
                            your own audience, without any hassle or time commitment. All you have to do is
                            share your portfolio link with your audience, and we'll handle the rest. 
                        </p>
                        <br />
                        <p>
                            You can also create posts from within Marico and share them in just a few clicks
                            to your portfolio, and to your email and text message subscribers. Since all of your
                            content is already in Marico, creating content takes minutes, not hours. 
                        </p>
                        <br />
                        <br />
                        <p>
                            For too long, social platforms have taken advantage of creators. Fight back and
                            build an audience that you own. 
                        </p>
                        <br />
                        <br />
                        <p className="font-[600]">- The Team Marico (Olivia, William, and Noah) </p>
                    </article>
                </div>
                    <hr className="text-[#828282]"/>
            </div>
        </header>
    )
}

export default Header