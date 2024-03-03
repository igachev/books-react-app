import { useState } from "react";
import Star from "./Star";

export default function StarRating({
    maxRating,
    addReadBook,
    book
}) {

    const [rating,setRating] = useState(0)
    const [hoverRating,setHoverRating] = useState(0)
    return (
        <div className="star-rating">
           {Array.from( {length:maxRating}, (k,i) => (
            <Star 
            key={i} 
            onRate={() => setRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            />
           ))}
           <span className="rating-value">{rating || hoverRating}</span>
           <div>
                <button onClick={() => addReadBook(book,rating)}>Add as Read</button>
            </div>
        </div>
    )
}