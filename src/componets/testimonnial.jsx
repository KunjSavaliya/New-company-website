import React from 'react';
import Slider from "react-slick";
function Testimonnial() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="card_content h-[100] relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_content ">
                                    <h4 className="text-black text-lg font-bold leading-5">Sadiq kam</h4>
                                    <h6 className="text-lg color_grey font-medium">United States</h6>
                                </div>
                            </div>
                            <p className="text-sm color_grey font-medium mb-5"> Darshan was great to work with, very
                             cooperative and enthusiastic
                            </p>
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content h-[100] relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_content ">
                                    <h4 className="text-black text-lg font-bold leading-5">Ivan P</h4>
                                    <h6 className="text-lg color_grey font-medium">United States</h6>
                                </div>
                            </div>
                            <p className="text-sm color_grey font-medium mb-5">I have been working with darshan from past 8 months, he is
                             one of the best frelancer i found on upwork. he give work on time and also supported with the deadlines and I have learned a lot, will also work in future for sure.
                            </p>
                            
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content h-[100] relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_content ">
                                    <h4 className="text-black text-lg font-bold leading-5">Maij Shaikh</h4>
                                    <h6 className="text-lg color_grey font-medium">Malaysia</h6>
                                </div>
                            </div>
                            <p className="text-sm color_grey font-medium mb-5">It was another great experience with this freelancer.
                            Every project help me to get more unique work thanks for this work
                            </p>
                            
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content h-[100] relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_content ">
                                    <h4 className="text-black text-lg font-bold leading-5">Grace D.</h4>
                                    <h6 className="text-lg color_grey font-medium">United States</h6>
                                </div>
                            </div>
                            <p className="text-sm color_grey font-medium mb-5">
                            I am happy working with this developer. They have excellent knowledge in Flutter, Laravel,
                            and API integration. They also have a very strong team. I plan to hire this team to maintain
                             my app. Thank you Mr DS
                            </p>
                            
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );

}
export default Testimonnial;