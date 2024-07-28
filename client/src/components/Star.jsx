import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Star({
    full,
    onRate,
    onHoverIn,
    onHoverOut
}) {

    return (
       <span className='star' onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} data-testid="star-component">
        {
             full
             ? <FontAwesomeIcon data-testid="yellow-star" icon={faStar} size="lg" style={{color: "#FFD43B",}} />  
             : <FontAwesomeIcon data-testid="gray-star" icon={faStar} size="lg" style={{color: "#d9dbde",}} />
        }
       </span>
    )
}