import styled from "styled-components";

const ButtonContainer = styled.button`
  width: ${(props) => {
    switch (props.size) {
      case "lg":
        return "322px";
      case "md":
        return "120px";
      case "ms":
        return "90px";
      case "sm":
        return "56px";
      default:
        return "120px";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "lg":
        return "13px 0";
      case "md":
        return "8px 0;";
      case "ms":
        return "7px 0;";
      case "sm":
        return "7px 0";
      default:
        return "8px";
    }
  }};
  border-radius: ${(props) => {
    switch (props.size) {
      case "lg":
        return "44px";
      case "md":
        return "30px";
      case "ms":
        return "32px";
      case "sm":
        return "26px";
      default:
        return "30px";
    }
  }};
  border: ${(props) =>
    props.bgColor === "white" ? "1px solid #dbdbdb" : "none"};
  font-family: inherit;
  font-weight: ${(props) => (props.size === "sm" ? "400" : "500")};

  font-size: ${(props) => (props.size === "sm" ? "1.2rem" : "1.4rem")};

  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  background-color: ${(props) => {
    switch (props.bgColor) {
      case "main":
        return "var(--mainColor)";
      case "accent":
        return "var(--accentColor) ";
      case "light":
        return "var(--lightColor)";
      case "white":
        return "white";
      default:
        return "var(--mainColor)";
    }
  }};
`;
/**
 *
 * @param {{size: "lg"|"md"|"ms"|"sm" ; fontColor: "selectColor" ; bgColor: "main"|"accent"|"light"|"white"; children: buttonText}} param0
 * @returns
 */
function CommonButton({ size, fontColor, bgColor, children }) {
  return (
    <ButtonContainer size={size} fontColor={fontColor} bgColor={bgColor}>
      {children}
    </ButtonContainer>
  );
}

export default CommonButton;
