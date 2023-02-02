// 한글,영어 표현식
export const USER_NAME_PATTERN = /^[ㄱ-ㅎ가-힣a-zA-Z]*$/;

// 영문,숫자,특수문자 표현식
export const USER_ID_PATTERN = /^[a-zA-Z0-9._]*$/;

// eslint-disable-next-line no-useless-escape
export const LOGIN_EMAIL_PATTERN =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

// 판매링크 주소 표현식
// eslint-disable-next-line no-useless-escape
export const PRODUCT_ADDRESS_PATTEN =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// 콤마
export const PRICE_COMMA = /(\d)(?=(?:\d{3})+(?!\d))/g;

// 언콤마
export const PRICE_UNCOMMA = /[^\d]+/g;

export const REGISTER_EMAIL_PATTERN =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

export const REGISTER_PASSWORD_PATTERN =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
