import React, { useState } from 'react'
import './SignupPage.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {

    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
    const [singUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": uploadedImageUrl });
    const [progressBar,setProgressBar] = useState(false);

    const navigate = useNavigate()


    const handleInputFiled = (event, name) => {
        setSignUpField({
            ...singUpFiled, [name]: event.target.value
        })
    }
    console.log(singUpFiled)


    const handleSignup = async () => {
        setProgressBar(true);
        axios.post('http://localhost:3000/auth/signUp', singUpFiled).then((response)=>{

            toast.success(response.data.message)
            setProgressBar(false)
            navigate('/')

        }).catch((err)=>{
            setProgressBar(false)
            toast.error(err)
        })
    }

    const uploadImage = async (e) => {
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'youtube_clone');
        try {
            setProgressBar(true)
            const response = await axios.post("https://api.cloudinary.com/v1_1/dwvjikoay/image/upload", data)
            setProgressBar(false)
            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl);
            setSignUpField({
                ...singUpFiled, "profilePic": imageUrl
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    <input type="text" value={singUpFiled.channelName} placeholder="Name" className="signUp_Inputs_inp" onChange={(e)=>handleInputFiled(e, "channelName")} />
                    <input type="text" value={singUpFiled.userName} placeholder="User Name" className="signUp_Inputs_inp" onChange={(e)=>handleInputFiled(e,"userName")}/>
                    <input type="password" value={singUpFiled.password} placeholder="Password" className="signUp_Inputs_inp" onChange={(e)=>handleInputFiled(e,"password")}/>
                    <input type="text" value={singUpFiled.about} placeholder="About Your Channel" className="signUp_Inputs_inp" onChange={(e)=>handleInputFiled(e,"about")} />
                    <div className="image_upload_signup">
                        <input type='file' onChange={(e)=>uploadImage(e)}/>
                        <div className='image_upload_signup_div'>
                        <img className='image_default_signUp' src={uploadedImageUrl} />
                        </div>
                    </div>

                    <div className="signUpBtns">
                        <div className="signUpBtn" onClick={handleSignup}>SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>

                    {progressBar && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}

                </div>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default SignupPage