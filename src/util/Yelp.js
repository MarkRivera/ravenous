const apiKey = "YHn-eO4j4rOouRaJNsfp17dDuUHEeNPGvAoKEttnp4rr5vy_dE3mp8Qt437Zoa42TJlD6qokMTH49ynm1wbsJpzz8iMwJz2b0eK6bLSpXyz-tzNUMK6br4XIF8fgXHYx";

const Yelp = {
	search: function (term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/
									https://api.yelp.com/v3/businesses/
									search?term=${term}&location=${location}&sort_by=${sortBy}`, {
										headers: {
											Authorization: `Bearer ${apiKey}`
										}
									}).then(response => {
										return response.json();
									}).then(jsonResponse => {
								if (jsonResponse.businesses) {
									return jsonResponse.businesses.map(business => {
										return {
											id: business.id,
											image: business.image_url,
											name: business.name,
											address: business.address,
											city: business.city,
											state: business.state,
											zipCode: business.zipCode,
											rating: business.rating,
											reviewCount: business.reviewCount
										};
									});
								};
							});
	},
};

export default Yelp;