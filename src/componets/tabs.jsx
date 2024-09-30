import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import mixitup from "mixitup";

function Tabs() {

    useEffect(() => {
        mixitup(document.querySelector(".photo-gallery"));
    }, []);


    return (
        <>
            <div>
                <div>
                    <div>
                        <ul className="flex flex-wrap justify-center w-full px-4 mb-5">
                            <li className="active flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter="*">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">All</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".web">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">Web</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".mobile">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">Mobile</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".ui-ux">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">UI/UX</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-screen-xl flex flex-wrap mx-auto photo-gallery">
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Tracking</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Best Pizza</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web2.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">American Food</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web3.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Title Here</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web4.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web5.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Website Design</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web6.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Coffie time</span>
                                            <h4 className="text-xl font-extrabold color_light_brown"></h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web7.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Biunch</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web8.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Title Here</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web9.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Bur</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web10.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Tour Guide</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web11.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Wild Folweres</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web12.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Platform Investing</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web13.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Yoga</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web14.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web15.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Product Catlog</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web16.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Grilled Skewers</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web17.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">taste</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web18.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Brunch</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web19.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Collection</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web20.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Ameriva Resto</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web21.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">The Coffeee</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web22.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Sunday Bruch</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web23.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Wiston pool</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web24.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Swimming</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web/web25.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Food For Your Dog</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Wallet</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Booking</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app2.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Workout Tracker</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app3.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Cardiology</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app4.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Cardiology</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app5.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Main Units</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app6.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Friend Feed</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app7.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Lorem Bank</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app8.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Bank App</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app9.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Food Bank</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app10.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Mobile App</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app11.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Delicious Food</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app12.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Overview</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app13.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Online Meeting</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app14.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Book Your Flight</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app15.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Desis</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app16.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">M - Bank</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app17.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Education</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app18.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Online Grocery Store</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app19.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Will Smith</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app20.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">TravelApp</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app21.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">TravelApp</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app22.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Juicy And Savory Steak</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app23.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Crypto</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app24.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Flash Sale </h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobil_app/mobile_app25.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Crowdfund</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design3.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design4.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Mobil App Ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design5.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Landing Page Ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design6.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Landing Page ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design7.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Landing Page ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design8.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Landing Page ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design9.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Ui Design</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design10.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Ui Design</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design11.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Main Units</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design12.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Ui Backgroung</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design13.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Make Easy Ui</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design14.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Weekly Task</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui-ux/ui_design15.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Back Collection</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;