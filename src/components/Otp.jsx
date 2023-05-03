import React, { useState } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import  {Auth}  from "../middleware/firebase";

const Otp = ({otpUp,setOtpUp,FormSubmit}) => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [phonenumber, setPhonenumber] = useState('')
    const [Res, setRes] = useState(null)
    const [hide, sethide] = useState(false);

    const inputs = input1 + input2 + input3 + input4 + input5 + input6;
    const close = (e) => {
        if(e.target.id === "container")setOtpUp(false)
    }


    const verifyOtp = async (e) => {
        e.preventDefault();
        await Res.confirm(inputs)
        .then(()=>{
            FormSubmit()
          })
          .catch((error) => {
            console.log(error);
            console.log("otp verification failed");
          });
      };


    const onSignInSubmit = (event) => {
        event.preventDefault();
        onCaptchVerify().then(()=>{
            sethide(true)
        })
      };
    
    const onCaptchVerify = async () => {

        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: () => {
                      onSignInSubmit();
                    
                },
            },
            Auth
            );
            recaptchaVerifier.render();
            const res = await signInWithPhoneNumber(
                Auth,
                  `+91${phonenumber}`,
                recaptchaVerifier
                );
                setRes(res);
            };

            

            const otpSubmit = (e) =>{
                onCaptchVerify()
            }
            return (
                <div onClick={close} id="container" className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center'>
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Enter Your OTP</h1>
            <form onSubmit={otpSubmit} className="flex flex-col gap-4">
                {!hide?<div className='flex flex-col '>
                    <label className='py-5'>enter phone number</label>
                    <input value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} type='number' className="h-10 text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>:null}
               {hide ?<div className="flex gap-4" >
                    <input  type="text" value={input1} onChange={(e) => setInput1(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                    <input  type="text" value={input2} onChange={(e) => setInput2(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                    <input  type="text" value={input3} onChange={(e) => setInput3(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                    <input  type="text" value={input4} onChange={(e) => setInput4(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                    <input  type="text" value={input5} onChange={(e) => setInput5(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                    <input  type="text" value={input6} onChange={(e) => setInput6(e.target.value)} className="w-16 h-16 text-4xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="1" />
                </div>: null}
                {!hide?<button onClick={ onSignInSubmit } type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>:null}
                {hide?<button onClick={verifyOtp} type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Submit</button>:null}
        <div className='flex justify-center items-center' id='recaptcha-container'> </div>

       
            </form>
        </div>

    </div>
    </div>
  )
}

export default Otp
