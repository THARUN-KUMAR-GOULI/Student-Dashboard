"use client";

import Image from 'next/image';
import { useState } from 'react';
import '../Styles/SectionRight.css';
import Popup from './VideoClassPopup';

const SectionRight = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };


    return (
        <div className='recording-container'>
            <h4 style={{ color: "#3A3A3A" }}>Access Class Recordings</h4>

            <div className='recording'>

                <div className="search">
                    <Image
                        src='/search.png'
                        height={20}
                        width={20}
                        alt='Search'
                    />
                    <small style={{ lineHeight: "11.88px", color: "#0000004D" }}>Search for class recordings</small>
                </div>


                <div className="filters">
                    <div style={{ width: "30%", marginLeft: "15px" }}>
                        <small>Filter By:</small>
                    </div>

                    <div className='filter-1'>
                        <select>
                            <option value="">This week</option>
                            <option value="">This Day</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>

                        <select>
                            <option value="">All Subjects</option>
                            <option value="">Maths</option>
                            <option value="">Science</option>
                        </select>
                    </div>
                </div>

                <div className='recording-videos'>

                    <div className='videos'>
                        <div className='video-container'>
                            <div className='content'>
                                <div>
                                    <small style={{ fontSize: "9px", color: "#4749B3", font: "Outfit" }}>Class 7 Math</small>
                                    <p className='title-text' style={{ fontSize: "14px", fontWeight: "bold" }}>Algebric Equations</p>
                                </div>

                                <div> <small style={{ fontSize: "8px", color: "#727272" }}>24th October,2024</small></div>
                            </div>



                            <div className='video'>

                                <Image
                                    src='/Mask-group.png'
                                    height={48}
                                    width={80}
                                    alt='groupCall'
                                    style={{ zIndex: 0, borderRadius: "5px" }}


                                />

                                <div className='video-symbol'>
                                    <Image
                                        src='/video-circle.png'
                                        height={25}
                                        width={25}
                                        alt='groupCall'
                                        className='play-image'

                                    />
                                    <span className='play-text' style={{ color: "white" }}>Play</span>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                    </div>


                    <div className='videos'>
                        <div className='video-container'>
                            <div className='content'>
                                <div>
                                    <small style={{ fontSize: "10px", color: "#4749B3", font: "Outfit" }}>Class 7 Math</small>
                                    <p className='title-text' style={{ fontSize: "15px", fontWeight: "bold" }}>Differential Mathematics</p>
                                </div>

                                <div> <small style={{ fontSize: "8px", color: "#727272" }}>24th October,2024</small></div>
                            </div>



                            <div className='video'>

                                <Image
                                    src='/Mask-group.png'
                                    height={50}
                                    width={80}
                                    alt='groupCall'
                                    style={{ zIndex: 0, borderRadius: "5px" }}


                                />

                                <div className='video-symbol'>
                                    <Image
                                        src='/video-circle.png'
                                        height={25}
                                        width={25}
                                        alt='groupCall'
                                        className='play-image'

                                    />
                                    <span className='play-text' style={{ color: "white" }}>Play</span>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                    </div>



                    <div className='videos-1' onClick={handleClick}>
                        <div className='video-container-1'>
                            <div className='content'>
                                <div>
                                    <small style={{ fontSize: "10px", color: "#E66DFF", font: "Outfit" }}>Class 7 Science</small>
                                    <p className='title-text' style={{ fontSize: "15px", fontWeight: "bold" }}>Fundamentals of Organic Chemistry</p>
                                </div>

                                <div> <small style={{ fontSize: "8px", color: "#727272" }}>24th October,2024</small></div>
                            </div>



                            <div className='video'>

                                <Image
                                    src='/Mask-group-1.png'
                                    height={50}
                                    width={80}
                                    alt='groupCall'
                                    style={{ zIndex: 0, borderRadius: "5px" }}


                                />

                                <div className='video-symbol'>
                                    <Image
                                        src='/video-circle.png'
                                        height={25}
                                        width={25}
                                        alt='groupCall'
                                        className='play-image'

                                    />
                                    <span className='play-text' style={{ color: "white" }}>Play</span>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                    </div>

                    {isPopupVisible &&
                        <Popup onClose={handleClosePopup} />
                    }



                    <div className='videos'>
                        <div className='video-container'>
                            <div className='content'>
                                <div>
                                    <small style={{ fontSize: "10px", color: "#4749B3", font: "Outfit" }}>Class 7 Math</small>
                                    <p className='title-text' style={{ fontSize: "15px", fontWeight: "bold" }}>Trignometry 101</p>
                                </div>

                                <div> <small style={{ fontSize: "8px", color: "#727272" }}>24th October,2024</small></div>
                            </div>



                            <div className='video'>

                                <Image
                                    src='/Mask-group.png'
                                    height={50}
                                    width={80}
                                    alt='groupCall'
                                    style={{ zIndex: 0, borderRadius: "5px" }}


                                />

                                <div className='video-symbol'>
                                    <Image
                                        src='/video-circle.png'
                                        height={25}
                                        width={25}
                                        alt='groupCall'
                                        className='play-image'

                                    />
                                    <span className='play-text' style={{ color: "white" }}>Play</span>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SectionRight