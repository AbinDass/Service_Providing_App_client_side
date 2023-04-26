import React from 'react'
import { Link } from 'react-router-dom'

const JoinWithAs = () => {
  return (
    <div>
      <div class="bg-white rounded-lg shadow-lg p-8">
  <h2 class="text-2xl font-bold mb-4">Join with us</h2>
  
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="name">
      Login or Register to access more and be a part of HireOne.
      </label>
      
    </div>
    <div class="mb-4">
      
    <Link to="/login"><button
      class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      type="submit"
    >
      Join Now
    </button></Link>
    </div>
    
 
</div>
    </div>
  )
}

export default JoinWithAs
