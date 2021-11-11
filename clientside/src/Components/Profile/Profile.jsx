import { React } from "react";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { DispayPosts } from "./MainSection/DisplayPosts";

const Container = styled.div`
    padding: 30px 20px;
`;

const Profile = () => {
    const profileData = {
        profileImg: "https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s900-c-k-c0x00ffffff-no-rj",
        username: "taylorswift",
        display_name: "Taylor Swift",
        is_verified: true,
        posts_count: 516,
        followers_count: 183,
        following_count: 0,
        followed: true,
        posts: [
            {
                item: "https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg",
                likes: 1303495,
                comments: 49
            },
            {
                item: "https://i.scdn.co/image/ab67616d0000b27333b8541201f1ef38941024be",
                likes: 1334620,
                comments: 890
            },
            {
                item: "https://images-na.ssl-images-amazon.com/images/I/71RfNE3rIyL._SL1500_.jpg",
                likes: 45673,
                comments: 34654
            },
            {
                item: "https://api.time.com/wp-content/uploads/2017/12/taylor-swift-person-of-year-2017-time-magazine-2.jpg?w=1600&quality=70",
                likes: 74742,
                comments: 573
            },
            {
                item: "https://www.aceshowbiz.com/images/photo/taylor_swift.jpg",
                likes: 6533462,
                comments: 3472
            },
            {
                item: "https://i.dailymail.co.uk/1s/2021/04/10/23/41596118-0-image-m-94_1618093402682.jpg",
                likes: 3462548,
                comments: 65387
            },
            {
                item: "https://i.guim.co.uk/img/media/b4ba112bb8ec5940db7a077fa27e80bb974db09f/921_16_2079_1247/master/2079.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=616f38822a1e719b469bb7750d2761db",
                likes: 8372648,
                comments: 79843
            },
            {
                item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zzQaEuid5_P8wDqQx2Dg3q3uoFmIiXnrSw&usqp=CAU",
                likes: 64732,
                comments: 1450
            },
            {
                item: "https://hollywoodlife.com/wp-content/uploads/2021/10/taylor-swift-Carole-King-Rock-Roll-Hall-Of-Fame-Tribute-ss-vertical.jpg?w=300&h=400&crop=1",
                likes: 74814,
                comments: 96782
            },
            {
                item: "https://tellusdaily.com/wp-content/uploads/2021/10/Taylor-Swift-bumps-up-re-release-of-album-Red-fans-react.jpg",
                likes: 414614,
                comments: 3562
            },
            {
                item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBL43RyPdRCIRVtDJN4Qy9_sGzZJlOAM8aQ&usqp=CAU",
                likes: 345234,
                comments: 25349
            },
            {
                item: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-1565034961.jpg",
                likes: 6534,
                comments: 78942
            },
            {
                item: "http://c.files.bbci.co.uk/15701/production/_113790878_taylor-swift-new-album-tout.jpg",
                likes: 635548,
                comments: 653
            }
        ]
    }

    return (
        <>
            <Container>
                <Header {...profileData} />
                <DispayPosts {...profileData} />
            </Container>
        </>
    );
}

export { Profile };