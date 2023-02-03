let body = document.querySelector('body');
let button = document.querySelector('nav button');
let divs = document.querySelectorAll('main div');

let batman = document.querySelector('main div.batman');
let superman = document.querySelector('main div.superman');
let berserk = document.querySelector('main div.berserk');
let jill = document.querySelector('main div.jill');
let sheva = document.querySelector('main div.sheva');
let magneto = document.querySelector('main div.magneto');
let wolverine = document.querySelector('main div.wolverine');


let facts = [
	'Starfire will always be the most gorgeous woman internationally!',
	'DC almost sold the rights to Superman, Wonder Woman, Green Lantern, Batman - and many other members of the Justice League? When struggling for money in 1984, the comic franchise actually offered this to the big wigs at Marvel, but it was rejected!',
	'Superman wasn’t a DC Comics original superhero. He was created by Jerry Siegel and Joe Shuster, and DC bought the rights to him in 1938.',
	'Jason Todd was beaten and left to die by the Joker. However, his fate was still in the balance, and DC Comics actually ran a telephone poll to see what the fans wanted. In a stunning turn of events, 5,343 voted yes, and 5,271 voted no.',
	'Spider-Man fans may know of Spider-Pig, but in DC there was genuinely a Bat-Cow. It was rescued and adopted by Batman and Robin, becoming a member of their team.',
	'Unlike other superheroes, Batman does not have any superpowers.',
	'Annette Bening was replaced with Michelle Pfeiffer after being originally billed for the part of Catwoman until she became pregnant.',
	"At the Canadian University of Victoria, you can enroll in a course designed to explore the life of Batman. The course is called 'The Science of Batman.'",
	'JonDoe297 is actually the online handle used by Bruce Wayne himself.',
	'Michael Jackson wanted to play Spider-Man and so he tried to buy Marvel Comics in 1990.',
	"Wolverine, the only character to appear in every single X-Men film, didn’t even exist until the 1970s. He first appeared in a Hulk comic from late 1974 and didn’t join the X-Men until 1975.",
	'Professor Xavier of the comics is actually American. He grew up in the house that would eventually become the location of the X-Men school, along with his step-brother, Juggernaut.'
];
for (let i = 0; i < facts.length; i++) {
	console.log(facts[i]);
}


body.classList.add('textRed');
button.addEventListener('click', function() {
	body.classList.add('textRed');
	if (body.classList.contains('comicbookWallpaper_1920x1080')) {
		body.classList.remove('comicbookWallpaper_1920x1080');
		body.classList.remove('textRed');
		body.classList.add('comicbookWallpaper2_3000x2000');
		body.classList.add('textYellow');
		for (let i = 0; i < divs.length; i++) {
			divs[i].classList.add('borderYellow');
		}
	}
	else if (body.classList.contains('comicbookWallpaper2_3000x2000')) {
		body.classList.remove('comicbookWallpaper2_3000x2000');
		body.classList.remove('textYellow');
		body.classList.remove('textRed');
		for (let i = 0; i < divs.length; i++) {
			divs[i].classList.remove('borderYellow');
		}
		body.classList.add('comicbookWallpaper3_1920x1080');
		body.classList.add('textAliceBlue');
		for (let i = 0; i < divs.length; i++) {
			divs[i].classList.add('borderAliceBlue');
		}
	}
	else if (body.classList.contains('comicbookWallpaper3_1920x1080')) {
		body.classList.remove('comicbookWallpaper3_1920x1080');
		body.classList.remove('textAliceBlue');
		for (let i = 0; i < divs.length; i++) {
			divs[i].classList.remove('borderAliceBlue');
		}
		body.classList.add('comicbookWallpaper_1920x1080');
	}
});


function makeSound(key) {
	switch (key) {
		case 'w':
			let audioBatman = new Audio('joker_whySoSerious.mp3');
			audioBatman.play();
			break;
		case 'a':
			let audioSuperman = new Audio('superman_zodDeath.mp3');
			audioSuperman.play();
			break;
		case 's':
			let audioBerserk = new Audio('berserk_oldNews.mp3');
			audioBerserk.play();
			break;
		case 'd':
			let audioJill = new Audio('jill_jillSandwich.mp3');
			audioJill.play();
			break;
		case 'f':
			let audioSheva = new Audio('sheva_iNeedAmmo.mp3');
			audioSheva.play();
			break;
		case 'g':
			let audioMagneto = new Audio('magneto_sorryMyDear.mp3');
			audioMagneto.play();
			break;
		case 'h':
			let audioWolverine = new Audio('wolverine_noJeanNo.mp3');
			audioWolverine.play();
			break;
		default:
			console.log(false);
	}
}


