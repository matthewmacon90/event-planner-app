import profileAbout from '../../assets/second-profile.png';
import './AboutStyles.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <img className='about-img' src={profileAbout} alt="profile" />
            </div>
            <div className='about-right'>
                <h1>About Me</h1>
                <div className='about-text'>
                    <p>
                        Welcome! My name is Natalie, and I’m delighted you’ve discovered my page. 
                        As a seasoned event coordinator based in the vibrant town of Madison, Indiana, 
                        I have a passion for orchestrating unforgettable music events and 
                        fostering a thriving arts scene. 
                        My journey has been one of collaboration, working hand-in-hand with local 
                        businesses to curate experiences that resonate with our community’s spirit.
                    </p>
                    <p>
                        Through these partnerships, we’ve seen remarkable outcomes—events that not only 
                        entertain but also enrich our town’s cultural tapestry. Whether it’s a jazz quartet 
                        under the stars or a contemporary art exhibit nestled in the heart of Madison, 
                        each event is a testament to the power of unity and the arts.
                    </p>
                    <p>
                        I invite you to explore, engage, and be part of this artistic endeavor. 
                        Together, let’s continue to make Madison a beacon of creativity and celebration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;