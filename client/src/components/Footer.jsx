import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsDiscord, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterCom(){
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-col-1">
                    <div className="mt-5">
                    <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Simply</span>
                    Blog
                    </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-col-3 sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="http://www.100jsprojects.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    100 Js Projects
                                </Footer.Link>
                                <Footer.Link href="/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Simply Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="http://www.github.com/priyanshu1502"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup> 
                        </div>
                        <div>
                            <Footer.Title title='Leagal' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        Terms &amp; Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup> 
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Simply Blog" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-cente">
                    <Footer.Icon  href="#" icon={BsFacebook} />
                    <Footer.Icon  href="#" icon={BsTwitter} />
                    <Footer.Icon  href="#" icon={BsInstagram} />
                    <Footer.Icon  href="http://github.com/priyanshu1502" icon={BsGithub} />
                    <Footer.Icon  href="#" icon={BsDiscord} />
                </div>
                </div>
            </div>
        </Footer>
    )
}