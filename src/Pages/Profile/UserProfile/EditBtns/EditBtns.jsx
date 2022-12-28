import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../../../Components/button/CommonButton";

function EditBtns() {
  return (
    <BtnContainer>
      <Link to="/profile/editProfile">
        <CommonButton size="md" fontColor="#767676" bgColor="white">
          프로필 수정
        </CommonButton>
      </Link>
      <Link to="/profile/addProduct">
        <CommonButton size="md" fontColor="#767676" bgColor="white">
          상품등록
        </CommonButton>
      </Link>
    </BtnContainer>
  );
}
export default EditBtns;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 26px;
`;
