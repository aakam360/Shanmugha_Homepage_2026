import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';
import { Certificate, Instructor, OnlineClass } from '../../../svg';

function FeatureBox({ color, icon, content }) {
    return (
        <div className={`features-box ${color} edublink-svg-animate`}>
            <div className="icon">
                {icon}
            </div>
            <div className="content">
                <h5 className="title">{content}</h5>
            </div>
        </div>
    )
}

const HeroArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="hero-banner hero-style-7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="banner-content">
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">SRI SHANMUGHA Educational Institutions</h1>
                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Connect Life & Learnings</p>
                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                
                            </div>
                            <div className="features-list" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <FeatureBox color={'color-extra02-style'} icon={<OnlineClass />} content={<>A Grade <br />Colleges</>} />
                                <FeatureBox color={'color-secondary-style'} icon={<Instructor />} content={<>Top <br />Instructors</>} />
                                <FeatureBox color={'color-primary-style'} icon={<Certificate />} content={<>100% <br /> Placements</>} />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="banner-gallery">
                <div className="thumbnail thumbnail-1" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                    <img src="/assets/images/favicon.png" alt="Logo Image" />
                </div>
                <div className="thumbnail thumbnail-2" data-sal-delay="500" data-sal="slide-down" data-sal-duration="1000">
                    <img src="/assets/images/success-removebg-preview.png" alt="Success Image" />
                </div>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-3.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-1.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-5.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-2.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-4.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/banner/icon-4.png" alt="Shape" />
                </motion.li>
                <li className="shape-5" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img className="rotateit" src="/assets/images/logo/png/Shanmugha-Nursing-For-Women.png" alt="Shape" />
                </li>
                <li className="shape-6" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img className="rotateit" src="/assets/images/logo/png/Shanmugha-Medical-Science-Logo-Print-01.png" alt="Shape" />
                </li>
                <li className="shape-7" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img className="rotateit" src="/assets/images/logo/png/pharmacylogo-01-3.png" alt="Shape" />
                </li>
               
            </ul>
        </div>
    )
}

export default HeroArea;