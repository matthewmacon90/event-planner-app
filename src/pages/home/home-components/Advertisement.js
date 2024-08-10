import { Link } from "react-router-dom";

const Advertisement = () => {
    return (
        <div className="advertisement-container">
            <div className="advertisement-one">
                <h2>About Me</h2>
                <p>Welcome! My name is Natalie, and I’m delighted you’ve discovered my page. As a seasoned event coordinator based in the vibrant town of Madison, Indiana, I have a passion for orchestrating unforgettable music events and fostering a thriving arts scene. My journey has been one of collaboration, working hand-in-hand with local businesses to curate experiences that resonate with our community’s spirit.</p>
                <Link to='/about' className="about-me-home-btn">Click to learn more!</Link>
            </div>
            <div className="advertisement-two">
                <h2>Looking for an event coordinator?</h2>
                <p>
                    Your search ends here! I’m Natalie, your go-to expert for crafting memorable music events and 
                    art showcases in Madison, Indiana. With a proven track record of successful collaborations and 
                    a deep commitment to the arts, I’m here to bring your vision to life.
                    Don’t hesitate—contact me today to start planning an event 
                    that will captivate and inspire. Let’s create magic together!
                </p>
                <Link to='/contact' className="advert-home-btn">Contact me here!</Link>
            </div>
        </div>
    )
};

export default Advertisement;