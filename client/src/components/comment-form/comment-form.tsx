import {ChangeEvent, FormEvent, useState} from 'react';

function CommentForm() {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setReview(evt.target.value);
    };

    const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setRating(parseInt(evt.target.value, 10));
    };

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        console.log('Submitted review:', {review, rating});
    };

    return (
        <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
            <label className="reviews__label form__label" htmlFor="review">
                Your review
            </label>
            <div className="reviews__rating-form form__rating">
                {[5, 4, 3, 2, 1].map((star) => (
                    <>
                        <input
                            key={star}
                            className="form__rating-input visually-hidden"
                            name="rating"
                            value={star}
                            id={`${star}-stars`}
                            type="radio"
                            checked={rating === star}
                            onChange={handleRatingChange}
                        />
                        <label
                            htmlFor={`${star}-stars`}
                            className="reviews__rating-label form__rating-label"
                            title={['terribly', 'badly', 'not bad', 'good', 'perfect'][5 - star]}
                        >
                            <svg className="form__star-image" width="37" height="33">
                                <use href="#icon-star"></use>
                            </svg>
                        </label>
                    </>
                ))}
            </div>
            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={review}
                onChange={handleReviewChange}
            />
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set{" "}
                    <span className="reviews__star">rating</span> and describe your stay with at least{" "}
                    <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button
                    className="reviews__submit form__submit button"
                    type="submit"
                    disabled={review.length < 50 || rating === 0}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export {CommentForm}