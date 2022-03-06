(() => {
	// Make the connections to the elements on the page that we wnat the user to interact with
	const theButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
				dropZones = document.querySelectorAll(".drop-zone"),
				theGameBoard = document.querySelector('.puzzle-board'),
				piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"],
				dragZone = document.querySelectorAll('.puzzle-board');
				// dragZones = document.querySelectorAll("");

	// theButtons becomes a container for each img on the HTML.
	function changeImageSet() {
		theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		piecePaths.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`;
		})
		// console.log(theGameBoard.firstElementChild.firstElementChild);
		// theGameBoard.firstElementChild.firstElementChild.appendChild('.puzzle-pieces'); this line takes out the element, but it doesnt work. Heck.
		dragZone.forEach(zone => console.log(zone.firstElementChild));

		//console.log(`Here i go`, dragZones);
		//console.log(`Here i go`, puzzlePieces); :ine 23 erase the pictures.
		dropZones.forEach(zone => zone.innerHTML = '');

		// theGameBoard.firstElementChild

	}

	function startDrag(event) {
		// save a reference to the element wwere dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver(event) {
		// event is the user event (a click, a drag, a drop), some elements have default behaviur (like an anchor tag), we need to block that behaviour and scrip our own. Thas what preventDefault() does, override the default behaviour
		event.preventDefault();
	}

	function handleDrop(event) {
		event.preventDefault();
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);
		if (this.children.length == 0) {
			this.appendChild(document.querySelector(`#${currentEl}`));
		};
		console.log(this);
		// this.appendChild(document.querySelector(".puzzle-pieces *"));
		// appendChild (add child) is a built-in JavaScript method that adds an element to a containin (parent) element. tha "this" keyword is a reference to the element youre
		// console.log(`Show child`, this.children);
	}

	theButtons.forEach(button => button.addEventListener("click", changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});


})();
