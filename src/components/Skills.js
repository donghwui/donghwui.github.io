import React from "../assets/img/react.png";
import Python from "../assets/img/python.png";
import CLanguauge from "../assets/img/c.png";
import CPP from "../assets/img/cpp.png";
import CSharp from "../assets/img/csharp.png";
import Node from "../assets/img/nodejs.png";
import JavaScript from "../assets/img/javascript.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Programming Skills</h2>
                        <p>These are some of the skills I am familiar with!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5> React</h5>
                            </div>

                            <div className="item">
                                <img src={Node} alt="Image" />
                                <h5> Node.js</h5>
                            </div>
                            
                            <div className="item">
                                <img src={JavaScript} alt="Image" />
                                <h5> JavaScript</h5>
                            </div>

                            <div className="item">
                                <img src={CLanguauge} alt="Image" />
                                <h5> C </h5>
                            </div>

                            <div className="item">
                                <img src={CSharp} alt="Image" />
                                <h5> C# </h5>
                            </div>

                            <div className="item">
                                <img src={CPP} alt="Image" />
                                <h5> C++ </h5>
                            </div>

                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5> Python </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}