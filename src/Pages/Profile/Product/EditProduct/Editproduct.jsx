import styled from "styled-components";
import ImgButton from "../../../../assets/upload-file.png";
import CommonInput from "../../../../Components/CommonInput";
import BasicNav from "../../../../Components/Navbar/UploadNav";
// import Product from "../../../../store/Product";

function EditProduct() {
  function handleformsubmit() {}

  return (
    <form onSubmit={handleformsubmit}>
      <BasicNav children="저장" />
      <EditProfileContainer>
        <ProductContainer>
          <p>이미지 등록</p>
          <EditProductImgContainer>
            <label htmlFor="file">
              <UploadImgDiv></UploadImgDiv>
            </label>
            <UploadImgInput type="file" name="imgfile" id="file" onChange />
          </EditProductImgContainer>
        </ProductContainer>
        <InputContainer>
          <CommonInput
            name="productName"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
          />
          <CommonInput
            name="itemPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
          />
          <CommonInput
            name="saleAddress"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
          />
        </InputContainer>
      </EditProfileContainer>
    </form>
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

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
`;

const UploadImgDiv = styled.button`
  background-image: url(${ImgButton});
  background-size: contain;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const UploadImgInput = styled.input`
  display: none;
`;
