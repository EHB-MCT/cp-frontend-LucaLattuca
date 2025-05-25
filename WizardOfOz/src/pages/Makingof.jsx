import React, {useEffect, useState, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";

import ThemeButton from "../components/ThemeButton";
import arrowButton from "/cp-frontend-LucaLattuca/change-carousel-item.svg"
import Button from "../components/Button";

import {useTheme} from "../components/ThemeProvider"

import Slider from 'react-slick';

// Sources :
// https://chatgpt.com/share/6831f91e-15c4-800a-9b66-6d1197285326 : chatGPT used to style carousel and some other elements
// https://react-slick.neostack.com/docs/example/multiple-items
// https://chatgpt.com/share/68322592-fb60-800a-916e-890cbc21bd6b : chatGPT used to write filter out empty imgurls functionality
function Makingof() {  
  
  const {theme} = useTheme();
    const {id} = useParams();
    const [story, setStory] = useState(null);

    const sliderRef = useRef();

    const navigate = useNavigate();

    

    useEffect(() => {
            const fetchStory = async () => {
                try {
                    const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
                
                    const data = await response.json();
                    const selectedStory = data.find((story) => story.id.toString() === id)
                    setStory(selectedStory);
                   
                } catch (error) {
                    console.error("Error fetching story:", error);
                }
            };
            
            fetchStory();
        }, [id]);

        if (!story) return <div>Loading...</div>;
         const filteredImgs = story.imgsExtra.filter(imgUrl => imgUrl.trim() !== "");
        const slidesToShow = Math.min(filteredImgs.length, 3);

        const carouselSettings = {
            dots: false,
            infinite: filteredImgs.length > 3,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            arrows: false,
        };

        story.fairytaleLink = "https://ehb-mct.github.io/cp-frontend-LucaLattuca/"
        const handleGoToClick = () => {
          window.open(story.fairytaleLink, "_blank");
        }

    return (
       <main>
        <div className={`container ${theme}`}>

           <div className={`main-top ${theme}`}>
                <h1>Making Of</h1>  
                <ThemeButton/>
            </div>     
            <div className={`story-template ${theme}`}>
                <div className="banner">
                    <img src={story?.imgBanner || undefined} alt="banner" />

                    <div className="student-info">
                        <h2 id="story-name">{story.fairytale}</h2>
                        <h3 id="student-name">{story.nameStudent}</h3>
                    </div>
                </div>
            <div className="go-to-story">
                <button id="visit-story"onClick={handleGoToClick} >Bezoek Sprookje</button>
            </div>
            <div className="explainer">

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
                            {/* <source src="" type=""/> */}
                        </video>
                        <p>{story.description}</p>
                    </div>
                </div>

                    <div className="section-title">
                        <h2>Extra Beeldmateriaal</h2> <hr />
                    </div>
                    {/* https://chatgpt.com/share/68322592-fb60-800a-916e-890cbc21bd6b : filter empty img urls */}
                    {/* https://chatgpt.com/share/6831f91e-15c4-800a-9b66-6d1197285326 : style carousel */}
                 <div className="extra-images">
                    {filteredImgs.length > 0 ? (
                      <>
                        {/* Custom buttons */}
                        <div className="slider-nav">
                          <button onClick={() => sliderRef.current.slickPrev()}>
                            <img
                              src={arrowButton}
                              alt="Previous"
                              style={{ transform: "scaleX(-1)" }}
                              />
                          </button>
                          <button onClick={() => sliderRef.current.slickNext()}>
                            <img src={arrowButton} alt="Next" />
                          </button>
                        </div>

                        {/* Carousel */}
                        <div className="slider-container">
                          <Slider ref={sliderRef} {...carouselSettings}>
                            {filteredImgs.map((imgUrl, index) => (
                              <div key={imgUrl || index}>
                                <img
                                  className="carousel-item"
                                  src={imgUrl}
                                  alt={`Extra Image ${index + 1}`}
                                  />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </>
                    ) : (
                      <div></div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </main>

        
    );

}
export default Makingof;