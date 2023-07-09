let tg = window.Telegram.WebApp;

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
	let data = {
		one: document.querySelector("input.one").value,
		two: document.querySelector("input.two").value,
		three: document.querySelector("input.three").value,
	};
	tg.sendData(JSON.stringify(data));
	tg.close();
})