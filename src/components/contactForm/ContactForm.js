import React from 'react';
import './contactForm.css';
import Button from '../button/Button';

const ContactForm = () => {
    return (

        <section className='conatiner'>
            <div className='contact-btn'>
                <div className='top-btn'>
                    <Button isoutline={false} text=" 📱 VIA  SUPPORT CHAT" />
                    <Button isoutline={false} text=" 📞 VIA CALL" />
                </div>
                <Button isoutline={true} text=" 📧 VIA EMAIL FORM" />
                <form >
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <textarea type="text" name="text" rows={8} />
                    </div>
                    <div className="submit-btn">
                    <Button  text=" SUBMIT" />
                    </div>
                </form>
                        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>

            </div>
            <div>
                <img src="../images/contact.svg" alt="contact-image"  />
            </div>
        </section>

    )
}

export default ContactForm
