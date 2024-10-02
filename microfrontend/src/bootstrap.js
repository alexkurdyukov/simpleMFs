const init = (el, color) => {
	let btn = document.createElement("button");
	btn.innerText = "I am MF Button. Click me";
	if (color) {
		btn.color = color;
	}
	el.appendChild(btn);
};

export default init;
