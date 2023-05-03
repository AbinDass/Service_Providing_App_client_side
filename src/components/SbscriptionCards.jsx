import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { takeSubscription } from '../API/servicesApi'
import { verifyPayment } from '../API/servicesApi';
import useRazorpay from "react-razorpay";
import SubscriptionMessage from './SubscriptionMessage';
import { Navigate } from 'react-router-dom';

const SbscriptionCards = ({item}) => {
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const Razorpay = useRazorpay();

  

  const { _id, firstname, email, phone } = useSelector((state) => state.user.data.user);
  const userId = _id
 

  


  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY,
    amount: amount ,
    currency: "INR",
    name: name,
    description: "Test Transaction",
    image: "/logo.svg",
    order_id: orderId,
    handler: function (response) {
      const razorpay_payment_id = response.razorpay_payment_id
      const razorpay_order_id = response.razorpay_order_id
      const razorpay_signature = response.razorpay_signature
      verifyPayment(razorpay_payment_id, razorpay_order_id, razorpay_signature, userId, item._id).then(()=> Navigate('/servicelist'))
      
      
    },
    prefill: {
      name: name,
      email: Email,
      contact: contact,
    },
  };

  const subscribeHere = (async ()=>{
      await takeSubscription(item._id , userId).then((response)=> {
      if(response.data.message){
        setVisible(!visible);
        setMessage(response.data.message)
      }
      const razoramount = response.data.response.subscibtiondata.amount
      const orderid = response.data.response.id
      setOrderId(orderid)
      setName(firstname)
      setEmail(email)
      setContact(phone)
      setAmount(razoramount)
      const rzp = new Razorpay(options);
      rzp.open();
    })
  })


  return (
    visible ? <SubscriptionMessage message={message} />
    :
    
            <>  
            {/* <div className="w-[300px] shadow-xl flex bg-[#c2eabf] flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                  <div className='bg-black rounded-md flex flex-col text-white '>
                  <h1 className='p-5 text-center font-mono font-extrabold text-4xl'>{item?.mainHead}</h1>
                  <h2 className='p-5 text-white text-3xl text-center font-medium'>{item?.subHead}</h2>
                  <h2 className='p-5 text-white text-3xl text-center font-medium'>{item?.plan}</h2>

                  <h3 className='p-5  text-3xl text-center font-medium only text-green-400'>{item?.price} INR </h3>
            </div>
            <div className='py-5'>
              <h3>{item?.description}</h3>
            </div>
            <div className='text-center'>
              <button onClick={ subscribeHere } className='bg-red-600 text-white text-2xl rounded-md h-12 hover:scale-105 duration-200 px-10 my-8'>Subscribe Now</button>
            </div>
        </div> */}

          <div className='w-full  flex justify-center items-center flex-wrap mt-5'>
          <div className="w-full  mx-auto bg-cover bg-center rounded-lg " >
      <div className="py-8 px-6 sm:py-12 sm:px-8 flex flex-col justify-center items-center bg-black opacity-60  rounded-lg">
        <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4">{item?.mainHead}</h2>
        <p className="text-white sm:text-lg mb-6">{item?.subHead}</p>
        <h2 className='p-5 text-white text-3xl text-center font-medium'>{item?.plan}</h2>
        <h3 className='p-5  text-3xl text-center font-bold only text-white'>{item?.price} INR </h3>

        <button onClick={ subscribeHere } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Subscribe
        </button>
      </div>
    </div>
          </div>
        

            </>

    
    
    
  )
}

export default SbscriptionCards
