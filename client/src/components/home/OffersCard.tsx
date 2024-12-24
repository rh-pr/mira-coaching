
import { OffersCardType } from '../../types/main';

function OffersCard({data}: {data: OffersCardType}) {
  return (
    <div className="offer-card">
        <img src={data.img} alt="imgage" />
        <h3>{data.name}</h3>
        <p>Mehr...</p>
    </div>
)
}

export default OffersCard
