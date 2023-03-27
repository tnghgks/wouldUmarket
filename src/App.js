import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Authentication from "./components/auth/Authentication";
import Router from "./router/Router";

const GlobalStyled = createGlobalStyle`
${reset} // 초기화css

*{
  box-sizing: border-box;
}
button {
  margin:0;
  padding:0;
}
a{
  color:inherit;
  text-decoration: none;
}
a:visited{
  color:inherit;
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
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
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

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--mainColor);
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: var(--accentColor);
}

`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Authentication />
      <Router />
    </>
  );
}

export default App;
