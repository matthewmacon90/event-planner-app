import { useState } from 'react';
import './ContactStyles.css';

const ContactPage = () => {
    const initalState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
    const [formState, setFormState] = useState(initalState);
    const { firstName, lastName, email, message } = formState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        setFormState(initalState);
    }

    return (
        <div className="contact-container">
            <div className='contact-information'>
                <h1 className="contact-title">Contact Me Today</h1>
                <div className='contact-info'>
                    <p>
                        Reach out to me today to learn more about my services and how I can help you.
                    </p>
                </div>
            </div>
            <form onSubmit={submitForm} action="https://api.web3forms.com/submit" method='POST' className="contact-form">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                <label className='contact-label' htmlFor="firstName">First Name:</label>
                <input className='contact-input' type="text" id="firstName" name="firstName" value={firstName} onChange={handleChange} required />

                <label className='contact-label' htmlFor="lastName">Last Name:</label>
                <input className='contact-input' type="text" id="lastName" name="lastName" value={lastName} onChange={handleChange} required />

                <label className='contact-label' htmlFor="email">Email:</label>
                <input className='contact-input' type="email" id="email" name="email" value={email} onChange={handleChange} required />

                <label className='contact-label' htmlFor="message">Message:</label>
                <textarea className='contact-message' id="message" name="message" value={message} onChange={handleChange} required ></textarea>

                <button className='contact-cta' >Send</button>
            </form>
        </div>
    );
};

export default ContactPage;