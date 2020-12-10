const colorTimer = () => {
	const title = document.querySelector('h1');
	setInterval(() => {
		title.style.color = "orange";
	}, 500);
	setInterval(() => {
		title.style.color = "yellow";
	}, 1000);
	setInterval(() => {
		title.style.color = "lightgreen";
	}, 1500);
	setInterval(() => {
		title.style.color = "green";
	}, 2000);
	setInterval(() => {
		title.style.color = "lightblue";
	}, 2500);
	setInterval(() => {
		title.style.color = "blue";
	}, 3000);
	setInterval(() => {
		title.style.color = "indigo";
	}, 3500);
	setInterval(() => {
		title.style.color = "violet";
	}, 4000);
}

export { colorTimer };