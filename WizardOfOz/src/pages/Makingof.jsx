import React from "react";
import Slider from 'react-slick';
import ThemeButton from "../components/ThemeButton";


function Makingof() {  

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 3, // reactive based on amount of extra images
         responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
    }

    return (
       <main>
           <div className="main-top">
                <h1>Making Of</h1>  
                <ThemeButton/>
            </div>     
            
            <div className="story-template">
                <div className="banner">
                    <img src="/cp-frontend-LucaLattuca/banner.jpg" alt="" />
                    <div className="student-info">
                        <h2 id="story-name">title</h2>
                        <h3 id="student-name">name</h3>
                    </div>
                </div>

            <div className="story-info">

                <div className="explainer-section">
                    <div className="section-title">
                        {/* if video exists */}
                        <h2>Video - Explainer Movie</h2> <hr />
                        {/* else */}
                        {/* <h2> verhaallijn  </h2> */}
                        
                    </div>
                    <div className="section-info">
                        {/* if video exists, else */}
                        <video  >
                            <source src="" type=""/>
                        </video>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque corporis deserunt labore voluptas illum distinctio autem aut similique adipisci explicabo. Repellendus at officia optio debitis excepturi magni! Dolore, quam odit.</p>
                    </div>
                </div>

                <div className="extra-images">
                    <div className="section-title">
                        <h2>Extra Beeldmateriaal</h2> <hr />
                    </div>
                    <div className="slider-container">
                        <Slider {...carouselSettings}>
                            <div className="carousel-item">
                                <p>item</p>
                            </div>

                            <div className="carousel-item">
                                <p>item</p>
                            </div>

                            <div className="carousel-item">
                                <p>item</p>
                            </div>
                            </Slider>

                    </div>
                </div>

            </div>
            </div>
       </main>

        
    );

}

export default Makingof;