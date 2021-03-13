const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".empty");

// Fill Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop throught boxes and clal drag events
for (const box of boxes) {
	box.addEventListener("dragover", dragOver);
	box.addEventListener("dragenter", dragEnter);
	box.addEventListener("dragleave", dragLeave);
	box.addEventListener("drop", dragDrop);
}

// Drag Functions
function dragStart() {
	this.className += " hold";
	setTimeout(() => {
		this.className = "invisible";
	}, 0);
}

function dragEnd() {
	this.className = "fill";
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.classList.add("hovered");
}

function dragLeave() {
	this.classList.remove("hovered");
}

function dragDrop() {
	this.classList.remove("hovered");
	this.append(fill);
}
