const deadline = new Date('2024-03-08').getTime();

const countdown = setInterval(() => {
	const now = new Date().getTime();
	const distance = deadline - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

	if (distance < 10000000) {
		clearInterval(countdown);
		document.getElementById("countdown").innerHTML = "Time's Up!";
	}
}, 1000);