/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './ProfilePage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

const ProfilePage = ({ sidebar }) => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const picture = localStorage.getItem("userProfilePic")

  const fetchProfileData = async () => {
    axios.get(`http://localhost:3000/api/${id}/channel`).then((response) => {
      setData(response.data.video);
      setUser(response.data.video[0]?.user)
    }).catch(err => {
      console.log(err);

    })

  }
  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <div className='profile'>
      <Sidebar sidebar={sidebar} />

      <div className={sidebar ? "profile_page" : "profile_page_inactive"}>

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            {user && <img className='profile_top_section_img' src={user?.profilePic} alt="profile picture" />}
            {!user && <img className='profile_top_section_img' src={picture} alt="profile picture" />}
          </div>

          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">{user?.channelName}
            </div>
            {user && <div className="profile_top_section_info">
              <span className="profile_channelId">{user?.userName}</span> • 613K subscribers • {data?.length} Videos
            </div>}
            {!user && <div className="profile_top_section_info">
              <span className="profile_channelId">{user?.userName}</span>{data?.length} Videos
            </div>}
            <div className="profile_top_section_info">
              {user?.about}
            </div>
          </div>

        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

          <div className="profileVideos">

            {
              data.map((item, index) => {
                return (
                  <Link key={index} to={`/watch/${item?._id}`} className="profileVideo_block">

                    <div className="profileVideo_block_thumbnail">
                      <img src={item?.thumbnail} alt="thumbnail" className="profileVideo_block_thumbnail_img" />
                    </div>
                    <div className="profileVideo_block_detail">
                      <div className="profileVideo_block_detail_name">
                        {item?.title}
                      </div>
                      <div className="profileVideo_block_detail_about">
                        {item?.createdAt.slice(1, 10)}
                      </div>
                    </div>

                  </Link>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage