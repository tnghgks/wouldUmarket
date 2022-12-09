import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
${reset} // 초기화css

@font-face {
  font-family: 'Godo';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff');
}

@font-face {
  font-family: 'Godo';
  font-style: normal;
  font-weight: 700;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
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
  font-size:10px;
}

body{
  font-family: 'Godo', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <div>홈</div>
    </>
  );
}

export default App;
