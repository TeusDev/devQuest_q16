let pos = 1;
let disabled = true;

switchImage(-1);

function switchImage(num) {
	let images = [
		(img_1 = {
			source: "url(src/img/1i.png)",
			title: "Titulo imagem 1",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat aliquet, at eleifend augue pulvinar. Phasellus nulla eros, consequat a ipsum in, ultrices volutpat felis. Duis in nibh a tellus sodales finibus. Fusce libero turpis, sodales eu facilisis et, tristique vitae nibh. Praesent arcu eros, condimentum a interdum in, semper in ante. Suspendisse dolor urna, volutpat a e",
			buttonColor: "#C50000",
		}),
		(img_2 = {
			source: "url(src/img/2i.png)",
			title: "Titulo imagem 2",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat aliquet, at eleifend augue pulvinar. Phasellus nulla eros, consequat a ipsum in, ultrices volutpat felis. Duis in nibh a tellus sodales finibus. Fusce libero turpis, sodales eu facilisis et, tristique vitae nibh. Praesent arcu eros, condimentum a interdum in, semper in ante. Suspendisse dolor urna, volutpat a e",
			buttonColor: "#D9DD10",
		}),
		(img_3 = {
			source: "url(src/img/3i.png)",
			title: "Titulo imagem 3",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat aliquet, at eleifend augue pulvinar. Phasellus nulla eros, consequat a ipsum in, ultrices volutpat felis. Duis in nibh a tellus sodales finibus. Fusce libero turpis, sodales eu facilisis et, tristique vitae nibh. Praesent arcu eros, condimentum a interdum in, semper in ante. Suspendisse dolor urna, volutpat a e",
			buttonColor: "#A63A17",
		}),
		(img_4 = {
			source: "url(src/img/4i.png)",
			title: "Titulo imagem 4",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat aliquet, at eleifend augue pulvinar. Phasellus nulla eros, consequat a ipsum in, ultrices volutpat felis. Duis in nibh a tellus sodales finibus. Fusce libero turpis, sodales eu facilisis et, tristique vitae nibh. Praesent arcu eros, condimentum a interdum in, semper in ante. Suspendisse dolor urna, volutpat a e",
			buttonColor: "#10ACDD",
		}),
	];

	if (num == 1 && pos != images.length) {
		pos++;
	} else if (num == 0 && pos != 1) {
		pos--;
	} else if (num != -1) {
		return console.log("Ei, PARADO! " + num);
	}

	const arrows = document.querySelectorAll(".go");

	switch (pos) {
		case 1:
			arrows[0].style.opacity = 0.5;
			arrows[0].style.cursor = "default";
			disabled = true;
			break;
		case images.length:
			arrows[1].style.opacity = 0.5;
			arrows[1].style.cursor = "default";
			disabled = true;
			break;
		default:
			if (disabled == true) {
				disabled = false;
				Array.from(arrows).forEach((element) => {
					element.style.opacity = 1;
					element.style.cursor = null;
				});
			}
			break;
	}

	document.getElementById("source").style.background = images[pos - 1].source;
	document.getElementById("title").textContent = images[pos - 1].title;
	document.getElementById("text").textContent = images[pos - 1].text;
	document.getElementById("button").style.color = images[pos - 1].buttonColor;
}
