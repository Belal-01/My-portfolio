import React from 'react'
import PrimaryButton from '../../Components/PrimaryButton/Button';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  const contactForm = React.useRef(); 
  const messageState = React.useRef(); 
  const formName =  React.useRef();
   const formEmail = React.useRef();
   const formMessage = React.useRef(); 
    const sendEmail = (e)=>{
       
      e.preventDefault();
      emailjs
      .sendForm('service_cv9gu5e', 'template_38n43y6', contactForm.current, {
        publicKey: 'rTEHcCrqmXIB2lDnn',
      })

      .then(
        () => {
          messageState.current.textContent = 'The Message has sent successfully ✔'
          formName.current.value = ''
          formEmail.current.value = ''
          formMessage.current.value = ''
         setTimeout(() => {
          messageState.current.textContent = ''
          console.log('timeout')
          }, 2000);

        },
        (error) => {
         // console.log('FAILED...', error.text);
          messageState.current.textContent = 'Failed to send 😢'+error.text;
          setTimeout(() => {
            messageState.current.textContent = ''
            }, 2000);
            
          
        },
      );

    }

  return (
 <section className='contact'>
    <div className="contact__header">
      <span className="second-title">Get in</span>
      <span className="second-sub-title"> Touch</span>
    </div>
    <div className="contact__title">
      <span className='title'>Contact Me </span>
    </div>

    <form action="" ref={contactForm} className='contact__form' id='contact-form' onSubmit={sendEmail}>
      <div className="contact__form--email">
        <input type="text" ref={formName} name='client-name' id='client-name' required placeholder='Enter Your Name' />
        <input type="email" ref={formEmail} name='client-email' id='client-email' required placeholder='Enter Your Email' />
      </div>
      <div className="contact__form--message">
        <textarea name="client-message" ref={formMessage} id="client-message" required placeholder='Enter Your Message'></textarea>
        <p ref={messageState}></p>
      </div>      
      <a type='submit'>
        <PrimaryButton>
          Send Message
        </PrimaryButton>
      </a>
   </form>
    

  </section>
  )
}

export default Contacts
