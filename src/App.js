import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router/Router";

const GlobalStyled = createGlobalStyle`
${reset} // 초기화css

*{
  box-sizing: border-box;
}
button {
  margin:0;
  padding:0;
}
.ir-hidden {
   position: absolute;
   clip: rect(0 0 0 0);
   width: 1px;
   height: 1px;
   margin: -1px;
   overflow: hidden;
}
@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
  font-family: 'Godo';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff');
}


//css변수를 만들어서 쓸려고 합니다.
:root{
  --mainColor:#1A374D;
  --subColor:#406882;
  --accentColor:#6998AB;
  --lightColor:#B1D0E0;

  --fontColor:#ffffff;
}
html{
  font-size: 62.5%;
}

body{
  font-family: 'LINESeedKR-Bd', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
