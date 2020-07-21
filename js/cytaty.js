const tablica = [];
tablica[0] = ['Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia więcej w Twoim życiu.', 'KONFUCJUSZ'];
tablica[1] = ['Pomysły są powszechnym towarem. Wprowadzanie ich w życie nie jest.', 'MICHAEL DELL, Dell CEO'];
tablica[2] = ['Ponoś porażki często, abyś mógł odnieść sukces szybciej.', 'TOM KELLEY, Ideo'];
tablica[3] = ['Jeśli nie możesz robić rzeczy wielkich, rób małe rzeczy w wielki sposób.', 'NAPOLEON HILL'];
tablica[4] = ['Sukces to nie to, co masz, ale to, kim jesteś.', 'BO BENNET'];
tablica[5] = ['Pracuj, aby się stawać, nie aby zdobywać.', 'ELBERT HUBBARD'];
tablica[6] = ['Okazje biznesowe są jak autobusy, zawsze przyjedzie następny.', 'RICHARD BRANSON'];
tablica[7] = ['Twoi najbardziej niezadowoleni klienci są najlepszym źródłem do nauki.', 'BILL GATES, Microsoft'];
tablica[8] = ['Nie to, co osiągasz, ale to, co przezwyciężasz, definiuje Twoją karierę.', 'CARLTON FISK'];
tablica[9] = ['Skoro i tak będziesz myśleć, myśl odważnie.', 'DONALD TRUMP'];

let quote1Element = document.getElementById("quote1");
let autor1Element = document.getElementById("autor1");
let quote2Element = document.getElementById("quote2");
let autor2Element = document.getElementById("autor2");
let quote3Element = document.getElementById("quote3");
let autor3Element = document.getElementById("autor3");

let coIle = 10;
let dzisiaj = new Date();
let start = dzisiaj.getSeconds();
let i = Math.floor(Math.random() * (tablica.length -3)) + 2;

quote1Element.innerHTML = tablica[i][0];
autor1Element.innerHTML = tablica[i][1];
quote2Element.innerHTML = tablica[i-1][0];
autor2Element.innerHTML = tablica[i-1][1];
quote3Element.innerHTML = tablica[i-2][0];
autor3Element.innerHTML = tablica[i-2][1];

function odliczanie() {

		let sekunda = new Date().getSeconds();
		 
		if (((sekunda-start+60) % coIle) == 0 ) {
			quote1Element.classList.remove("pokaz");
			autor1Element.classList.remove("pokaz");
			quote1Element.classList.add("ukryj");
			autor1Element.classList.add("ukryj");
			setTimeout(function(){
				quote1Element.classList.remove("ukryj");
				autor1Element.classList.remove("ukryj");
				i++;
				if (i == tablica.length) i = 0;
				quote3Element.innerHTML = quote2Element.textContent;
				autor3Element.innerHTML = autor2Element.textContent;
				quote2Element.innerHTML = quote1Element.textContent;
				autor2Element.innerHTML = autor1Element.textContent;
				quote1Element.innerHTML = tablica[i][0];
				autor1Element.innerHTML = tablica[i][1];
				quote1Element.classList.add("pokaz");
				autor1Element.classList.add("pokaz");
			},3000);
		}
		setTimeout("odliczanie()",1000);
}