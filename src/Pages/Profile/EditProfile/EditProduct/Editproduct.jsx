import styled from "styled-components";
import ImgButton from "../../../../Components/ImgButton";
import CommonInput from "../../../../Components/CommonInput";
import BasicNav from "../../../../Components/Navbar/UploadNav";

function EditProduct() {
  return (
    <>
      <BasicNav />
      <EditProfileContainer>
        <ProductContainer>
          <p>이미지 등록</p>
          <EditProductImgContainer>
            <ImgBtn />
          </EditProductImgContainer>
        </ProductContainer>
        <InputContainer>
          <CommonInput
            name="상품명"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
          />
          <CommonInput
            name="가격"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
          />
          <CommonInput
            name="판매링크"
            type="text"
            placeholder={"URl을 입력해 주세요."}
          />
        </InputContainer>
      </EditProfileContainer>
    </>
  );
}

export default EditProduct;

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.main`
  width: 390px;
  height: 820px;
  padding: 78px 34px 0 34px;
  margin: 0 auto;
`;

// 상품 사진 변경 컴퍼넌트

const ProductContainer = styled.section`
  width: 322px;
  margin-top: 30px;
  color: #767676;
  font-weight: 400;
  font-size: 12px;
`;
const EditProductImgContainer = styled.section`
  margin-top: 18px;
  height: 204px;
  background-color: #f2f2f2;
  border-radius: 10px;
  position: relative;
`;

const ImgBtn = styled(ImgButton)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  cursor: pointer;
`;

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
`;
