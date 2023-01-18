// 한글,영어 표현식
export const USER_NAME_PATTEN = /^[ㄱ-ㅎ가-힣a-zA-Z]*$/;

// 영문,숫자,특수문자 표현식
export const USER_ID_PATTEN = /^[a-zA-Z0-9._]*$/;

// eslint-disable-next-line no-useless-escape
export const LOGIN_EMAIL_PATTEN = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
