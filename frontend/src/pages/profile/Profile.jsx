import React from 'react'
import './profile.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

const Profile = ({ sidebar }) => {
    return (
        <div className='profile'>
            <Sidebar sidebar={sidebar}/>

            <div className={sidebar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src={"https://yt3.googleusercontent.com/ytc/AIdro_mhd3RmfiJf5zWwaPpmuJ2sG2-vu0Zy7Apo7J0-HbNG7dE=s160-c-k-c0x00ffffff-no-rj"} alt="profile picture" />
                    </div>

                      <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">Aperture
                        </div>
                        <div className="profile_top_section_info">
                        @ApertureThinking • 2.4M subscribers • 435 videos
                        </div>
                        <div className="profile_top_section_info">
                          Personal view on life, death, and existance
                        </div>
                      </div>

                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">
                      <Link to={'/watch/53'} className="profileVideo_block">
                        {/* Please watch the video for the code} */}

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/EFkyxzJtiv4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDI-GA9VyfuGxjkx5etTh-xk3fH7Q" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          Stoicism: Become Undefeatable
                          </div>
                          <div className="profileVideo_block_detail_about">
                            Created at 26/03/2020
                          </div>
                        </div>

                      </Link>
                      <Link to={"/watch/12"} className="profileVideo_block">

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/EFkyxzJtiv4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDI-GA9VyfuGxjkx5etTh-xk3fH7Q" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          Stoicism: Become Undefeatable
                          </div>
                          <div className="profileVideo_block_detail_about">
                            Created at 26/03/2020
                          </div>
                        </div>

                      </Link>
                      <Link to={'/watch/134'} className="profileVideo_block">

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/EFkyxzJtiv4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDI-GA9VyfuGxjkx5etTh-xk3fH7Q" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          Stoicism: Become Undefeatable
                          </div>
                          <div className="profileVideo_block_detail_about">
                            Created at 26/03/2020
                          </div>
                        </div>

                      </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile