const btn = document.querySelectorAll('.card-accordion-btn');
const panel = document.querySelectorAll('.card-accordion-panel');

/* document.querySelectorAll('.card-accordion-btn').forEach(btn => {
	btn.addEventListener('click', event => {

	if(!btn.classList.contains("active-btn")){
		btn.nextElementSibling.classList = "active";
	}else {
		btn.nextElementSibling.classList.remove("active");
	}

		btn.classList.toggle("active-btn");
		btn.nextElementSibling.classList.toggle("active");
	});
}); */

/* Working have way */
/*
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
} */

btn.forEach(btn => {
	btn.addEventListener('click', event => {
		Hide();
		btn.classList.add("active-btn");
		btn.nextElementSibling.classList.add("active");
	});
});

function Hide() {
	for (let i = 0; i < btn.length; i++) {
		btn[i].classList.remove("active-btn");
		btn[i].nextElementSibling.classList.remove("active");		
	}
}