import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Link } from 'react-router-dom';


const Sidebar = ({ sidebar }) => {
    return (
        <div className={sidebar ? "home-sideNavbar" : "homeSideNavbarHide"}>


            {/* display sidebar contents  */}
            <div className="home_sideNavbarTop">
                <Link to='/' className={`home_sideNavbarTopOption`} style={{textDecoration:'none', color:'inherit'}}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Home</div>
                </Link>

                <div className={`home_sideNavbarTopOption`} >
                    <VideocamIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Shorts</div>
                </div>

                <div className={`home_sideNavbarTopOption`} >
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Subscription</div>
                </div>
            </div>

            <div className="home_sideNavbarMiddle">
                <div className={`home_sideNavbarTopOption`} >
                    <div className="home_sideNavbarTopOptionTitle" >You</div>
                    <ChevronRightIcon />

                </div>

                <div className={`home_sideNavbarTopOption`} >
                    <RecentActorsIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Your Channel</div>
                </div>

                <div className={`home_sideNavbarTopOption`} >
                    <PlaylistAddIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Playlist</div>
                </div>

                <div className={`home_sideNavbarTopOption `} >
                    <SmartDisplayOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your videos</div>
                </div>
                <div className={`home_sideNavbarTopOption `} >
                    <HistoryIcon />
                    <div className="home_sideNavbarTopOptionTitle">History</div>
                </div>
                <div className={`home_sideNavbarTopOption `}>
                    <WatchLaterOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Watch later</div>
                </div>

                <div className={`home_sideNavbarTopOption `}>
                    <ThumbUpAltOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Liked Videos</div>
                </div>

                <div className={`home_sideNavbarTopOption }`}>
                    <ContentCutIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your clips</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">

                {/* subscriptions section  */}
                <div className="home_sideNavbarTopOption">
                    <div className="home_sideNavbarTopOptionTitleHeader">Subscriptions</div>

                </div>

                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.ggpht.com/kbO4TsJR2jjvQJb3NCo6n4Tyhi54sMgNYvc9WZuRKnmZPxVd6N0altmFS4uZOdYrZ2lecuJQNg=s68-c-k-c0x00ffffff-no-rj' />
                    <div className="home_sideNavbarTopOptionTitle">Tanmay Bhatt</div>
                </div>


                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.ggpht.com/k81o7yBt8HM0SRr13iyLTkpi0eIY8x2VUZcYCYe-D6eDowX4DVzeW2JOuhH5Uube0J9kG1BrEQ=s88-c-k-c0x00ffffff-no-rj' />
                    <div className="home_sideNavbarTopOptionTitle">Karan Aujla</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.ggpht.com/oQIUnDRGO1gKQM4efucuScxgxnU47ITHlHkviMFH-MfNJxg9zOiS_WkAkKByAiTdFlP-qk78O5E=s88-c-k-c0x00ffffff-no-rj' />
                    <div className="home_sideNavbarTopOptionTitle">IHA</div>
                </div>
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.ggpht.com/1iRrlRhV7RMLlyeLSeYaHjtvql01jATABgZtWeX3GyFcJJNNYp3ICYPgdyUOE6U4Y4PLXee594Q=s88-c-k-c0x00ffffff-no-rj' />
                    <div className="home_sideNavbarTopOptionTitle">Neso Academy</div>
                </div>
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.ggpht.com/MoR-WPxNXG2NLvlCnAD8BH2qpp60qokqjOunTbIB0iUIyBQ3wSWxFeHYdN2RocztO9usJbnOdQ=s88-c-k-c0x00ffffff-no-rj' />
                    <div className="home_sideNavbarTopOptionTitle">Kushal Pawar</div>
                </div>
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://yt3.googleusercontent.com/ytc/AIdro_m7SMJAnj2t5VGMGUG3DzHvt6_gj6ovKkSi41lzF4AQrw=s176-c-k-c0x00ffffff-no-rj-mo' />
                    <div className="home_sideNavbarTopOptionTitle">Seedhe Maut</div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar