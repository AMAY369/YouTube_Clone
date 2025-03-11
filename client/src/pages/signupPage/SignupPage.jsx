import React from 'react'
import './SignupPage.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link} from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    <input type="text" placeholder="Name" className="signUp_Inputs_inp" />
                    <input type="text" placeholder="User Name" className="signUp_Inputs_inp" />
                    <input type="password" placeholder="Password" className="signUp_Inputs_inp" />
                    <input type="text" placeholder="About Your Channel" className="signUp_Inputs_inp" />
                    <div className="image_upload_signup">
                        <input type='file' />
                        <div className='image_upload_signup_div'>
                        </div>
                    </div>

                    <div className="signUpBtns">
                        <div className="signUpBtn">SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupPage