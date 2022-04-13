import { Star, StarFill } from "react-bootstrap-icons";
import './Rating.css';

const Rating = ({rating}) => {
  const roundRating = Math.round(rating);
  console.log(rating)

  return (
    <div className={'Rating'}>
      { roundRating >= 1 ? <StarFill size={'1rem'}/> : <Star size={'1rem'}/>}
      { roundRating >= 2 ? <StarFill size={'1rem'}/> : <Star size={'1rem'}/>}
      { roundRating >= 3 ? <StarFill size={'1rem'}/> : <Star size={'1rem'}/>}
      { roundRating >= 4 ? <StarFill size={'1rem'}/> : <Star size={'1rem'}/>}
      { roundRating == 5 ? <StarFill size={'1rem'}/> : <Star size={'1rem'}/>}
    </div>
  )
}

export default Rating;