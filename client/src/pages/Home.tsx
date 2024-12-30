import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";
import AboutMe from "../components/home/AboutMe";
import ReviewCard from "../components/home/ReviewCard";

import { reviews } from '../constants/main'

function Home() {
  return (
    <div className='home' lang="de">
      <Main />
      <Offers />
      <AboutMe />
      <div className="reviews-small">
       {reviews[0] && <ReviewCard rev={reviews[0]} />}
       {reviews[1] && <ReviewCard rev={reviews[1]} />}
       {reviews[2] && <ReviewCard rev={reviews[2]} />}

      </div>
    </div>
  )
}

export default Home
