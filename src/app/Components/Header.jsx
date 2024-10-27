import Image from "next/image"
import "../Styles/Header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <Image
                    src='/image.png'
                    width={100}
                    height={50}
                    alt="logo"
                    priority
                    objectFit="cover"
                    className="image"
                />
            </div>

            <div>
                <h3>Student Portal</h3>
            </div>

            <div className="name-class">
                <p>Hello, Tharun</p>
                <small>Class 7, Math + Science</small>
            </div>
        </div>
    )
}

export default Header