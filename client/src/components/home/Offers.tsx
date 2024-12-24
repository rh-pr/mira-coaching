import consultImg from '../../assets/img/prof/beratung.jpg';
import workshopImg from '../../assets/img/prof/workshop.jpg';
import teambuildImg from '../../assets/img/prof/team.jpeg';
import OffersCard from './OffersCard';


function Offers() {
  return (
    <div className="offers">
      <h1>Professionelle Unterstützung für Ihre Teams</h1>
      <div className="offers-cards">
       <OffersCard  data={{img: consultImg, name: 'Beratung von Teams'}}/>
       <OffersCard  data={{img: workshopImg, name: 'Workshops'}}/>
       <OffersCard  data={{img: teambuildImg, name: 'Teambuilding'}}/>
      </div>
    </div>
  )
}

export default Offers
