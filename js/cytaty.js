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

		// let godzina = dzisiaj.getHours();
		// if (godzina<10) godzina = "0"+godzina;
		// if (godzina=="00") godzina = "24";
		
		// let minuta = dzisiaj.getMinutes();
		// if (minuta<10) minuta = "0"+minuta;
		
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
		
		// document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		document.getElementById("quote1").innerHTML = quote1;
		document.getElementById("quote2").innerHTML = quote2;
		document.getElementById("quote3").innerHTML = quote3;
		document.getElementById("autor1").innerHTML = autor1;
		document.getElementById("autor2").innerHTML = autor2;
		document.getElementById("autor3").innerHTML = autor3;
		// document.getElementById("linia2").innerHTML = linia2;
		// document.getElementById("autor").innerHTML = autor;

		setTimeout("odliczanie()",1000);
		
	}