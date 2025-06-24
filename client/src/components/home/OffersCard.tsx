
import { useEffect, useState } from 'react';
import { OffersCardType } from '../../types/main';

function OffersCard({data, isOpen, showMore, hideMore}: {data: OffersCardType, isOpen: boolean, showMore: () => void, hideMore: () => void}) {
  // const [moreBtn, setMoreBtn] = useState<boolean>(false);

  // const showMore = () => {
  //   setMoreBtn(true)
  // }

  // const hideMore = () => {
  //   setMoreBtn(false);
  // }

  // useEffect(() => {
  //   return () => {
  //     setMoreBtn(false)
  //   }
  // },[])

  return (

    // <div className={`offer-card ${moreBtn ? 'active-back' : ''}`} >
    //     <div className={`inner ${moreBtn ? 'active-back' : ''}`}>
      <div className={`offer-card ${isOpen ? 'active-back' : ''}`} >
        <div className={`inner ${isOpen ? 'active-back' : ''}`}>
          <img src={data.img} alt="imgage" />
          <h3>{data.name}</h3>
          <p  onClick={() => showMore()}>Mehr...</p>
        </div>
       {/* <div className= {`back ${!moreBtn ? 'deactive-back' : ''}`}> */}
       <div className= {`back ${!isOpen ? 'deactive-back' : ''}`}>
          {data.offers && data.offers.map(((offer, ind) => <div className='ofers-list' key={`off-lis-${ind}`}>
              <p className="circle"></p>
              <p> {offer}</p>
              <p className='hideMore' onClick={() => hideMore()}>Back...</p>
          </div>))}
        </div>
    </div>
)
}

export default OffersCard
