import Image from 'next/image';
import '../Styles/LiveClassPopup.css';

const LiveClassPopup = ({ liveClass, onClose }) => {
    return (
        <div className="liveclass-popup-overlay" onClose={onClose}>
            <div className="liveclass-popup-content" onClick={(e) => e.stopPropagation()}>

                {liveClass ? (
                    <div className="liveclass-true">
                        <div className='class-time'>
                            <Image
                                src='/Vector.png'
                                height={10}
                                width={10}
                                alt='notification'
                            />
                            <small style={{ color: "#E66DFF" }}>Class 7 Math is starting in 1 hour, 34 minutes.</small>
                        </div>

                        <div className='class-notification'>
                            <p>You can join the live class 5 minutes before it starts, please wait.</p>
                            <button className='ok-btn' onClick={onClose}>Okay</button>
                        </div>
                    </div>
                ) : (
                    <div className="liveclass-false">
                        <div className='icon'>
                            <Image
                                src='/LiveClass.png'
                                width={30}
                                height={30}
                                alt="Live Class"
                                style={{ marginBottom: "10px" }}

                            />
                        </div>

                        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>No Live Classes</p>
                        <small>You have no live classes scheduled for today.</small>

                        <button className='ok-btn' onClick={onClose}>Okay</button>

                    </div>
                )}

            </div>
        </div>
    );
};

export default LiveClassPopup