for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', function() {
		let divInnerHtml = this.innerHTML;

		if (this.classList.contains('batman')) {
			this.classList.remove('batman');
			this.classList.add('batman2');
		}
		else if (this.classList.contains('batman2')) {
			this.classList.remove('batman2');
			this.classList.add('batman');
		}
		else if (this.classList.contains('superman')) {
			this.classList.remove('superman');
			this.classList.add('superman2');
		}
		else if (this.classList.contains('superman2')) {
			this.classList.remove('superman2');
			this.classList.add('superman');
		}
		else if (this.classList.contains('berserk')) {
			this.classList.remove('berserk');
			this.classList.add('berserk2');
		}
		else if (this.classList.contains('berserk2')) {
			this.classList.remove('berserk2');
			this.classList.add('berserk');
		}
		else if (this.classList.contains('jill')) {
			this.classList.remove('jill');
			this.classList.add('jill2');
		}
		else if (this.classList.contains('jill2')) {
			this.classList.remove('jill2');
			this.classList.add('jill');
		}
		else if (this.classList.contains('sheva')) {
			this.classList.remove('sheva');
			this.classList.add('sheva2');
		}
		else if (this.classList.contains('sheva2')) {
			this.classList.remove('sheva2');
			this.classList.add('sheva');
		}
		else if (this.classList.contains('magneto')) {
			this.classList.remove('magneto');
			this.classList.add('magneto2');
		}
		else if (this.classList.contains('magneto2')) {
			this.classList.remove('magneto2');
			this.classList.add('magneto');
		}
		else if (this.classList.contains('wolverine')) {
			this.classList.remove('wolverine');
			this.classList.add('wolverine2');
		}
		else if (this.classList.contains('wolverine2')) {
			this.classList.remove('wolverine2');
			this.classList.add('wolverine');
		}
		setTimeout(makeSound, 1000, divInnerHtml);
		alert(facts[Math.floor(Math.random() * 12 + 1)]);
	});
}


document.addEventListener('keydown', function(event) {
	switch (event.key) {
		case 'w':
			if (divs[0].classList.contains('batman')) {
				divs[0].classList.remove('batman');
				divs[0].classList.add('batman2');
			}
			else if (divs[0].classList.contains('batman2')) {
				divs[0].classList.remove('batman2');
				divs[0].classList.add('batman');
			}
			break;
		case 'a':
			if (divs[1].classList.contains('superman')) {
				divs[1].classList.remove('superman');
				divs[1].classList.add('superman2');
			}
			else if (divs[1].classList.contains('superman2')) {
				divs[1].classList.remove('superman2');
				divs[1].classList.add('superman');
			}
			break;
		case 's':
			if (divs[2].classList.contains('berserk')) {
				divs[2].classList.remove('berserk');
				divs[2].classList.add('berserk2');
			}
			else if (divs[2].classList.contains('berserk2')) {
				divs[2].classList.remove('berserk2');
				divs[2].classList.add('berserk');
			}
			break;
		case 'd':
			if (divs[3].classList.contains('jill')) {
				divs[3].classList.remove('jill');
				divs[3].classList.add('jill2');
			}
			else if (divs[3].classList.contains('jill2')) {
				divs[3].classList.remove('jill2');
				divs[3].classList.add('jill');
			}
			break;
		case 'f':
			if (divs[4].classList.contains('sheva')) {
				divs[4].classList.remove('sheva');
				divs[4].classList.add('sheva2');
			}
			else if (divs[4].classList.contains('sheva2')) {
				divs[4].classList.remove('sheva2');
				divs[4].classList.add('sheva');
			}
			break;
		case 'g':
			if (divs[5].classList.contains('magneto')) {
				divs[5].classList.remove('magneto');
				divs[5].classList.add('magneto2');
			}
			else if (divs[5].classList.contains('magneto2')) {
				divs[5].classList.remove('magneto2');
				divs[5].classList.add('magneto');
			}
			break;
		case 'h':
			if (divs[6].classList.contains('wolverine')) {
				divs[6].classList.remove('wolverine');
				divs[6].classList.add('wolverine2');
			}
			else if (divs[6].classList.contains('wolverine2')) {
				divs[6].classList.remove('wolverine2');
				divs[6].classList.add('wolverine');
			}
			break;
		default:
			console.log(false);
	}
	setTimeout(makeSound, 1000, event.key);
	alert(facts[Math.floor(Math.random() * 12 + 1)]);
});
