import React, {useState , useCallback} from "react";
import Navigation from "./Navigation";
import { SimpleForm } from "./SimpleForm";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = useCallback(() => setToggle(true), []);
  return (
    <div>
        <Navigation  handleClick = {handleClick}/>
        <Banner/>
        <SimpleForm toggle={toggle}/>
        <Footer/>
    </div>
  )
}

export default Home
