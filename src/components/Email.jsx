import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


export default React.forwardRef(function Email({ language, dark, SERVICE_ID, TEMPLATE_ID, USER_ID }, ref) {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false);

    function messageSent() {
        setSuccessMessage(true);
        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);
    }

    const fadeInVariants = {
        initial: { opacity: 0, y: 200 },
        animate: { opacity: 1, y: 0, transition: { duration: .7 } }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <motion.div ref={ref}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase my-10 text-align underline'>Contact</h1>
            <form ref={form} onSubmit={sendEmail} className={dark ? 'formBox flex flex-col shadow-lg shadow-gray-600 rounded p-4 w-5/6 md:w-2/6 mx-auto text-center uppercase' : 'formBox flex flex-col shadow-lg rounded p-4 w-5/6 md:w-2/6 mx-auto text-center uppercase'}>
                <label className='font-bold mb-1'>{language == 'french' ? 'Nom' : 'Name'}</label>
                <input type="text" name="user_name" className={dark ? 'bg-slate-500 mb-6 rounded border-2 border-slate-900 p-1' : 'bg-slate-100 mb-6 rounded border-2 border-slate-300 p-1'} />
                <label className='font-bold mb-1'>{language == 'french' ? 'Courriel' : 'Email'}</label>
                <input type="email" name="user_email" className={dark ? 'bg-slate-500 mb-6 rounded border-2 border-slate-900 p-1' : 'bg-slate-100 mb-6 rounded border-2 border-slate-300 p-1'} />
                <label className='font-bold mb-1'>Message</label>
                <textarea rows="7" name="message" className={dark ? 'bg-slate-500 mb-6 rounded border-2 border-slate-900 p-1' : 'bg-slate-100 mb-6 rounded border-2 border-slate-300 p-1'} />
                <input type="submit" value={language == 'french' ? 'ENVOYER' : 'SEND'} className='btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md w-1/2 mx-auto' onClick={() => messageSent()} />
                {successMessage && <p className='text-green-500 font-semibold animate-pulse mt-2'>{language == 'french' ? 'Message envoyé.. Merci!' : 'Message sent.. Thank you!'}</p>}
            </form>
        </motion.div>
    );
})