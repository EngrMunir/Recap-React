import React from 'react';
import ActionButton from './ActionButton';

const Contact = () => {
    const handleSendMessage =() =>{

    }
    return (
        <div>
            <h2>Contact Us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    );
};

export default Contact;