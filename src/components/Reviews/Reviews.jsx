import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    return <div>
        {[...Array(5)].map((star, idx) => {
            const ratingValue = idx + 1
            return <label>
                <input
                    hidden
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                />
                <FaStar className="star"
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={50}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                />
            </label>
        })}
    </div>
}

export default StarRating