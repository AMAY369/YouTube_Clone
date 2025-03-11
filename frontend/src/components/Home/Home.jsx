
import './home.css'


const HomePage = ({ sidebar }) => {



  const options = ["All", "News", "Music", "Podcast", "Mixes", "Data Structure", "MongoDB", "AWS", "Comedy", "AI", "Live", "Web Development", "History", "Thoughts", "Cricket", "Health", "UPSC", "Vlog", "Movies", "Entertainment","Javascript"];

  return (
    <div className={sidebar ? 'homePage' : 'fullHomePage'}>

      <div className={sidebar?"homePage_options":"homePage_optionsFull"}>
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


      <div className={sidebar?"home_mainPage":"home_mainPageWithoutLink"}>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">World's Tallest Man in Egypt</div>
              <div className="youtube_channelName">Wonderer</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">User</div>
              <div className="youtube_channelName">User</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">User</div>
              <div className="youtube_channelName">User</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">User</div>
              <div className="youtube_channelName">User</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">User</div>
              <div className="youtube_channelName">User</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
        <div className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/uGb341KQM_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrnZXcKO3dmPK5jj9wrl1Iwfvxcw" alt="thumbnail" className="youtube_thumbnail" />
            <div className="youtube_video_duration">
              18:06
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtube_channel_profileBox">
              <img src="https://yt3.ggpht.com/uE6umj6hqNQR9AcOYvXUDnr7OFdhBRQbIsnOxS3nn2AzHkFNiUTwNbKeen0VJIBzU3WNOfWWnA=s68-c-k-c0x00ffffff-no-rj" alt="channel profile" className="youtube_channel_profile" />
            </div>

            <div className='youtubeTitleBox_Title'>
              <div className="youtube_videoTitle">User</div>
              <div className="youtube_channelName">User</div>
              <div className="youtubeVideo_views">1.3M likes</div>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default HomePage