import Pages from "./Components/Pages/Page";
import Category from "./Components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./Components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
           <GiFoodTruck/>
           <Logo to={"/"}>DishDiscovery</Logo>
      </Nav>
      <Search/>
      <Category/>
       <Pages/>
       </BrowserRouter>
    </div> 
  );
}
const Logo =styled(Link)
`
text-decoration:none;
font-size:1rem;
font-weight:400;
font-family:'Lobster Two',cursive;
`
 const Nav=styled.div
 `
 padding:2rem 0rem;
 display:flex;
 justify-content:flex-start;
 align-items:center;
 svg
 {
    font-size:2rem;
 }
 `
export default App;
