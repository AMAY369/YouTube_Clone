import React from 'react'
import './UploadPage.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const UploadPage = () => {


  return (
    <div className='videoUpload'>
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>

        <div className="uploadForm">
          {/* Please watch the video for the code} */}

          <input type="text" placeholder='Title' className="uploadFormInputs" />
          <input type="text" placeholder='Description' className="uploadFormInputs" />
          <input type="text" placeholder='Category' className="uploadFormInputs" />
          <div>Thumbnail <input type="file" accept='image/*' /></div>
          <div>Video <input type="file" accept='video/mp4, video/webm, video/*' /></div>

        </div>


        <div className="uploadBtns">
          <div className="uploadBtn-form">Upload</div>
          <Link to={'/'} className="uploadBtn-form">Home</Link>
        </div>

      </div>
    </div>
  )
}

export default UploadPage