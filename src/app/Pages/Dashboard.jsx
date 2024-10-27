import './Dashboard.css';

import Header from "../Components/Header";
import Section from '../Components/Section';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <Header />
            </div>

            <div className="section">
                <Section />
            </div>
        </div>
    )
}

export default Dashboard