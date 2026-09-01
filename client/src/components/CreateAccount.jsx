import React from 'react'
import signup from "../assets/signupbg.png";
import RegisterFrom from './RegisterFrom';

const CreateAccount = () => {
  return (
    <>
    
      {/* layout structure */}
      <div className="flex gap-24 items-center">
        {/*Left signup Image */}
        <div className="w-209 h-full bgimage">
          <img src={signup} className="w-full" />
        </div>
        {/*Right createAccount from */}
        <RegisterFrom/>
      </div>
    </>
  )
}

export default CreateAccount