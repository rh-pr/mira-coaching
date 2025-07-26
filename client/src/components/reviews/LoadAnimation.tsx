import Lottie from 'lottie-react';
import runningGirlAnimation from '../../assets/animation/search.json';

const LoadingAnimation = () => {
  return (
    <div style={{ width: 600, height: 200, margin: '0 auto', }} className='d-flex flex-column align-items-center w'>
      <Lottie animationData={runningGirlAnimation} loop={true} />
        <p className=''>Lade Bewertungen...</p>

    </div>
  );
};

export default LoadingAnimation;
