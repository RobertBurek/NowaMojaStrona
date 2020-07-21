let quote1Element = document.getElementById("quote1");
let autor1Element = document.getElementById("autor1");
let quote2Element = document.getElementById("quote2");
let autor2Element = document.getElementById("autor2");
let quote3Element = document.getElementById("quote3");
let autor3Element = document.getElementById("autor3");

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

// tablica[0] = ['"Wybierz pracę, którą kochasz, a nie przepracujesz</br>', 'ani jednego dnia więcej w Twoim życiu."', 'KONFUCJUSZ'];
// tablica[1] = ['"Pomysły są powszechnym towarem.</br>','Wprowadzanie ich w życie nie jest."', 'MICHAEL DELL, Dell CEO'];
// tablica[2] = ['"Ponoś porażki często, abyś mógł</br>', 'odnieść sukces szybciej."', 'TOM KELLEY, Ideo'];
// tablica[3] = ['"Jeśli nie możesz robić rzeczy wielkich,</br>', 'rób małe rzeczy w wielki sposób."', 'NAPOLEON HILL'];
// tablica[4] = ['"Sukces to nie to, co masz,</br>', 'ale to, kim jesteś."', 'BO BENNET'];
// tablica[5] = ['"Pracuj, aby się stawać, nie aby zdobywać."</br>', '', 'ELBERT HUBBARD'];
// tablica[6] = ['"Okazje biznesowe są jak autobusy,</br>', 'zawsze przyjedzie następny."', 'RICHARD BRANSON'];
// tablica[7] = ['"Twoi najbardziej niezadowoleni klienci</br>', 'są najlepszym źródłem do nauki."', 'BILL GATES, Microsoft'];
// tablica[8] = ['"Nie to, co osiągasz, ale to, co przezwyciężasz,</br>', 'definiuje Twoją karierę."', 'CARLTON FISK'];
// tablica[9] = ['"Skoro i tak będziesz myśleć,</br>', 'myśl odważnie."', 'DONALD TRUMP'];

let coIle = 10;
let dzisiaj = new Date();
let start = dzisiaj.getSeconds();
let i = Math.floor( Math.random() * ( tablica.length - 3));
let quote1 = tablica[i][0];
let autor1 = tablica[i][1];
let quote2 = tablica[i+1][0];
let autor2 = tablica[i+1][1];
let quote3 = tablica[i+2][0];
let autor3 = tablica[i+2][1];

function odliczanie()
	{
		dzisiaj = new Date();
		
		let sekunda = dzisiaj.getSeconds();
		 
		if (((start-sekunda)%coIle)==0) {
			quote3 = quote2;
			autor3 = autor2;
			quote2 = quote1;
			autor2 = autor1;
			quote1 = tablica[i][0];
			autor1 = tablica[i][1];
   			i++
			if (i==tablica.length) i=0;
 		}
		
		quote1Element.innerHTML = quote1;
		autor1Element.innerHTML = autor1;
		quote2Element.innerHTML = quote2;
		autor2Element.innerHTML = autor2;
		quote3Element.innerHTML = quote3;
		autor3Element.innerHTML = autor3;

		setTimeout("odliczanie()",1000);
		
	}