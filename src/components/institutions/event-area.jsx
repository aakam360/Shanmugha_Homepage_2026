import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';
import { event_data } from '../../../data';
import EventItem from "../../event-grid/event-item";
import ActiondataRequest from '../../../APIRequest/ActiondataRequest';

import { selectSecondaryEvents } from '../../../redux/features/homepageEventsSlice';
import { fetchEvents } from '../../../redux/features/homepageEventsSlice';
import { useDispatch, useSelector } from 'react-redux';
const EventArea = ({ }) => {



    const dispatch = useDispatch()

    const secondary_events = useSelector(selectSecondaryEvents);

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])


    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className={`edu-event-area`}>
            <div className="container edublink-animated">

 
                <div className="row g-5">
                    {secondary_events.slice(0, 3).map((event,index) => {
                        const { delay, id } = event;
                        return (
                            <div key={index} className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-event event-style-1">
                                    <EventItem item={event} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                        <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                            animate={{
                                x: mouseReverse(30).x,
                                y: mouseReverse(30).y
                            }}
                        >
                            <span></span>
                        </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default EventArea;