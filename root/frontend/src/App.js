import "./App.css";
import { HeaderMegaMenu } from "./Components/Nav/Nav";
import { FooterSocial } from "./Components/Footer/Footer";
import { GetInTouchSimple } from "./Components/Contactus/Contactus";
import { ArticlesCardsGrid } from "./Components/Home/Aboutus/Aboutus";
import SignIn from "./Components/Signin/Signin";
import Vendor from "./Components/Vendor/Vendor";
import Customers from "./Components/Signup/Customers/Customers";
function App() {
  return (
    <div className="App">
      {/* <HeaderMegaMenu />
      <GetInTouchSimple />
      <ArticlesCardsGrid />
      <FooterSocial /> */}
      {/* <Customers/> */}
      {/* <SignIn /> */}
      <Vendor />
    </div>
  );
}
// import  Profile from '../src/Components/Profile/Profile'
// import Customers from "./Components/Signup/Customers/Customers";

// function App() {
//   return <div className="App">
//     <Profile></Profile>
//     {/* <Customers></Customers> */}
//   </div>;
// }

export default App;
