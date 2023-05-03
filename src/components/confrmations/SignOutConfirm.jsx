import React from 'react'
const SignOutConfirm = ({setSignoutConfirm, handleLogout}) => {
    const close = () =>{
        setSignoutConfirm(false)
    };
    const logout = () => {
        handleLogout().then((res)=>{
            if(res){ 
                setSignoutConfirm(false);
            }
        });
    };
  return (
    <div>
      <div onClick={close} className='fixed z-50 flex justify-center items-center  top-0 bottom-0 bg-black  z-5 0 right-0 left-0 opacity-90 '> 
       <div className='bg-white flex justify-center items-center flex-col w-[300px] md:w-[500px] p-8 rounded-xl'>
            <div><img className='w-[150px] h-[150px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFklEQVR4nO2bW2gUVxjHP/ugFYXaR4WK0geNxtW6m3Ni0HhrvRBJKe2L+NQ23qNEg2gptn1QixFaFbcPSbAPGoKtUlMrRVC2G+sFMZmTkGAksxHxoRh3zm4mURNc85WzzK6bsBezye7M7pk//FmWndv/d75zzpwZFsCWLVu2bNmylREhvrO5S59P23g5ZfwQYdp5omitROEviaJxwvj3YhvIeSFO2talz9/+MLh5V3ff8UpV/3Ovqnft79EHd6g6UsYTmjD+DeSitj4Mfrxb1S/s9Q10Vqn6i+qefozniu7kAKii9UCuaZs68OX+Hj2UKHSsP38QTAqg9PYzrHc1v5XrnF69zuX9o9717zxTAVT5+h9FAv7weAAv+Qex+2UIXw0j3ggMRcNXqjqWtPEJA/DGXn7W5f3ANAD7fPprEVCEfY0jNTQ8HA6/U9VxVXsgefmnDSAM4TfTAFQbLRwaHhlewGjyD2JZZxCLUwQfL4A6p7fPdACxOv7kOW7sSN7fJ7YCmtFSAOgYg9sAWB5UQMgYA8SnlBVwIzAUnfqkBFAdY6kBVPkkB1CR6n4/3wGUdQblBbClqy/t8DkNYIeqY/k4Wj6nASxLscLLFICDe9px5c1e/OLcY/x5w13zAFBmDoDV//RG91t+14+E+b+WCgCNsz9R+N/O+70zpQVAw88VtV7Syj+1LIACj4qTT1/Gqe6/0HHrSVIAhyvYiFIfi4nC6xzsv2mWA/DumSsINRfCfu/s9aQAVjWnFz7GmX9SRMfSKq3+aHjhyacuJwRQS29ORLcKWroCZqSogNXecVaAwn+3HIAFHh9OOd2EU3+5mnIM+O4rBdd4nqY3BjDt15UdT6dbDgDNwixQpAQ+y3hwq94HlLQ8mwXZFLXInWBxm1aR1eBmAzhU2R6eJsVa4KeNEq4F6q2yGqQ2AG5aBbiXXsMax0U8tqhRvgo4ueQKHi1siFoqAO6l10aElw5AjeOi3ACOLWqUG8DRUeGlAlDr9MgLoNbpwROOS3IBcMfM9fGC5zWAk6Pm+kQ+UtigmwaAMC2UCQDx5vrEbmwyDQBlvCMTAOLN9XFbf2FD4MfFjXPMA9DGywnTXk00gFR9/kjh+X7R8qaGj6ioJegiTHNThd+hjPelDUHRfJAPct7ns4uZtoEo2gHxcJIyfo8qfOAtAByEvBXiJMICc4sY3ySCEqadI4rWQhh/IR5kUoV/mx//F7Alt6YAwPsAIF5RzwWAAgD4CABKAGAFAJQCwBoAWAsA6w1vMhz5vtbYptTYp8Q4RoFxzJnGOcS5TNd0APhQzIYAsC4mTLa8zji3uIbMvwkepcUAUGZC6EQW1+KALMohOwAwys7MLvCJmV0A4ijRILhs1CAonGgQjPweGQTFvlkZBP8HZODC5RK0OAwAAAAASUVORK5CYII=" alt='logout-icon'/></div>
            <div className='w-full flex justify-center text-xl text-red-600'>Oh No! you are leaving..... Are you sure ?</div>
            <div className='flex flex-col gap-4 pt-8'>
                <button onClick={close} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent px-3  text-center rounded'>No , stay on this page</button>
                <button onClick={logout} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent  text-center rounded'>Yes, Log Me Out</button>
            </div>
       </div>
    </div> 
    </div>
  )
}

export default SignOutConfirm
