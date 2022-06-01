/*

It switches the image displayed on the screen.
@param num - 0 for left, 1 for right, -1 for initializing

*/

let pos = 1;

let disabled = true;

let slides = document.querySelectorAll(".image");

slides.forEach((element, idx) => {
	element.style.background = "url(src/img/" + (idx + 1) + "i.png)";
});

function switchImage(num) {
	if (num == 1 && pos != slides.length) {
		slides[pos - 1].classList.remove("enable");
		pos++;
	} else if (num == 0 && pos != 1) {
		slides[pos - 1].classList.remove("enable");
		pos--;
	} else if (num != -1) {
		return 0;
	}

	slides[pos - 1].classList.add("enable");

	const arrows = document.querySelectorAll(".go");

	switch (pos) {
		case 1:
			arrows[0].classList.add("disabled");
			disabled = true;
			break;
		case slides.length:
			arrows[1].classList.add("disabled");
			disabled = true;
			break;
		default:
			if (disabled == true) {
				disabled = false;
				Array.from(arrows).forEach((element) => {
					element.classList.remove("disabled");
				});
			}
			break;
	}
}

switchImage(-1);
