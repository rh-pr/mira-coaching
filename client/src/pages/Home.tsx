import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";

function Home() {
  return (
    <div className='home' lang="de">
      <Main />
      <Offers />
    </div>
  )
}

export default Home
