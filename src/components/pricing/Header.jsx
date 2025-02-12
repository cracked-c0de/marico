

function Header() {
    return(
        <header>
            <div className="custom-container mb-30">
                <h1 className="text-[55px] font-[600] text-center my-5">Choose the plan that's right for you.</h1>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col border border-[#B4B1B1] m-5 bg-[#131313] rounded-3xl p-7">
                        <div className="mb-8">
                            <h1 className="text-[40px] font-[600]">Starter</h1>
                            <p className="text-[18px] font-[300] text-[#b1b1b1]">Perfect for tying out Wavium</p>
                            <h2 className="text-[50px] font-[600]">Free</h2>
                        </div>
                        <div className="mt-15 mb-10">
                            <h3 className="text-[20px] font-[600]">Collect Unlimited subscribers</h3>
                            <p className="text-[17px] font-[300]">500 monthly emails</p>
                        </div>
                        <p className="text-[#B4B1B1] font-[300] text-center">Upgrade to send more emails</p>
                        <div className="my-10">
                            <h3 className="text-[20px] font-[600] mb-3">Key Features</h3>
                            <ul className="text-[14px] font-[400]">
                                <li className="before:content-['✓'] before:mr-2">Automatic updating home page</li>
                                <li className="before:content-['✓'] before:mr-2">Unlimited sources + posts</li>
                            </ul>
                        </div>
                        <button className="text-center w-full border-2 cursor-pointer transition-all hover:bg-white hover:text-[#3C82F4] hover:border-white py-4 text-[20px] rounded-xl font-[600] border-[#4681E7]">Start For Free</button>
                    </div>

                    <div className="flex flex-col border border-[#B4B1B1] m-5 bg-[#131313] rounded-3xl p-7">
                        <div className="mb-8">
                            <h1 className="text-[40px] font-[600]">Basic</h1>
                            <p className="text-[18px] font-[300] text-[#b1b1b1]">Build your online home</p>
                            <div>
                                <h2 className="text-[50px] font-[600]">$14 <span className="text-[18px] font-[300] text-[#B4B1B1]">Per month</span></h2>
                                <p className="underline text-[18px] font-[300] text-[#b1b1b1]">or $19/mo, billed monthly</p>
                            </div>
                        </div>
                        <div className="my-7">
                            <h3 className="text-[20px] font-[600]">Collect Unlimited subscribers</h3>
                            <p className="text-[17px] font-[300]">2,000 free monthly emails</p>
                        </div>
                        <p className="text-[#B4B1B1] font-[300] text-center my-3">Purchase more for $0.002 per email</p>
                        <div className="my-7">
                            <h3 className="text-[20px] font-[600] mb-3">Everything in starter, plus</h3>
                            <ul className="text-[14px] font-[400]">
                                <li className="before:content-['✓'] before:mr-2">Remove Wavium branding</li>
                                <li className="before:content-['✓'] before:mr-2">Embed Wavium on your own domain</li>
                            </ul>
                        </div>
                        <button className="text-center w-full border-2 cursor-pointer transition-all hover:bg-white hover:border-white hover:text-[#3C82F4] mt-4 py-4 text-[20px] rounded-xl font-[600] border-[#4681E7]">Start Free 14-day Trial</button>
                    </div>

                    <div className="flex flex-col border border-[#3C82F4] m-5 bg-[#3C82F4] rounded-3xl p-7">
                        <div className="mb-8">
                            <h1 className="text-[40px] font-[600]">Complete</h1>
                            <p className="text-[18px] font-[300] text-white">Enhanced engagement</p>
                            <div>
                                <h2 className="text-[50px] font-[600]">$29 <span className="text-[18px] font-[300] text-white">Per month</span></h2>
                                <p className="text-[18px] font-[300] text-white">or $34/mo, billed monthly</p>
                            </div>
                        </div>
                        <div className="my-7">
                            <h3 className="text-[20px] font-[600]">Collect Unlimited subscribers</h3>
                            <p className="text-[17px] font-[300]">10,000 free monthly emails</p>
                        </div>
                        <p className="text-white font-[300] text-center my-3">Purchase more for $0.002 per email</p>
                        <div className="my-7">
                            <h3 className="text-[20px] font-[600] mb-3">Everything in basic, plus</h3>
                            <ul className="text-[14px] font-[400]">
                                <li className="before:content-['✓'] before:mr-2">Collect text massage subscribers</li>
                                <li className="before:content-['✓'] before:mr-2">Share posts over text massage</li>
                            </ul>
                        </div>
                        <button className="text-center w-full border-2 bg-white text-[#3C82F4] hover:text-white hover:bg-[#3c82f4] cursor-pointer transition-all mt-4 py-4 text-[20px] rounded-xl font-[600] border-white">Start Free 14-day Trial</button>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header