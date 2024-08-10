import ProfileHome from "./home-components/ProfileHome";
import Advertisement from "./home-components/Advertisement";
import './HomeStyles.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-left-side">
                <ProfileHome />
            </div>
            <div className="home-right-side">
                <Advertisement />
            </div>
        </div>
    )
};

export default HomePage;