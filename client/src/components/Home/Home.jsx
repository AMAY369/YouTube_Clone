
import './Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const HomePage = ({ sidebar, searchResults }) => {
  const [data, setData] = useState([])

  // fetching all videos 
  useEffect(() => {
    axios.get('http://localhost:3000/api/allVideos').then(res => {
      setData(res.data.videos)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  // fething the searched videos 
  useEffect(() => {
    if (!searchResults || searchResults.length === 0) {
      axios.get('http://localhost:3000/api/allVideos')
        .then(res => setData(res.data.videos))
        .catch(err => console.log(err));
    } else {
      setData(searchResults);
    }
  }, [searchResults]);


  // video categories
  const options = ["All", "News", "Music", "Podcast", "Mixes", "Data Structure", "MongoDB", "AWS", "Comedy", "AI", "Live", "Web Development", "History", "Thoughts", "Cricket", "Health", "UPSC", "Vlog", "Movies", "Entertainment", "Javascript"];

  return (
    <div className={sidebar ? 'homePage' : 'fullHomePage'}>

      {/* Render video categories */}
      <div className={sidebar ? "homePage_options" : "homePage_optionsFull"}>
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>

        {/* Render video list */}
      <div className={sidebar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        {
          data?.map((item, ind) => {
            return (
              <Link key={ind} to={`/watch/${item._id}`} className="youtube_video" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="youtube_thumbnailBox">
                  <img src={`${item?.thumbnail}`} alt="thumbnail" className="youtube_thumbnail" />
                  <div className="youtube_video_duration">
                    18:06
                  </div>
                </div>

                <div className="youtubeTitleBox">
                  <div className="youtube_channel_profileBox">
                    <img src={item?.user?.profilePic} alt="channel profile" className="youtube_channel_profile" />
                  </div>

                  <div className='youtubeTitleBox_Title'>
                    <div className="youtube_videoTitle">{item?.title}</div>
                    <div className="youtube_channelName">{item?.user?.channelName}</div>
                    <div className="youtubeVideo_views">{item?.like} likes</div>
                  </div>

                </div>
              </Link>
            )
          })
        }
      </div>



    </div>
  )
}

export default HomePage