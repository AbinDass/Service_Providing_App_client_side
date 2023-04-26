import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginRequest = ({setLoginShow}) => {
   const navigate = useNavigate()
    const close = () => {
        setLoginShow(false)
    };
const Login = () =>{
   navigate('/login')
}
  return (
    <div>
      <div onClick={close} className='fixed z-50 flex justify-center items-center  top-0 bottom-0 bg-black  z-5 0 right-0 left-0 opacity-90 '> 
       <div className='bg-white flex justify-center items-center flex-col w-[300px] md:w-[500px] p-8 rounded-xl'>
            <div><img className='w-[200px] h-[200px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEH0lEQVR4nO2ba0hTYRjHHy0FCafmZZYEXcllF/JG2cxMJgUu84OMoqBvNYssSjcLKYJqfY0U+tIqZpH0paCLFBVJ0QW6yLpphklaGUSkX/rSE897zlmWznPZ2dw5Ow/8YfN93nfn/zvv5TmTARhhhBaiGgDuAcAIAKCIKOcuANhBJ+GRYDqYjoIO7jwmJCSg292Ejx8/xb6+/glFOS5XE+vDQ6gCDcc9MkGGxIz/L5fLLQC4AxqOYTIh3Pmenl7cscOJWVlZY6a72WxGp9PJcoSZwLf9BA0HkoS7SgbF1r3TWRfIH/V3fQAwm82CoZJxcq3CTNAtABA3JDc/6sMAAMYMAGMJ9MXIHpAIACcAYDCE0ldMA3xpTZ8VdRFKzS9XxyEKY4Bd3NUOhM8/1FN3P0JDE6dNW0fPhKgL7uLUNC9IAECK4n0BJQHo6uaMLF6KkJLKKb8QYZ8b4W2fzgGc9mJc2vSgazsuPR3hjE+nALwXEOLjWc76Ndl4w1uKw/4aHPHX4G1fGVoLM7j+U6cieNt0BsD/HmHaNNZ+uD4P8UPtGP3urcUje/O4mZCa9u9y0DyA/dyXGzareVzzo7WuLJsbh/roBsCSZayt49xqUQCUw8YpKNIRAJOJtX1/Xi0KgHLYOHQ66A3Alyd26QBMKToCsGy55CVwuXUlN05hsY4AuA6ytspS8U2wooT/wrTxgGIAiRF4Kguu8QC8/oCQnMzaD9RZgpqnI5KNQcfgu4+KAXgmxbhYIeRrR5gyheWsWZGJL67ZAsZfXq/8e/xRIXT2YkiF0AAlVBx6gA4fRkySSmFvG8ZlZrK86amJAQD0mvVNz+AqxhBLYSRF0rxkAMJyIKMA2Nlejvcvlf81/6pXlYchjGoApJ31Y5fOrj3B83UHoH8IoW43QpaZEwHp/xZDAD7LVLgB1J79hblVjZiUOkPybp+UNhMtdhfrS2PQe9Z25WYYvxLbInz+J1UBWOwuxceexe7mxwj8OzsSOqYqgCT+7sk5OiuaOwMzQZhFBCEwE8KjT7z5RFUBwH99Cra1YHXLF9n95Gq+h5OUdS0nMBQAZJ5em3IWiULQDQDHKFW3fsWUWUvYGMkzFuKGU4OxBcDhQ9zYOiQJguYAgMLNJ212fowDmFMQu0vANDNXP0vAIXMTnMi8rgBArB+DEOuFUJJQCjd3Su6ztvk+XwrnaB+AJYQHGcuGJu0DqFXwIEN3nswLj8OaBuCYJBkAPMYMQGMJeIw9ANXaBM8rPcrElLHQOmYDy1hQEpbP4kVeZMejMF5QpEVeZMdJ6tzQ0Cj7B0oTqaioKOiFFhcXhzy+3/8GHz54wrR9e+AnNeRFdmymzjabTVUA4dbzZ10BANZVpQKATUoAzIuCqauW5oLCuB0FFx+qbik1bwTEYPwB7Q7J40kiozUAAAAASUVORK5CYII=" alt='/login-now'/></div>
            <div className='w-full flex justify-center text-xl text-green-600'>Are you ready to login ?</div>
            <div className='flex flex-col gap-4 pt-8'>
                <button onClick={close} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent px-3  text-center rounded'>Not right now</button>
                <button onClick={Login} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent  text-center rounded'>Login now</button>
            </div>
       </div>
    </div>
    </div>
  )
}

export default LoginRequest
