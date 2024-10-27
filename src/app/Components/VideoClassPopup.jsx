import Image from 'next/image'
import '../Styles/Popup.css'



const Popup = ({ onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>

                <div className="head">
                    <div className="video-name">
                        <small>Class 7 Science</small>
                        <p>Fundamentals of Organic Chemistry</p>
                    </div>
                    <div className="close">
                        <Image
                            src='/close-circle.png'
                            width={50}
                            height={50}
                            alt='close-btn'
                            className='close-btn'
                            onClick={onClose}
                        />
                    </div>
                </div>

                <div className="video-class-container">
                    <div className='video-class-image'>
                        <Image
                            src='/Rectangle-1.png'
                            height={360}
                            width={905}
                            alt='video-class'

                        />
                    </div>
                    <div className="progress-container">
                        <div className='time-stamp'>35:28 / 1:20:21</div>

                        <div className='progress-bar'>
                            <div className='progress-bar-inner'></div>
                        </div>

                        <div className="controls">
                            <div className='play-controls'>
                                <Image
                                    src='/play.png'
                                    width={20}
                                    height={20}
                                    alt='play-btn'
                                />

                                <Image
                                    src='/backward-15-seconds.png'
                                    width={20}
                                    height={20}
                                    alt='backward-15-seconds'
                                />

                                <Image
                                    src='/forward-15-seconds.png'
                                    width={20}
                                    height={20}
                                    alt='forward-15-seconds'
                                />
                            </div>

                            <div className='vol-frame'>
                                <Image
                                    src='/volume-cross.png'
                                    width={20}
                                    height={20}
                                    alt='volume-btn'
                                />

                                <Image
                                    src='/Icon-Frame.png'
                                    width={20}
                                    height={20}
                                    alt='Icon-frame'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup


