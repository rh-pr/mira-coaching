import consultImg from '../../assets/img/prof/beratung.jpg';
import workshopImg from '../../assets/img/prof/workshop.jpg';
import teambuildImg from '../../assets/img/prof/team.jpeg';
import OffersCard from './OffersCard';
import { profOffers } from '../../constants/main';

const imags = [consultImg, workshopImg, teambuildImg];

function Offers() {
  return (
    <div className="offers">
      <h1>Professionelle Unterstützung für Ihre Teams</h1>
      <div className={`offers-cards`}>
        {profOffers && profOffers.map((offer, ind) =>   <OffersCard  key={`off-${ind}`}  data={{img: imags[ind], name: offer.name, offers: offer.offers}}/>)}
      </div>
    </div>
  )
}

export default Offers
