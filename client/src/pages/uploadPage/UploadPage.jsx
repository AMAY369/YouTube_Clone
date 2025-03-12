import React, { useState } from 'react'
import './UploadPage.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const UploadPage = () => {

  const [inputField, setInputField] = useState({ "title": "", "description": "", "category": "", "thumbnail": "", "videoType": "" })

  const handleOnChangeInput = (event, name) => {
    setInputField({
        ...inputField, [name]: event.target.value
    })
}


  return (
    <div className='videoUpload'>
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>
        <div className="uploadForm">
          <input type="text" value={inputField.title} placeholder='Title' className="uploadFormInputs" onChange={(e)=>handleOnChangeInput(e,"title")}/>
          <input type="text" value={inputField.description} placeholder='Description' className="uploadFormInputs" onChange={(e)=>handleOnChangeInput(e,"description")}/>
          <input type="text" value={inputField.category} placeholder='Category' className="uploadFormInputs" onChange={(e)=>handleOnChangeInput(e,"category")}/>
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