import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const brand_images = '/assets/images/brand/affiliations-shanmugha-college-01-2048x612.jpg';
    
const BrandArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-brand-area brand-area-2 bg-image">
            <div className="container edublink-animated-shape" style={{width:'fit-content'}}>
            <img src={brand_images} alt="Brand Logo" />
              
                <ul className="shape-group">
                    <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/about/shape-37.png" alt="Shape" />
                    </motion.li>
                </ul>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-2 scene shape-light" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-41.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-2 scene shape-dark" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/about/dark-shape-41.png" alt="Shape" />
                </motion.li>
            </ul>
        </div>
    )
}

export default BrandArea;