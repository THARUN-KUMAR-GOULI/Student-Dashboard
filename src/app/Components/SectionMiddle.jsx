"use client";

import Image from "next/image";
import { useState } from "react";
import "../Styles/SectionMiddle.css";
import LiveClassPopup from "./LiveClassPopup";
const SectionMiddle = () => {

    const [liveClass, setLiveClass] = useState(null);

    const targetClassDate = "2024-10-24";
    const currentDate = "2024-10-24";

    const handleLiveClass = () => {
        if (targetClassDate === currentDate) {
            setLiveClass(true);
        } else {
            setLiveClass(false);
        }
    };

    return (
        <div className="sec-middle">
            <h4>Quick Links</h4>

            <div className="canvas-container">
                <div className="canvas">
                    <Image
                        src='/Canvas.png'
                        width={30}
                        height={30}
                        alt="Canvas"
                        style={{ marginBottom: "10px" }}
                        className="book"
                    />

                    <Image
                        src='/Book.png'
                        width={30}
                        height={30}
                        alt="Book"
                        className="book-hover"
                    />

                    <h4>Canvas LMS</h4>
                    <small style={{ fontSize: "10px", width: "75%", textAlign: "center" }}>Click here to access your LMS portal for assignments, class recordings and notes.</small>
                </div>
            </div>


            <div className="class-container" onClick={handleLiveClass}>
                <div className="class">
                    <Image
                        src='/LiveClass.png'
                        width={30}
                        height={30}
                        alt="Live Class"
                        style={{ marginBottom: "10px" }}
                        className="liveclass"
                    />

                    <Image
                        src='/LiveClass1.png'
                        width={30}
                        height={30}
                        alt="Book"
                        className="liveclass-hover"
                    />


                    <h4>Join Live Class</h4>
                    <small style={{ fontSize: "10px", width: "83%", textAlign: "center" }}>Click here to join your live class session.Please do not share this link.</small>
                </div>
            </div>

            {liveClass !== null && (
                <LiveClassPopup liveClass={liveClass} onClose={() => setLiveClass(null)} />
            )}




            <div className="contact-container">
                <div className="contact">
                    <Image
                        src='/Contact.png'
                        width={30}
                        height={30}
                        alt="Contact"
                        style={{ marginBottom: "10px" }}
                        className="whatsapp"
                    />

                    <Image
                        src='/Whatsapp.png'
                        width={30}
                        height={30}
                        alt="Contact"
                        style={{ marginBottom: "10px" }}
                        className="whatsapp-hover"
                    />
                    <h4>Contact Teacher</h4>
                    <small style={{ fontSize: "10px", width: "75%", textAlign: "center" }}>Click here to contact your teacher for any doubts or concerns.</small>
                </div>
            </div>
        </div>
    )
}

export default SectionMiddle