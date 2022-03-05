(() => {
	// Make the connections to the elements on the page that we wnat the user to interact with
	const theButtons = document.querySelectorAll('#buttonHolder img'),
				theGameBoard = document.querySelector('.puzzle-board');

	// theButtons becomes a container for each img on the HTML.
	function changeBgImg() {
		// debugger;
		// let key = this.dataset.bgref;
		// console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
	}

	theButtons.forEach(button => button.addEventListener("click", changeBgImg));


})();
