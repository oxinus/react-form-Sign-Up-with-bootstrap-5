import React from 'react';

// add css style to (btn-hover, bg-color, successform-container)
import './successForm.css'

const SuccessForm = () => {

    const continueHandler =() => {
        // refresh page
        window.location.reload()
    }

    return (
        <div className='successform-container'>
            <div className='h-50 bg-color rounded-top d-flex justify-content-center flex-column align-items-center pt-5'>
                <i className='fal fa-check-circle text-white display-2'></i>
                <p className='text-uppercase text-white pt-2 fst-italic'>success</p>
            </div>
            <div className='h-50 bg-white rounded-bottom d-flex flex-column justify-content-start align-items-center pt-2'>
                <p className='text-center p-4'>Congratulations, your account has been successfully created.</p>
                <button className='btn bg-color rounded rounded-pill text-white btn-hover px-5' type='button' onClick={continueHandler}>Continue</button>
            </div>
        </div>
    )
}

export default SuccessForm
