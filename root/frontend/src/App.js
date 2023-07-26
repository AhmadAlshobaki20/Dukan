import "./App.css";
import { HeaderMegaMenu } from "./Components/Nav/Nav";
import { FooterSocial } from "./Components/Footer/Footer";
import { GetInTouchSimple } from "./Components/Contactus/Contactus";
import { ArticlesCardsGrid } from "./Components/Home/Aboutus/Aboutus";
function App() {
  return (
    <div className="App">
      <HeaderMegaMenu />
      <GetInTouchSimple />
      <ArticlesCardsGrid />
      <FooterSocial />
    </div>
  );
}

export default App;
