import React from 'react'
import './ProfilePage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

const ProfilePage = ({ sidebar }) => {
    return (
        <div className='profile'>
            <Sidebar sidebar={sidebar}/>

            <div className={sidebar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src={"https://yt3.googleusercontent.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s160-c-k-c0x00ffffff-no-rj"} alt="profile picture" />
                    </div>

                      <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">SuperSimpleDev
                        </div>
                        <div className="profile_top_section_info">
                        <span className="profile_channelId">@SuperSimpleDev</span> • 613K subscribers • 27 videos
                        </div>
                        <div className="profile_top_section_info">
                          Hello I'm Simon Bao! 
                        </div>
                      </div>

                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">
                      <Link to={'/watch/53'} className="profileVideo_block">

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCzc4ewpkxURquXXP_3msLhO2JrQ" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          HTML & CSS Full Course - Beginner to Pro
                          </div>
                          <div className="profileVideo_block_detail_about">
                          14M views 3 years ago
                          </div>
                        </div>

                      </Link>
                      <Link to={"/watch/12"} className="profileVideo_block">

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/EerdGm-ehJQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBzmEjYy7Zqv2YzmRwwQa83uH9j2Q" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          JavaScript Tutorial Full Course - Beginner to Pro
                          </div>
                          <div className="profileVideo_block_detail_about">
                          4.1M views 10 months ago
                          </div>
                        </div>

                      </Link>
                      <Link to={'/watch/134'} className="profileVideo_block">

                        <div className="profileVideo_block_thumbnail">
                          <img src="https://i.ytimg.com/vi/ZXIN4Nee5JU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLIHLy-Q2L6oGFTc2GML_k7QQYQw" alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                        </div>
                        <div className="profileVideo_block_detail">
                          <div className="profileVideo_block_detail_name">
                          React 19 Course (2025) - Lesson 1: React Basics
                          </div>
                          <div className="profileVideo_block_detail_about">
                          1.2M views 6 months ago
                          </div>
                        </div>

                      </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage