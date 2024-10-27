"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import '../Styles/SectionLeft.css';

const SectionLeft = () => {

    const [activeDot, setActiveDot] = useState(0);

    const containerRef = useRef(null);

    const handleScroll = () => {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / width);
        setActiveDot(newIndex);
    };


    return (
        <div className="sec-left">
            <div className="announcement-container">
                <h4>Announcements</h4>
                <div className="announcement" onScroll={handleScroll} ref={containerRef}>
                    <div className="announcement-1">
                        <Image
                            src='/sun.png'
                            width={20}
                            height={20}
                            alt="sun"
                        />
                        <small>On account of Independence Day, August 15th will be a holiday.</small>
                    </div>

                    <div className="announcement-2">
                        <Image
                            src='/clipboard-text.png'
                            width={20}
                            height={20}
                            alt="sun"
                        />
                        <small>Remainder to finish your assignments and submit them by Monday.</small>
                    </div>
                </div>
            </div>

            <div className="dots">
                <span className={`dot ${activeDot === 0 ? 'active' : ''}`}></span>
                <span className={`dot ${activeDot === 1 ? 'active' : ''}`}></span>
            </div>



            <div className="class-schedule-container">
                <h4>Your Class Schedule</h4>

                <div className="schedule">
                    <div className="schedule-1">
                        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                            <Image
                                src='/VideoLogo-1.png'
                                width={20}
                                height={20}
                                alt="sun"
                            />

                            <div>
                                <small style={{ fontSize: "10px", opacity: "50%" }}>Class 7, Science | Live Class</small>

                                <p style={{ fontSize: "12px" }}>Tuesday, 5:00 - 5:50 PM</p>
                            </div>

                        </div>

                        <div>
                            <small style={{ fontSize: "9px", font: "Outfit" }}>Yesturday</small>
                        </div>
                    </div>



                    <div className="schedule-2">
                        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                            <Image
                                src='/VideoLogo-3.png'
                                width={20}
                                height={20}
                                alt="sun"
                            />

                            <div>
                                <small style={{ fontSize: "10px", opacity: "50%" }}>Class 7, Science | Live Class</small>

                                <p style={{ fontSize: "12px" }}>Tuesday, 5:00 - 5:50 PM</p>
                            </div>

                        </div>

                        <div>
                            <small style={{ fontSize: "9px", font: "Outfit" }}>Yesturday</small>
                        </div>
                    </div>




                    <div className="schedule-3">
                        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                            <Image
                                src='/VideoLogo-1.png'
                                width={20}
                                height={20}
                                alt="sun"
                            />

                            <div>
                                <small style={{ fontSize: "10px", color: "#9899DF" }}>Class 7, Science | Live Class</small>

                                <p style={{ fontSize: "12px", color: "#4749B3" }}>Tuesday, 5:00 - 5:50 PM</p>
                            </div>

                        </div>


                        <div>
                            <small style={{ fontSize: "9px", color: "#7577D9", font: "Outfit" }}>Tomorrow</small>
                        </div>
                    </div>



                    <div className="schedule-4">
                        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                            <Image
                                src='/VideoLogo-2.png'
                                width={20}
                                height={20}
                                alt="sun"
                            />

                            <div>
                                <small style={{ fontSize: "10px", color: "#EFABFD" }}>Class 7, Science | Live Class</small>

                                <p style={{ fontSize: "12px", color: "#E66DFF" }}>Tuesday, 5:00 - 5:50 PM</p>
                            </div>

                        </div>

                        <div>
                            <small style={{ fontSize: "9px", color: "#E981FF", font: "Outfit" }}>Yesturday</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionLeft