import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Addpost from "./components/addpost/addpost";
import AddProject from "./components/addproject/addproject";
import Account from "./components/createaccount/account";
import CardsFollow from "./components/followcards/followcards";
import Card from "./components/mediacards/card";
import NewsCards from "./components/newscards/newscards";
import NewsFeed from "./components/newsfeedprofile/newsfeed";
import OpenChat from "./components/openchat/openchat";
import Certedu from "./components/portfoliocertification/certeducation/certedu";
import Certhero from "./components/portfoliocertification/certhero/certhero";
import Certskills from "./components/portfoliocertification/certskills/certskills";
import Project1content from "./components/portfolioproject1/project1content/project1content";
import Project1hero from "./components/portfolioproject1/project1hero/project1hero";
import Project2hero from "./components/portfolioproject2/project2hero/project2hero";
import Project2content from "./components/portfolioproject2/project2content/project2content";
import Project3hero from "./components/portfolioproject3/project3hero/project3hero";
import Project3content from "./components/portfolioproject3/project3content/project3content";
import Profile from "./components/profilenetwork/profile";
import RecentChat from "./components/recentchat/recentchat";
import Socialnetworkheader from "./components/socialnetworkheader/header";
import Signin from "./components/signinaccount/signin";
import Portfoliofooter from "./components/portfoliooverview/portfoliofooter/footer";
import Portfolioheader from "./components/portfoliooverview/portfolioheader/header";
import Portfoliohero from "./components/portfoliooverview/portfoliohero/hero";
import Portfolioproject from "./components/portfoliooverview/portfolioprojects/project";
import Portfoliopagehero from "./components/portfoliopage/portfoliopagehero/portfoliohero";
import Portfoliopageprojects from "./components/portfoliopage/portfoliopageprojects/portfolioprojects";
import Portfoliopagereviews from "./components/portfoliopage/portfoliopagereviews/portfolioreviews";

function App() {
  return (
    <>
      <div>
        <Socialnetworkheader />
        <Addpost />
        <AddProject />
        <Account />
        <Signin />
        <CardsFollow />
        <Card />
        <NewsCards />
        <NewsFeed />
        <OpenChat />
        <Portfolioheader />
        <Portfoliohero />
        <Portfolioproject />
        <Portfoliopagehero />
        <Portfoliopageprojects />
        <Portfoliopagereviews />
        <Certhero />
        <Certedu />
        <Certskills />
        <Project1hero />
        <Project1content />
        <Project2hero />
        <Project2content />
        <Project3hero />
        <Project3content />
        <Portfoliofooter />
        <Profile />
        <RecentChat />
      </div>
    </>
  );
}

export default App;
