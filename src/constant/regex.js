// 한글,영어 표현식
export const USER_NAME_PATTERN = /^[ㄱ-ㅎ가-힣a-zA-Z]*$/;

// 영문,숫자,특수문자 표현식
export const USER_ID_PATTERN = /^[a-zA-Z0-9._]*$/;

// eslint-disable-next-line no-useless-escape
export const LOGIN_EMAIL_PATTERN = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
