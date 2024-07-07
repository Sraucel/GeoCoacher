import React from 'react';
import './reviewspage.css';

const reviews = [
  { id: 1, title: 'Great Service', content: 'The tutoring service was excellent. Highly recommend!' },
  { id: 2, title: 'Very Helpful', content: 'The coaching helped me achieve my goals. Fantastic experience!' },
  { id: 3, title: 'Professional', content: 'The staff is very professional and helpful.' },
  { id: 4, title: 'Loved it', content: 'The sessions were very engaging and productive.' },
  { id: 5, title: 'Highly Recommend', content: 'I saw great improvement in my skills. Will come back for sure.' },
  { id: 6, title: 'Fantastic Experience', content: 'Overall, a very positive experience with great results.' }
];

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h1>Why Choose us?</h1>
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review-box">
            <h2>{review.title}</h2>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
