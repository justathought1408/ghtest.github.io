let tg = window.Telegram.WebApp;

let btn = document.querySelector("button");

btn.addEventListenter("click", () => {
	let data = {
		one: document.querySelector("input.one").value;
		two: document.querySelector("input.two").value;
		three: document.querySelector("input.three").value;
	};
	tg.close();
	tg.sendData(JSON.stringify(data));
})