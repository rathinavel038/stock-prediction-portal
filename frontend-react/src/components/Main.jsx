import React from 'react'

const Main = () => {
  return (
   <>
   <div className='container'>
       <div className='p-5 text-center bg-light-dark rounded' >
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>This stock prediction application utilize machine learning techniquies,specifically employing Keras ,and LSTM model,integrated within the Django framework.</p>
          <Button  text="Login"  class="btn-outline-info" />
       </div>
             
   </div>
    
   
   </>
  )
}

export default Main