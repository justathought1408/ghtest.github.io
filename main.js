let tg = window.Telegram.WebApp;

let btn = document.querySelector("button")

btn.addEventListenter("submit", () => {
	data = {
		one: document.querySelector("input.one").value;
		two: document.querySelector("input.two").value;
		three: document.querySelector("input.three").value;
	}
	tg.sendData(JSON.stringify(data))
})