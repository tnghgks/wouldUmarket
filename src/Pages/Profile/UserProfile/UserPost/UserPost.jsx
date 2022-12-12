import styled from "styled-components";
import IconPostListOn from "../../../../Components/icon/IconPostListOn.jsx";
// import IconPostListOff from "../../../../Components/icon/IconPostListOff.jsx";
// import IconPostAlbumOn from "../../../../Components/icon/IconPostAlbumOn.jsx";
import IconPostAlbumOff from "../../../../Components/icon/IconPostAlbumOff.jsx";
import HomePost from "../../../../Components/HomePost";

const Container = styled.section`
  width: 100%;
  background-color: white;
  border: 0.5px solid #dbdbdb;
  padding-bottom: 14px;
`;

const ViewModeContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-right: 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;
const PostContainer = styled.section`
  padding: 16px;
`;

function UserPost() {
  return (
    <Container>
      <ViewModeContainer>
        <IconPostListOn></IconPostListOn>
        <IconPostAlbumOff></IconPostAlbumOff>
      </ViewModeContainer>
      <PostContainer>
        <HomePost />
      </PostContainer>
    </Container>
  );
}

export default UserPost;
