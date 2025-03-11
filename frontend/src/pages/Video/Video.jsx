import React from 'react';
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';
const Video = () => {

   
    return (
        <div className='video_page'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    <video width="400" controls autoPlay className='video_youtube_video'> 

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XCIYHCXQoxQ?si=GUeDJ8oWJoDtQthr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ecs-foVS74Q?si=3pAqLJi32vHaPzSN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </video>

                </div>

                <div className="youtube-about-section">
                    <div className="video_uTubeTitle">
                      {"Web Development Full Course"}
                    </div>

                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={'/user/23'} className="youtube_video_ProfileBlock_left_img">
                              <img src="https://yt3.ggpht.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s68-c-k-c0x00ffffff-no-rj" alt="SuperSimpleDev" className="youtube_video_ProfileBlock_left_image" />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {"SuperSimpleDev"} </div>
                                <div className="youtubePostProfileSubs">{"4.5M"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <div className="youtube_video_likeBlock_Like">
                              <ThumbUpOutlinedIcon/>
                              <div className=".youtube_video_likeBlock_Like">
                                {"1.2M"}
                              </div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_like">
                              <ThumbDownAltOutlinedIcon/>
                            </div>
                        </div>
                    </div>

                    <div className="youtube_video_About">
                        <div>{"03/11/2024"}</div>
                        <div>{"Full Stack Development Course"}</div>
                    </div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">342K Comments</div>

                    <div className="youtubeSelfComment">
                        <img src="https://yt3.ggpht.com/yti/ANjgQV_oeQ6LRwRHh9bq5vkHXIyxybMhNtjupmKNuD53BJOxg-4=s108-c-k-c0x00ffffff-no-rj" alt="profile picture" className='video_youtubeSelfCommentProfile'/>
                        <div className="addAComment">
                          <input type="text" className="addAcommentInput" placeholder='Post a Comment'/>
                          <div className="cancelSubmitComment">
                            <div className="cancelComment">Cancel</div>
                            <div className="cancelComment">Submit</div>
                          </div>
                        </div>

                    </div>

                    <div className="youtubeOthersComments">
                        <div className="youtubeSelfComment">
                              <img className='video_youtubeSelfCommentProfile' src="https://i.ytimg.com/vi/yta_B6tq2VQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBPdJpFT6QIXaEi5dQT3BpsfPE-7g" />
                              <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                  <div className="channelName_comment">Virat Kohli</div>
                                  <div className="commentTimingOthers">11/03/2025</div>
                                </div>

                                  <div className="otherCOmmentSectionComment">Really great video! Thanks for your efforts</div>

                              </div>

                        </div>
                        <div className="youtubeSelfComment">
                              <img className='video_youtubeSelfCommentProfile' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/330px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" />
                              <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                  <div className="channelName_comment">Rohit Sharma</div>
                                  <div className="commentTimingOthers">23/02/2025</div>
                                </div>

                                  <div className="otherCOmmentSectionComment">I used to play cricket but now I am a Web Developer. Thanks Buddy</div>

                              </div>

                        </div>
                        <div className="youtubeSelfComment">
                              <img className='video_youtubeSelfCommentProfile' src="https://i.ytimg.com/vi/isyWxYW3r8s/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBpmZDosSkQGRijqNZ_SErlFwN2aQ" />
                              <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                  <div className="channelName_comment">Chahal</div>
                                  <div className="commentTimingOthers">09/12/2024</div>
                                </div>

                                  <div className="otherCOmmentSectionComment">Who is watching in 2024, attendece here</div>

                              </div>

                        </div>
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

        </div>
    )
}

export default Video