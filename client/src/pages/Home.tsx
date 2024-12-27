import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";
import AboutMe from "../components/home/AboutMe";

function Home() {
  return (
    <div className='home' lang="de">
      <Main />
      <Offers />
      <AboutMe />
    </div>
  )
}

export default Home
