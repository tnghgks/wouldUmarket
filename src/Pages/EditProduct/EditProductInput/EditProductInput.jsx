import styled from "styled-components";
import CommonInput from "../../../Components/Input/CommonInput";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// 판매링크 유효성 정규표현식
// eslint-disable-next-line no-useless-escape
const addressRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

function EditProductInput() {
  const {
    product: { itemName, price, link },
  } = useSelector((state) => state);
  const [priceValue, setPriceValue] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    address: "",
  });

  // 상품 등록 설정값 보여주기
  useEffect(() => {
    setInputData({
      name: itemName,
      price: `${price}`,
      address: link,
    });
  }, [itemName, price, link]);

  // 가격 콤마 찍기
  useEffect(() => {
    setPriceValue(() => {
      const comma = (priceValue) => {
        priceValue = String(priceValue);
        return priceValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
      };
      const uncomma = (priceValue) => {
        priceValue = String(priceValue);
        return priceValue.replace(/[^\d]+/g, "");
      };
      return comma(uncomma(inputData.price));
    });
  }, [inputData.price]);

  // 유효성 검사
  useEffect(() => {
    if (!inputData.name) {
      setErrorMassage((prev) => ({ ...prev, name: "상품명을 입력해주세요." }));
    } else if (inputData.name.length < 2 || inputData.name.length > 15) {
      setErrorMassage((prev) => ({
        ...prev,
        name: "2~15자 이내로 작성해 주세요",
      }));
    } else {
      setErrorMassage((prev) => ({ ...prev, name: "" }));
    }

    if (!inputData.price) {
      setErrorMassage((prev) => ({ ...prev, price: "가격을 입력해주세요." }));
    } else {
      setErrorMassage((prev) => ({ ...prev, price: "" }));
    }

    if (!inputData.address) {
      setErrorMassage((prev) => ({
        ...prev,
        address: "판매링크를 입력해주세요.",
      }));
    } else if (!addressRegex.test(inputData.address)) {
      setErrorMassage((prev) => ({
        ...prev,
        address: "잘못된 판매링크 입니다.",
      }));
    } else {
      setErrorMassage((prev) => ({ ...prev, address: "" }));
    }
  }, [inputData]);
  return (
    <InputContainer>
      <CommonInput
        name="productName"
        type="text"
        placeholder={"2~15자 이내여야 합니다."}
        label="상품명"
        value={inputData.name}
        onChange={(e) => {
          setInputData({ ...inputData, name: e.target.value });
        }}
      />
      <Warning>{errorMassage.name}</Warning>
      <CommonInput
        name="productPrice"
        type="text"
        placeholder={"숫자만 입력 가능 합니다."}
        label="가격"
        value={priceValue}
        onChange={(e) => {
          setInputData({ ...inputData, price: e.target.value });
        }}
      />
      <Warning>{errorMassage.price}</Warning>
      <CommonInput
        name="Address"
        type="text"
        placeholder={"URl을 입력해 주세요."}
        label="판매링크"
        value={inputData.address}
        onChange={(e) => {
          setInputData({ ...inputData, address: e.target.value });
        }}
      />
      <Warning>{errorMassage.address}</Warning>
    </InputContainer>
  );
}

export default EditProductInput;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  & > div > input {
    &:focus {
      border-bottom-color: #f26e22;
      transition: border-bottom-color 200ms;
    }
  }
`;

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
