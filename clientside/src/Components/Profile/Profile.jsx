import { React, useState } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Header } from "./Header";
import { DispayPosts } from "./DisplayPosts";
import { SinglePost } from "./SinglePost";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 30px 20px;
    min-height: 100vh;
    background-color: burlywood;
`;

const Profile = () => {
    const [selectedPost, setSelectedPost] = useState(-1);

    const profileData = {
        profileImg: "https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s900-c-k-c0x00ffffff-no-rj",
        username: "taylorswift",
        display_name: "Taylor Swift",
        is_verified: true,
        bio: `Happy, free, confused, lonely at the same time.`,
        posts_count: 516,
        followers_count: 183,
        following_count: 0,
        followed: true,
        posts: [
            {
                id: 101,
                item: "https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg",
                likes: 1303495,
                comments_count: 49,
            },
            {
                id: 102,
                item: "https://i.scdn.co/image/ab67616d0000b27333b8541201f1ef38941024be",
                likes: 1334620,
                comments_count: 890
            },
            {
                id: 103,
                item: "https://images-na.ssl-images-amazon.com/images/I/71RfNE3rIyL._SL1500_.jpg",
                likes: 45673,
                comments_count: 34654
            },
            {
                id: 104,
                item: "https://api.time.com/wp-content/uploads/2017/12/taylor-swift-person-of-year-2017-time-magazine-2.jpg?w=1600&quality=70",
                likes: 74742,
                comments_count: 573
            },
            {
                id: 105,
                item: "https://www.aceshowbiz.com/images/photo/taylor_swift.jpg",
                likes: 6533462,
                comments_count: 3472
            },
            {
                id: 106,
                item: "https://i.dailymail.co.uk/1s/2021/04/10/23/41596118-0-image-m-94_1618093402682.jpg",
                likes: 3462548,
                comments_count: 65387
            },
            {
                id: 107,
                item: "https://i.guim.co.uk/img/media/b4ba112bb8ec5940db7a077fa27e80bb974db09f/921_16_2079_1247/master/2079.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=616f38822a1e719b469bb7750d2761db",
                likes: 8372648,
                comments_count: 79843
            },
            {
                id: 108,
                item: "https://pbs.twimg.com/media/FDEP10uX0AI7RRg?format=jpg&name=large",
                likes: 64732,
                comments_count: 1450
            },
            {
                id: 109,
                item: "https://hollywoodlife.com/wp-content/uploads/2021/10/taylor-swift-Carole-King-Rock-Roll-Hall-Of-Fame-Tribute-ss-vertical.jpg?w=300&h=400&crop=1",
                likes: 74814,
                comments_count: 96782
            },
            {
                id: 110,
                item: "https://tellusdaily.com/wp-content/uploads/2021/10/Taylor-Swift-bumps-up-re-release-of-album-Red-fans-react.jpg",
                likes: 414614,
                comments_count: 3562
            },
            {
                id: 111,
                item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBL43RyPdRCIRVtDJN4Qy9_sGzZJlOAM8aQ&usqp=CAU",
                likes: 345234,
                comments_count: 25349
            },
            {
                id: 112,
                item: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-1565034961.jpg",
                likes: 6534,
                comments_count: 78942
            },
            {
                id: 113,
                item: "http://c.files.bbci.co.uk/15701/production/_113790878_taylor-swift-new-album-tout.jpg",
                likes: 635548,
                comments_count: 653
            }
        ]
    }

    const handlePostClick = (e) => {
        setSelectedPost(e);
    }

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
                {profileData.posts.map((el) => {
                    console.log("index", el.id, selectedPost);
                    if (el.id === selectedPost) {
                        console.log("Yay", el.id, el);
                        return <SinglePost {...el} />
                    } else {
                        return null;
                    }
                })
                }
            </Container>
        </>
    );
}

export { Profile };