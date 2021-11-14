const btn = document.querySelectorAll('.card-accordion-btn');
const panel = document.querySelectorAll('.card-accordion-panel');

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function () {

		for (let j = 0; j < btn.length; j++) {
			if (btn[j].classList.contains("active-btn")) {
				btn[j].classList.remove("active-btn");
				panel[j].classList.remove("active");
			} else {
				panel[i].classList.toggle("active");
				btn[i].classList.toggle("active-btn");
			}
		}
	});
}
