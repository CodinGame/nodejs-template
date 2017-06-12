function countAllStars(galaxies) {
	var totalStars = 0;
	galaxies.forEach(function(stars) {
		totalStars = stars;
	}, this);
	return totalStars;
}

module.exports = countAllStars;