import React from 'react'
import styled from 'styled-components'
import YouTube from "../images/logo.png"
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex:1;
  background-color:  ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top:0
`;
const Wrapper = styled.div`
  padding: 7px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 25px;
  gap: 5px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 0px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

function Menu({darkMode, setDarkMode}){
  return(
    <Container>
      <Wrapper>
        <Logo>
          <Img src={YouTube}/>
          YouTube
        </Logo>
        <Item>
          <HomeIcon/>
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon/>
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon/>
          Subscription
        </Item>
        <Hr/>
        <Title>You</Title>
        <Item>
          <VideoLibraryOutlinedIcon/>
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon/>
          History
        </Item>
        <Hr/>
        <Login>
          <Button>
            <AccountCircleOutlinedIcon/>SignIn
          </Button>
        </Login>
        <Hr/>
        <Title>Explore</Title>
        <Item>
          <LibraryMusicOutlinedIcon/>
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon/>
          Gameing
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon/>
          Sports
        </Item>
        <Item>
          <MovieOutlinedIcon/>
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon/>
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlinedIcon/>
          Setting
        </Item>
        <Item>
          <FlagOutlinedIcon/>
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon/>
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon/>
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu