import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VideoPage.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const Video = () => {

    const [message, setMessage] = useState("")
    const [data, setData] = useState(null);
    const [videoUrl, setVideoURL] = useState("");
    const { id } = useParams()
    const [comments, setComments] = useState([]);


    const fetchVedioById = async () => {
        await axios.get(`http://localhost:3000/api/getVideoById/${id}`).then((response) => {
            console.log(response.data.video);
            setData(response.data.video)
            setVideoURL(response.data.video.videoLink)
        }).catch(err => {
            console.log(err);
        })
    }


    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:3000/api/comment/${id}`).then((response) => {
            console.log(response);
            setComments(response.data.comment)
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, [])


        const handleComment = async()=>{
            const body = {
                "message":message,
                "video":id
            }
            await axios.post('http://localhost:3000/api/comments',body, { withCredentials: true }).then((resp)=>{
                console.log(resp)
                const newComment = resp.data.comment;
                setComments([newComment,...comments]);
                setMessage("")
                // window.location.reload();
            }).catch(err=>{
                toast.error("Please Login First to comment", err)
            })
        }

       console.log(message);

    return (
        <div className='video_page'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    {
                        data && <video width="400" controls autoPlay className='video_youtube_video'>
                            <source src={videoUrl} type='video/mp4' />
                            <source src={videoUrl} type='video/webm' />
                        </video>
                    }

                </div>

                <div className="youtube-about-section">
                    <div className="video_uTubeTitle">
                        {data?.title}
                    </div>

                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={`/user/${data?.user?._id}`} className="youtube_video_ProfileBlock_left_img">
                                <img src={data?.user?.profilePic} className="youtube_video_ProfileBlock_left_image" />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {data?.user?.channelName} </div>
                                <div className="youtubePostProfileSubs">{"4.5M"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbUpOutlinedIcon />
                                <div className=".youtube_video_likeBlock_Like">
                                    {data?.like}
                                </div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_like">
                                <ThumbDownAltOutlinedIcon />
                            </div>
                        </div>
                    </div>

                    <div className="youtube_video_About">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">{comments?.length} Comments</div>

                    <div className="youtubeSelfComment">
                        <img src={data?.user?.profilePic} alt="profile picture" className='video_youtubeSelfCommentProfile' />
                        <div className="addAComment">
                            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="addAcommentInput" placeholder='Post a Comment' />
                            <div className="cancelSubmitComment">
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment" onClick={handleComment}>Comment</div>
                            </div>
                        </div>

                    </div>

                    <div className="youtubeOthersComments">
                        {
                            comments?.map((item, index) => {
                                return (
                                    <div className="youtubeSelfComment" key={index}>
                                        <img className='video_youtubeSelfCommentProfile' src={item?.user?.profilePic} />
                                        <div className="others_commentSection">
                                            <div className="others_commentSectionHeader">
                                                <div className="channelName_comment">{item?.user?.channelName}</div>
                                                <div className="commentTimingOthers">{item?.createdAt.slice(0, 10)}</div>
                                            </div>

                                            <div className="otherCOmmentSectionComment">{item?.message}</div>

                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="videoSuggestions">

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/EerdGm-ehJQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAcTFrvMm74ZMBst8pu_4oMw65A2w" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">Javascript Full Course</div>
                        <div className="video_suggetions_About_Profile">SuperSimpleDev</div>
                        <div className="video_suggetions_About_Profile">4.1M views . 1 Years ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/Ka77djMkSwg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtE7MpzG7-aeQohpjzTEk2xsX24A" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">What is a JavaScript Framework? (in detail)</div>
                        <div className="video_suggetions_About_Profile">SuperSimpleDev</div>
                        <div className="video_suggetions_About_Profile">136K views . 30 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCvPTiSG-DqSscUT7inU_Tbu92Lrw" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">Harvard CS50’s Introduction to Programming with Python – Full University Course</div>
                        <div className="video_suggetions_About_Profile">FreeCodeCamp.org</div>
                        <div className="video_suggetions_About_Profile">10M views . 1 Year ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/CgkZ7MvWUAA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrkoVkuwM6ZZU_E5AXTjVBfIF7XA" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">React Full Course for free ⚛️ (2024)</div>
                        <div className="video_suggetions_About_Profile">Bro Code</div>
                        <div className="video_suggetions_About_Profile">1M views . 1 Year ago</div>
                    </div>
                </div>
            </div>

            <ToastContainer/>

        </div>
    )
}

export default Video