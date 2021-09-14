import React, { useState } from 'react';
import SignUP from './SignUp';
import SuccessForm from './SuccessForm';

const Form = () => {

    // get the user information
    const [userInfo, setUserinfo] = useState({
        name : '',
        email : '',
        password1 : '',
        password2 : ''
    })
    // ---------------------------

    // setting the input errors when user input is not valid
    const [errors, setErrors] = useState({});
    // --------


    const [isSubmitted, setIssubmitted] = useState (false)

    const [isValidated, setIsvalidated] = useState (false)


    const changeHandler =(e) => {

        // set the user  info when input changes
        setUserinfo({
            ...userInfo ,
            [e.target.name] : e.target.value
        })
    }

    
    const submitHandler =(e) => {
        e.preventDefault();

       let error = {}

    //    it causes that errors be shown after user submitted form, when it's true means user has submitted
       setIssubmitted(true)

    //    if input is emptyfor name input
        if (userInfo.name.trim().length === 0){  
            error.nameErr = `Name can't be empty`
        }

        // email validation
        if (userInfo.email.trim().length === 0){
            error.emailErr = `Email can't be empty`
        }
        // regex for validation email input
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email))){
             error.emailErr = 'You have entered an invalid email address!'
            //  ------------
        }
        // ---------

        // password one valodation
        if (userInfo.password1.trim().length === 0){
            error.password1Err = `Password can't be empty`
        } 
        // set a apassword policy with regex, user input must be matched with this policy
        else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(userInfo.password1))){
            error.password1Err = `password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.`
            // -----
        }
        // ---------------

        // confirm password validation
        if (userInfo.password2.trim().length === 0){
            error.password2Err = `Please confirm your password`
        } else if (userInfo.password2 !== userInfo.password1){
            error.password2Err =`Password doesn't match`
        }
        // -----------------------

        // we can't setErrors directly because it doesnt update immediately so we gotta put all errors in a variable finally put this var in state
        setErrors(error)
        // ---

        // if we don't have any error it means all input information match policies and account will be created successfully
        if (Object.keys(error).length === 0){
            // make a one second delay that seems a real sign up page
            setTimeout(() => setIsvalidated(true), 1000) 
        }
    }

    return (
        <div className='container'>
            
            {/* if user validation be true the successform will be shown else the signupform will be shown again */}
            {isValidated ? <SuccessForm /> : <SignUP submitHandler={submitHandler} 
            changeHandler={changeHandler} errors={errors} isSubmitted={isSubmitted} />}
            {/* --------------------------------------------------- */}
            
        </div>
    )
}

export default Form
