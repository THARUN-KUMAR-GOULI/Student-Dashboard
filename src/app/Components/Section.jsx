import '../Styles/Section.css'
import SectionLeft from "./SectionLeft"
import SectionMiddle from "./SectionMiddle"
import SectionRight from "./SectionRight"

const Section = () => {
    return (
        <div className="section">
            <div className='section-left'>
                <SectionLeft />
            </div>

            <div className='section-middle'>
                <SectionMiddle />
            </div>

            <div className='section-right'>
                <SectionRight />
            </div>
        </div>
    )
}

export default Section