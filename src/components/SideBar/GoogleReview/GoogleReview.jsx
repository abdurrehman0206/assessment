import Google from "../../Icons/Google";
import Star from "../../Icons/Star";

const GoogleReview = () => {
	const ReviewGen = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
		const starsArray = [
			...Array(fullStars).fill("full"),
			...(hasHalfStar ? ["half"] : []),
			...Array(emptyStars).fill("none"),
		];

		return (
			<div className="review-gen">
				{starsArray.map((star, index) => (
					<Star status={star} key={index} index={index} />
				))}
			</div>
		);
	};

	return (
		<div className="google-review">
			<div className="google-review-top">
				<Google />
				<p>Bewertungen</p>
				{ReviewGen(4.5)}
			</div>
			<div className="google-review-bottom">
				<p>4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</p>
			</div>
		</div>
	);
};

export default GoogleReview;
