import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com'
const Form = () => {
    const form = useRef();
    const [state, setState] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fm99ly7', "template_4mthnle", form.current, '1acQXSQ6DigJeKDes')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                console.log("message sent")
                setState(false)
            }, (error) => {
                console.error('Email sending failed:', error.text);
            });

    }
  return (
    <div className=' w-[400px] lg:w-full meriR'>
        {state === true ? ( 
            <form ref={form} onSubmit={handleSubmit}>
                <div className=' m-10 border p-5 border-black'>
                    <h2 className=' text-2xl font-semibold'>GET IN TOUCH</h2>
                    <div className=' flex flex-col lg:flex-row pt-5 '>
                        <div className=' flex flex-col pr-3 '>
                            <label className=' text-lg font-semibold'>Name</label>
                            <input 
                            type='text'
                            id='name'
                            name='user_name'
                            placeholder='Enter your name'
                            className=' border bg-[#161D20] rounded-lg text-white font-semibold p-2'
                            required={true}
                            />
                        </div>
                        <div className=' flex flex-col pt-3 lg:pt-0 md:pt-3'>
                            <label className=' text-lg font-semibold'>Contact No.</label>
                            <input 
                            type='number'
                            id='Contact'
                            name='contact'
                            placeholder='Enter your number'
                            className=' border bg-[#161D29] rounded-lg text-white font-semibold p-2'
                            required={true}
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col pt-5'>
                        
                        <label className=' text-lg font-semibold'>Email</label>
                        <input 
                        type='email'
                        name='email'
                        id="email"
                        placeholder='Enter your email'
                        className=' border bg-[#161D29] rounded-lg text-white font-semibold p-2'
                        required={true}
                        />
                    </div>
                    <div className=' flex flex-col pt-5'>
                        <label className=' text-lg font-semibold'>Message</label>
                        <input 
                        type='text'
                        id='message'
                        name='message'
                        placeholder='Enter your message'
                        className=' border bg-[#161D29] rounded-lg text-white font-semibold p-2 h-28 text-wrap'
                        required={true}
                        />
                    </div>
                    <div className=' flex flex-col pt-5 justify-center items-center'>
                        <label className=' text-xl text-center font-semibold'>When do you require my services? </label>
                        <div className=' flex gap-3 pt-2 w-[300px] md:w-full md:gap-5 justify-center items-center'>
                            <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            className=' border-2 border-black bg-white rounded-lg text-black w-40  font-semibold p-2 text-wrap'
                            required={true}
                            />
                            <p className=' mt-3 font-bold text-xl'>to</p>
                            <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            className=' border-2 border-black bg-white rounded-lg text-black w-40  font-semibold p-2 text-wrap'
                            required={true}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type='submit' className=' rounded-md bg-yellow-500  mt-5 text-center px-6 text-[16px] 
                        font-semibold text-black pt-2 pb-2 hover:scale-110' onClick={handleSubmit}>Send Message</button>
                    </div>
                    
                </div>
            </form>
        ) : (
        <div className=' border-4 border-black p-5 m-5 w-[350px] md:w-[500px] mr-5'>
            <p className=' text-3xl font-bold text-[#FF9999]'>Thank You!</p>
            <p className='text-2xl font-bold text-black text-wrap'>Your message has been received successfully and 
                we'll be in touch shortly.</p>
        </div>)}
    </div>
  )
}

export default Form
