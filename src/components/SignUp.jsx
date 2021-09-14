import React from 'react';

// css style for (check icon. exclamation icon, app-container)
import './Signup.css';

const SignUp = ({submitHandler, changeHandler, errors, isSubmitted}) => {

    return (
        <div className='app-container bg-white rounded'>
            <div className='d-flex justify-content-center' style = {{height : '80px'}}>
                <h3 className='pt-5 fw-bold'>Sign UP</h3>
            </div>
             <form className='p-4' onSubmit={submitHandler}>
                <div className="form-group position-relative p-2">
                <label htmlFor="name">Name</label>
                <input type="input" name='' className="form-control mt-2" placeholder= 'Enter name'
                 name='name'id="name" onChange={changeHandler}/>
                 {/* after user click sign up button if there is any error will be shown else a check icon will show (same for all input fields) */}
                {isSubmitted ? (errors.nameErr ? 
                    <div className='d-flex justify-content-between'>
                        <small className='fw-light text-danger '>{errors.nameErr}</small>
                        <i className='far fa-exclamation-circle position-absolute text-danger'></i>
                    </div> : <i className='far fa-check-circle d-flex position-absolute justify-content-end text-success'></i>): ''}
                {/*---------------------------------------------------  */}
                </div>
                <div className="form-group position-relative p-2">
                <label htmlFor="email">Email address:</label>
                <input type="input" className="form-control mt-2" placeholder="Enter email"
                 name='email' id="email" onChange={changeHandler} />
                 {isSubmitted ? (errors.emailErr ? 
                    <div className='d-flex justify-content-between'>
                        <small className='fw-light text-danger '>{errors.emailErr}</small>
                        <i className='far fa-exclamation-circle position-absolute text-danger'></i>
                    </div> : <i className='far fa-check-circle d-flex position-absolute justify-content-end text-success'></i>): ''}
                </div>
                <div className="form-group position-relative p-2">
                <label htmlFor="password1">Password:</label>
                <input type="password" className="form-control mt-2" placeholder="Enter password" 
                name='password1' id="password1" onChange={changeHandler} />
                {isSubmitted ? (errors.password1Err ? 
                    <div className='d-flex justify-content-between'>
                        <small className='fw-light text-danger'>{errors.password1Err}</small>
                        <i className='far fa-exclamation-circle position-absolute psw1 text-danger'></i>
                    </div> : <i className='far fa-check-circle position-absolute d-flex justify-content-end text-success'></i>): ''}
                </div>
                <div className="form-group position-relative p-2">
                <label htmlFor="password2">Password:</label>
                <input type="password" className="form-control mt-2" placeholder="Confirm password"
                 name='password2' id="password2" onChange={changeHandler} />
                 {isSubmitted ? (errors.password2Err ? 
                    <div className='d-flex justify-content-between'>
                        <small className='fw-light text-danger '>{errors.password2Err}</small>
                        <i className='far fa-exclamation-circle position-absolute text-danger'></i>
                    </div> : <i className='far fa-check-circle position-absolute d-flex justify-content-end text-success'></i>): ''}
                </div>
                <div className='container'>
                    <button type="submit" className="btn w-100 btn-primary mt-3">Sign Up</button>
                </div>
            </form> 
            <div className='d-flex justify-content-end me-5 pb-5 '>
                {/* since we don't have login page, just to be seen as a real sign up page*/}
                <h6>Alredy have an account? <a href= '#' className='text-decoration-none'>Sign in</a></h6>
            </div>
        </div>
    )
}

export default SignUp;
