import React from 'react'
import styled from "styled-components";


const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function VideoCard() {
  return (
    <Container>
        <Image
          src="https://i.ytimg.com/vi/AJSCSi96Dbc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcxEJ_PY7NQjgAKiAVT5HiR7LzoQ"
        />
        <Details>
          <ChannelImage
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Texts>
            <Title>How it feels to be WEALTHY</Title>
            <ChannelName>Explore Life</ChannelName>
            <Info>1.2M views • 16 day ago</Info>
          </Texts>
        </Details>
      </Container>
  )
}

export default VideoCard