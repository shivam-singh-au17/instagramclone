import { React, useState } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Header } from "./Header";
import { DispayPosts } from "./DisplayPosts";
import { SinglePost } from "./SinglePost";
import {
  CancelButton,
  DisplaySinglePost,
  LeftButton,
  RightButton,
} from "./ProfilePageUI";

const Container = styled.div`
  width: 975px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 20px;
  min-height: 100vh;
  /* background-color: burlywood; */
`;

const Profile = () => {
  const [selectedPost, setSelectedPost] = useState(-1);

  const profileData = {
    profileImg:
      "https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s900-c-k-c0x00ffffff-no-rj",
    username: "taylorswift",
    display_name: "Taylor Swift",
    is_verified: true,
    bio: `Happy, free, confused, lonely at the same time.`,
    posts_count: 516,
    followers_count: 183,
    following_count: 0,
    followed: true,
    stories: [
      {
        id: 901,
        item: "https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg",
      },
      // {
      //     id: 902,
      //     item: "https://api.time.com/wp-content/uploads/2017/12/taylor-swift-person-of-year-2017-time-magazine-2.jpg?w=1600&quality=70"
      // }
    ],
    posts: [
      {
        id: 101,
        item: "https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg",
        likes: 1303495,
        comments_count: 49,
        caption:
          "I know some of you thought that would be like trying to solve a crossword and realizing there’s no right answer BUT…you played it good & right. Congrats pals, you guessed the correct titles and feature artists on Red (my version). The vault tracks will feature @chrisstapleton, @phoebebridgers, @markfoster and the first song @teddysphotos and I ever wrote together the first time we met in 2012❗️I can’t express my gratitude enough to these artists for helping me bring these songs to life. I can’t wait til we can dust off our highest hopes and relive these memories together. We’ll also be making a bunch of new ones too, since Red (Taylor’s Version) includes so many songs you haven’t heard yet. Til then, I’ll be counting down and picturing it all in my head. In burning red.",
      },
      {
        id: 102,
        item: "https://i.scdn.co/image/ab67616d0000b27333b8541201f1ef38941024be",
        likes: 1334620,
        comments_count: 890,
      },
      {
        id: 103,
        item: "https://images-na.ssl-images-amazon.com/images/I/71RfNE3rIyL._SL1500_.jpg",
        likes: 45673,
        comments_count: 34654,
      },
      {
        id: 104,
        item: "https://api.time.com/wp-content/uploads/2017/12/taylor-swift-person-of-year-2017-time-magazine-2.jpg?w=1600&quality=70",
        likes: 74742,
        comments_count: 573,
      },
      {
        id: 105,
        item: "https://www.aceshowbiz.com/images/photo/taylor_swift.jpg",
        likes: 6533462,
        comments_count: 3472,
      },
      {
        id: 106,
        item: "https://i.dailymail.co.uk/1s/2021/04/10/23/41596118-0-image-m-94_1618093402682.jpg",
        likes: 3462548,
        comments_count: 65387,
      },
      {
        id: 107,
        item: "https://i.guim.co.uk/img/media/b4ba112bb8ec5940db7a077fa27e80bb974db09f/921_16_2079_1247/master/2079.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=616f38822a1e719b469bb7750d2761db",
        likes: 8372648,
        comments_count: 79843,
      },
      {
        id: 108,
        item: "https://pbs.twimg.com/media/FDEP10uX0AI7RRg?format=jpg&name=large",
        likes: 64732,
        comments_count: 1450,
      },
      {
        id: 109,
        item: "https://hollywoodlife.com/wp-content/uploads/2021/10/taylor-swift-Carole-King-Rock-Roll-Hall-Of-Fame-Tribute-ss-vertical.jpg?w=300&h=400&crop=1",
        likes: 74814,
        comments_count: 96782,
      },
      {
        id: 110,
        item: "https://tellusdaily.com/wp-content/uploads/2021/10/Taylor-Swift-bumps-up-re-release-of-album-Red-fans-react.jpg",
        likes: 414614,
        comments_count: 3562,
      },
      {
        id: 111,
        item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBL43RyPdRCIRVtDJN4Qy9_sGzZJlOAM8aQ&usqp=CAU",
        likes: 345234,
        comments_count: 25349,
      },
      {
        id: 112,
        item: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-1565034961.jpg",
        likes: 6534,
        comments_count: 78942,
      },
      {
        id: 113,
        item: "http://c.files.bbci.co.uk/15701/production/_113790878_taylor-swift-new-album-tout.jpg",
        likes: 635548,
        comments_count: 653,
      },
    ],
  };

  const handlePostClick = (e) => {
    setSelectedPost(e);
  };

  return (
    <>
      <Container>
        <Header {...profileData} />
        {/* <Routes>
                    <Route path='/posts' component={DispayPosts} />
                    <Route path='/reels' component={} />
                    <Route path='/tagged' component={} />
                </Routes> */}
        <DispayPosts {...profileData} handlePostClick={handlePostClick} />
        {selectedPost >= 0 ? (
          <>
            <DisplaySinglePost>
              <CancelButton onClick={() => setSelectedPost(-1)}>
                <svg
                  aria-label="Close"
                  class="_8-yf5 "
                  color="#ffffff"
                  fill="#ffffff"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </CancelButton>
              {selectedPost > 0 ? (
                <LeftButton
                  onClick={() => {
                    if (selectedPost > 0)
                      return setSelectedPost(selectedPost - 1);
                  }}
                >
                  <svg
                    aria-label="Go Back"
                    class="_8-yf5 "
                    color="#000000"
                    fill="#000000"
                    height="16"
                    role="img"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                  </svg>
                </LeftButton>
              ) : null}
              {profileData.posts.map((el, index) => {
                if (index === selectedPost) {
                  return (
                    <SinglePost
                      {...el}
                      user={profileData.username}
                      profileImg={profileData.profileImg}
                      is_verified={profileData.is_verified}
                    />
                  );
                } else {
                  return null;
                }
              })}
              {selectedPost < profileData.posts.length - 1 ? (
                <RightButton
                  onClick={() => {
                    return setSelectedPost(selectedPost + 1);
                  }}
                >
                  <svg
                    aria-label="Next"
                    class="_8-yf5 "
                    color="#000000"
                    fill="#000000"
                    height="16"
                    role="img"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                  </svg>
                </RightButton>
              ) : null}
            </DisplaySinglePost>
          </>
        ) : null}
      </Container>
    </>
  );
};

export { Profile };
