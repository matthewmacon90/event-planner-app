import profilePic from '../../../assets/second-profile.png';

const ProfileHome = () => {
    return (
        <div className="profile-home-container">
            <img className='profile-img' src={profilePic} alt="profile" />
        </div>
    )
};

export default ProfileHome;