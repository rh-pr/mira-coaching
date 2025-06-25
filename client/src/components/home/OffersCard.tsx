
import { OffersCardType } from '../../types/main';

function OffersCard({data, isOpen, showMore, hideMore}: {data: OffersCardType, isOpen: boolean, showMore: () => void, hideMore: () => void}) {
  

  return (

      <div className={`offer-card ${isOpen ? 'active-back' : ''}`} >
        <div className={`inner ${isOpen ? 'active-back' : ''}`}>
          <img src={data.img} alt="imgage" />
          <h3>{data.name}</h3>
          <p  onClick={() => showMore()}>Mehr...</p>
        </div>
      
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
