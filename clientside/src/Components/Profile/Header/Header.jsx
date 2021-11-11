import { React } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 44px;
    display: flex;
    flex-direction: row;
    vertical-align: baseline;
    height: 230px;
`;

const LeftPart = styled.div`
    width: 290px;
    text-align: center;
    /* background-color: grey; */
    margin-right: 30px;
`;

const RightPart = styled.div`
    /* background-color: azure; */
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    ul {
        display: flex;
    }

    li {
        list-style-type: none;
        margin-right: 40px;
    }
`;

const Name = styled.div`
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const BlueTick = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

const BioPart = styled.div`
    display: flex;
    flex-direction: column;


    .displayName {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: #00376b
    }
`;

const profileImgStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "100%",
    objectFit: "cover"
}

const Header = ({ profileImg, username, is_verified, posts_count, followers_count, following_count, display_name }) => {
    console.log(profileImg);
    return (
        <>
            <Container>
                <LeftPart>
                    <img src={profileImg} alt="" style={profileImgStyle} />
                </LeftPart>
                <RightPart>
                    <Name>
                        {username}
                        {
                            is_verified
                                ? <BlueTick src="https://cdn.shopify.com/s/files/1/0439/6380/9955/products/main-qimg-261992ac747ff07b3d26c68ee1ee664e.png?v=1597432715" />
                                : null
                        }
                    </Name>
                    <section style={{marginBottom: "20px"}}>
                        <ul>
                            <li>
                                <b>{posts_count}</b> posts
                            </li>
                            <li>
                                <b>{followers_count}</b> posts
                            </li>
                            <li>
                                <b>{following_count}</b> posts
                            </li>
                        </ul>
                    </section>
                    <BioPart>
                        <div className="displayName">{display_name}</div>
                        <div>Happy, free, confused, lonely at the same time.</div>
                        <div>Nov. 12, 2021</div>
                        <div>
                            <a href="redtaylorsversion.taylorswift.com"> redtaylorsversion.taylorswift.com </a>
                        </div>
                    </BioPart>
                </RightPart>
            </Container>
        </>
    );
}

export { Header };