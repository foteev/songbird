"use strict";(self.webpackChunkSongnerd=self.webpackChunkSongnerd||[]).push([[179],{75:(e,t,i)=>{var s=function(e){var t=document.querySelector(".player__audio");t.setAttribute("src",e),console.log(e);var i=document.querySelector(".player__play"),s=document.querySelector(".player__replay"),a=document.querySelector(".player__status-bar"),o=document.querySelector(".player__time"),n=function(e){return e>=0&&e<10?"0".concat(e):e},r=function(){t.paused?(t.play(),i.classList.add("player__stop")):(t.pause(),i.classList.remove("player__stop"))};i.addEventListener("click",r),t.addEventListener("click",r),s.addEventListener("click",(function(){t.currentTime=0,t.play(),i.classList.add("player__stop")})),t.addEventListener("timeupdate",(function(){a.value=t.currentTime/t.duration*100;var e=Math.floor(t.currentTime/60),i=Math.floor(t.currentTime%60);o.textContent="".concat(n(e),":").concat(n(i))})),a.addEventListener("change",(function(){t.currentTime=a.value*t.duration/100}))},a=function(e){var t=document.querySelector(".player__audio2");t.setAttribute("src",e),console.log(e),t.pause();var i=t.play();void 0!==i&&i.then((function(e){var i=document.querySelector(".player__play2"),s=document.querySelector(".player__replay2"),a=document.querySelector(".player__status-bar2"),o=document.querySelector(".player__time2");i.classList.remove("player__stop2");var n=function(e){return e>=0&&e<10?"0".concat(e):e},r=function(){t.paused?(t.play(),i.classList.add("player__stop2")):(t.pause(),i.classList.remove("player__stop2"))};i.addEventListener("click",r),t.addEventListener("click",r),s.addEventListener("click",(function(){t.currentTime=0,t.play(),i.classList.add("player__stop2")})),t.addEventListener("timeupdate",(function(){a.value=t.currentTime/t.duration*100;var e=Math.floor(t.currentTime/60),i=Math.floor(t.currentTime%60);o.textContent="".concat(n(e),":").concat(n(i))})),a.addEventListener("change",(function(){t.currentTime=a.value*t.duration/100}))})).catch((function(i){i&&t.setAttribute("src",e)}))},o=i(702),n=i(921),r=i(622),c=i(392),u=i(18),l=i(932),d=i(605),g=[[{id:1,name:"Raven",species:"Corvus corax",description:"Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.",image:"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{id:2,name:"Shadoof",species:"Grus grus",description:"The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».",image:"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{id:3,name:"Swallow",species:"Delichon urbicum",description:"Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.",image:"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{id:4,name:"Nightjar",species:"Caprimulgus europaeus",description:"Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.",image:"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{id:5,name:"Cuckoo",species:"Cuculus canorus",description:"The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.",image:"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{id:6,name:"Tit",species:"Parus major",description:"More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.",image:"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{id:1,name:"Sparrow",species:"Passer domesticus",description:"Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.",image:"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{id:2,name:"Rook",species:"Corvus frugilegus",description:"Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.",image:"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{id:3,name:"Jackdaw",species:"Coloeus monedula",description:"The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird's love for shiny and bright things.",image:"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{id:4,name:"Songthrush",species:"Turdus philomelos",description:"Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.",image:"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{id:5,name:"Magpie",species:"Pica pica",description:"Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.",image:"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{id:6,name:"Jay",species:"Garrulus glandarius",description:"When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.",image:"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{id:1,name:"Finch",species:"Fringilla coelebs",description:"There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.",image:"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{id:2,name:"Crossbill",species:"Loxia curvirostra",description:"Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.",image:"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{id:3,name:"Turtledove",species:"Streptopelia turtur",description:"Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.",image:"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{id:4,name:"Woodpecker",species:"Dendrocopos major",description:"The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird's beak. In good weather, the shot can be heard within a radius of 1.5 km.",image:"https://live.staticflickr.com/65535/49339376578_e933426455.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{id:5,name:"Hoopoe",species:"Upupa epops",description:"Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.",image:"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{id:6,name:"Swift",species:"Apus apus",description:"Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.",image:"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{id:1,name:"Lark",species:"Alauda arvensis",description:"Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.",image:"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{id:2,name:"Nightingale",species:"Luscinia luscinia",description:"Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.",image:"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{id:3,name:"Starling",species:"Sturnus vulgaris",description:"Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.",image:"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{id:4,name:"Oriole",species:"Oriolus oriolus",description:"The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.",image:"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{id:5,name:"Waxwing",species:"Bombycilla garrulus",description:"The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.",image:"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{id:6,name:"Goldfinch",species:"Carduelis carduelis",description:"Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.",image:"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{id:1,name:"Eagle",species:"Aquila nipalensis",description:"In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters",image:"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{id:2,name:"Kite",species:"Milvus migrans",description:"Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.",image:"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{id:3,name:"Harrier",species:"Circus cyaneus",description:"Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.",image:"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{id:4,name:"Falcon",species:"Falco peregrinus",description:"The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.",image:"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{id:5,name:"Hawk",species:"Accipiter gentilis",description:"All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.",image:"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{id:6,name:"Eagle owl",species:"Bubo bubo",description:"The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.",image:"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{id:1,name:"Albatross",species:"Diomedea exulans",description:"Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.",image:"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{id:2,name:"Gannet",species:"Sula nebouxii",description:"A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.",image:"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{id:3,name:"Petrel",species:"Puffinus griseus",description:"The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.",image:"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{id:4,name:"Pelican",species:"Pelecanus",description:"Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.",image:"https://live.staticflickr.com/4534/26582090549_15a1b33e3c.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{id:5,name:"Penguin",species:"Aptenodytes forsteri",description:"The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",image:"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{id:6,name:"Seagull",species:"Larus argentatus",description:"Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.",image:"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]],y=document.querySelector(".start"),M=document.querySelector(".game"),L=document.querySelector(".results");M.style.display="none",L.style.display="none";var h,p,j=document.querySelector(".logo"),I=document.createElement("img");h=I,p=n,j.append(h),h.className="logo__img",h.src=p,document.querySelector(".start__biglogo__img").src=o;var m=document.querySelector(".start-page-button"),N=document.querySelector(".new-game-button"),S=document.querySelector(".game__center__continue__button");S.style.display="none";var T=document.querySelector(".results-button"),w=document.querySelector(".start-page-button-ham"),f=document.querySelector(".new-game-button-ham"),D=document.querySelector(".results-button-ham"),b=document.querySelector(".game__left__screen"),x=document.querySelectorAll(".game__top__group"),C=document.querySelector(".game__right"),A=document.querySelector(".game__right__info__name"),k=document.querySelector(".game__right__info__species"),_=document.querySelector(".game__right__info__description"),z=document.querySelector(".bird-image"),v=document.querySelector(".results__total__block__text"),E=document.querySelector(".results__total__block__score"),O=document.querySelector(".results__total__button");document.querySelector(".footer__logo").src=r;var Y=new Audio(u),U=new Audio(l),G=new Audio(d),X=0,Q=document.querySelector(".menu__item__score");Q.innerHTML="Score: ".concat(X);var P=document.querySelector(".game__center__score__text"),Z=0,J=function(e){var t=6,i=g[e],n=i[Math.floor(Math.random()*i.length)];s(n.audio),P.innerHTML="Round score: 6",0!=e&&x[e-1].classList.remove("game__top__group-active"),x[e].classList.add("game__top__group-active");var r=document.querySelectorAll(".game-button");r.forEach((function(e){e.classList.contains("game-button-win")&&e.classList.remove("game-button-win"),e.classList.contains("game-button-lost")&&e.classList.remove("game-button-lost")})),r.forEach((function(e,r,c){e.setAttribute("value",i[r].name),setTimeout((function(){e.addEventListener("click",(function(){P.innerHTML="Round score: ".concat(t),A.innerHTML=i[r].name,k.innerHTML=i[r].species,_.innerHTML=i[r].description,z.style.display="",z.src=i[r].image,a(i[r].audio),e.value===n.name?(C.style.background="green",b.style.display="",b.src=i[r].image,I.src=o,e.classList.add("game-button-win"),Y.play(),X+=t,Q.innerHTML="Score: ".concat(X),S.style.display="",t=0,s(u)):(e.classList.add("game-button-lost"),U.play(),t>0&&t--,C.style.background="red")}))}),500)}))};function H(){a(""),I.src=n,b.src=c,C.style.background="grey",A.innerHTML="What bird is it?",k.innerHTML="***",_.innerHTML="",z.src=c,S.style.display="none",x.forEach((function(e){return e.classList.remove("game__top__group-active")}))}m.addEventListener("click",(function(){G.pause(),y.style.display="",M.style.display="none",L.style.display="none"})),w.addEventListener("click",(function(){G.pause(),y.style.display="",M.style.display="none",L.style.display="none"})),N.addEventListener("click",(function(){G.pause(),H(),Z=0,X=0,Q.innerHTML="Score: ".concat(X),y.style.display="",y.style.display="none",M.style.display="",L.style.display="none",J(Z)})),f.addEventListener("click",(function(){G.pause(),H(),Z=0,X=0,Q.innerHTML="Score: ".concat(X),y.style.display="",y.style.display="none",M.style.display="",L.style.display="none",J(Z)})),S.addEventListener("click",(function(){Z<5?(Z++,H(),J(Z)):(H(),v.innerHTML="Congratulations, champ!",E.innerHTML="Your score is ".concat(X," / 36"),O.style.display="",Y.play(),y.style.display="none",M.style.display="none",L.style.display="")})),T.addEventListener("click",(function(){G.play(),y.style.display="none",M.style.display="none",L.style.display="",X||(O.style.display="none"),36===X&&(O.style.display="none")})),D.addEventListener("click",(function(){G.play(),y.style.display="none",M.style.display="none",L.style.display="",X||(O.style.display="none"),36===X&&(O.style.display="none")})),O.addEventListener("click",(function(){H(),Z=0,X=0,Q.innerHTML="Score: ".concat(X),y.style.display="none",M.style.display="",L.style.display="none",J(Z)})),console.log(["\nМаксимальный балл за задание: 270 баллов\n\nВёрстка, дизайн, UI всех трёх страниц приложения +60\n\nСтартовая страница приложения (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +20\nСтраница викторины (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +30\nСтраница с результатами (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +10\n\nАудиоплеер +30\n(можно выбрать только один из трёх пунктов)\n\nстандартный HTML5 +10\nкастомный, функционал полностью такой же, как в демо приложения, могут быть небольшие отличия в оформлении, например, может отличаться по цвету: +20\nу кастомного аудиоплеера из предыдущего пункта есть регулятор громкости звука +30\nВерхняя панель страницы викторины +20\n\nправильное отображение счета игры +10\nтекущий вопрос выделяется стилем +10\nБлок с вопросом +20\n\nподстановка дефолтного изображения и замена названия птицы на символы (***), пока игрок не выберет правильный ответ +10\nпри выборе правильного ответа в блоке с вопросом отображается изображение и название загаданной птицы +10\nБлок с вариантами ответов (названия птиц) +60\n\nцветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы: +10\nзвуковая индикация правильного/неправильного ответа: +30\nпри выборе правильного или неправильного ответа издаются разные звуковые сигналы: +10\nпри выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться: +10\nпри выборе правильно ответа проигрывание аудиоплеера должно остановиться: +10\nпри клике по названию птицы в блоке с описанием птицы отображается информацию о ней: +10\nесли правильный ответ уже дан, возможность просматривать описания птиц при клике по вариантам ответов остаётся, цвет индикаторов при этом не изменяется: +10\nБлок с описанием птицы: +30\n\nпока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал +10\nпри клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней +20\nИнформация о птице включает:\nизображение\nназвание (на русском и на латыни)\nаудиоплеер с записью голоса\nдополнительное описание птицы.\nКнопка перехода к следующему вопросу +30\n\nпока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет +10\nпосле правильного ответа на последний вопрос игрок переходит к странице с результатами викторины +10\nстраница с результатами содержит количество набранных баллов и кнопку с предложением сыграть ещё раз (или уведомление об окончании игры, если набрано максимальное количество баллов) +10\nExtra scope +20\nМожно выбрать предложенные варианты или придумать свои, аналогичные им по сложности\n\nлокализация приложения на два языка, выбранный язык хранится в local storage и сохраняется при перезагрузке +10\nсоздание галереи всех птиц приложения c информацией о них (фото, аудио, название, описание) +10"])},622:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDU1Mi44IDIwNS4zIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9LnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyl9LnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyl9LnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyl9LnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0NXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0Niwuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q4LC5zdDl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKX0uc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjx0aXRsZT5yc19zY2hvb2xfanM8L3RpdGxlPjxwYXRoIGQ9Ik0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6Ii8+PHBhdGggZD0iTTEzMyAxNjcuMmwyNC4yIDcuM2MtMS4zIDYuMS00IDExLjktNy43IDE3LTMuNCA0LjUtNy45IDgtMTMgMTAuMy01LjIgMi4zLTExLjggMy41LTE5LjggMy41LTkuNyAwLTE3LjctMS40LTIzLjgtNC4yLTYuMi0yLjgtMTEuNS03LjgtMTYtMTQuOS00LjUtNy4xLTYuNy0xNi4yLTYuNy0yNy4zIDAtMTQuOCAzLjktMjYuMiAxMS44LTM0LjFzMTktMTEuOSAzMy40LTExLjljMTEuMyAwIDIwLjEgMi4zIDI2LjYgNi44IDYuNCA0LjYgMTEuMiAxMS42IDE0LjQgMjFsLTI0LjQgNS40Yy0uNi0yLjEtMS41LTQuMi0yLjctNi0xLjUtMi4xLTMuNC0zLjctNS43LTQuOS0yLjMtMS4yLTQuOS0xLjctNy41LTEuNy02LjMgMC0xMS4xIDIuNS0xNC40IDcuNi0yLjUgMy43LTMuOCA5LjYtMy44IDE3LjYgMCA5LjkgMS41IDE2LjcgNC41IDIwLjQgMyAzLjcgNy4yIDUuNSAxMi43IDUuNSA1LjMgMCA5LjMtMS41IDEyLTQuNCAyLjctMy4xIDQuNy03LjQgNS45LTEzem01Ni41LTUyLjhoMjcuNnYzMS4zaDMwLjJ2LTMxLjNoMjcuOHY4OS40aC0yNy44di0zNi4yaC0zMC4ydjM2LjJoLTI3LjZ2LTg5LjR6Ii8+PHBhdGggZD0iTTI3MS4zIDE1OS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjMgNCAzNC40IDEyUzM2NCAxNDQgMzY0IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOHM0LjktMTAuOCA0LjktMjAuOGMwLTguNC0xLjctMTQuNi01LjEtMTguNC0zLjQtMy45LTgtNS44LTEzLjgtNS44LTUuMS0uMi0xMCAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6bTkzLjQtLjFjMC0xNC42IDQuMS0yNiAxMi4yLTM0LjEgOC4xLTguMSAxOS41LTEyLjIgMzQtMTIuMiAxNC45IDAgMjYuNCA0IDM0LjQgMTJTNDg1IDE0NCA0ODUgMTU4LjRjMCAxMC41LTEuOCAxOS01LjMgMjUuNy0zLjQgNi42LTguNyAxMi0xNS4yIDE1LjYtNi43IDMuNy0xNSA1LjYtMjQuOSA1LjYtMTAuMSAwLTE4LjQtMS42LTI1LTQuOC02LjgtMy40LTEyLjQtOC43LTE2LjEtMTUuMi00LjEtNy02LjItMTUuNy02LjItMjYuMnptMjcuNi4xYzAgOSAxLjcgMTUuNSA1IDE5LjUgMy4zIDMuOSA3LjkgNS45IDEzLjcgNS45IDUuOSAwIDEwLjUtMS45IDEzLjgtNS44IDMuMy0zLjkgNC45LTEwLjggNC45LTIwLjggMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAuMSAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6Ii8+PHBhdGggZD0iTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHoiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDAiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48ZGVmcz48ZWxsaXBzZSBpZD0iU1ZHSURfMV8iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDEiPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDAiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjxnIGlkPSJMYXllcl8yXzFfIj48ZGVmcz48cGF0aCBpZD0iU1ZHSURfM18iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGlkPSJMYXllcl8xLTIiIGNsYXNzPSJzdDIiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0MCIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjxkZWZzPjxlbGxpcHNlIGlkPSJTVkdJRF81XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPjx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9InN0MyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF83XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF83XyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDQiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0NSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZz48cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpIiBjbGFzcz0ic3Q2IiBkPSJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6Ii8+PGVsbGlwc2UgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjbGFzcz0ic3Q3IiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF85XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzEwXyI+PHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz0ic3Q4Ij48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDUiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48L2c+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0OSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDciIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDciIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48cGF0aCBkPSJNMzkyLjQgNjEuM2wxMC03IDEyLjMgMTcuNWMyLjEgMi44IDMuNyA1LjggNC45IDkuMS43IDIuNS41IDUuMi0uNSA3LjYtMS4zIDMtMy40IDUuNS02LjIgNy4zLTMuMyAyLjMtNi4xIDMuNi04LjUgNC0yLjMuNC00LjcgMC02LjktMS0yLjQtMS4yLTQuNS0yLjktNi4xLTUuMWw4LjYtOGMuNyAxLjEgMS42IDIuMSAyLjYgMi45LjcuNSAxLjUuOCAyLjQuOC43IDAgMS40LS4zIDEuOS0uNyAxLS42IDEuNy0xLjggMS42LTMtLjMtMS43LTEtMy40LTIuMS00LjdsLTE0LTE5Ljd6bTMwIDExLjFsOS4xLTcuMmMxIDEuMiAyLjMgMi4xIDMuNyAyLjYgMiAuNiA0LjEuMiA1LjgtMS4xIDEuMi0uOCAyLjItMS45IDIuNi0zLjMuNi0xLjgtLjQtMy44LTIuMi00LjQtLjMtLjEtLjYtLjItLjktLjItMS4yLS4xLTMuMy40LTYuNCAxLjctNS4xIDIuMS05LjEgMi45LTEyLjEgMi42LTIuOS0uMy01LjYtMS44LTcuMi00LjMtMS4yLTEuNy0xLjgtMy43LTEuOS01LjcgMC0yLjMuNi00LjYgMS45LTYuNSAxLjktMi43IDQuMi01IDctNi44IDQuMi0yLjkgNy45LTQuMyAxMS4xLTQuMyAzLjIgMCA2LjIgMS41IDkgNC42bC05IDcuMWMtMS44LTIuMy01LjItMi44LTcuNS0xbC0uMy4zYy0xIC42LTEuNyAxLjUtMi4xIDIuNi0uMy44LS4xIDEuNy40IDIuNC40LjUgMSAuOSAxLjcuOS44LjEgMi4yLS4zIDQuMi0xLjIgNS0yLjEgOC44LTMuMyAxMS40LTMuNyAyLjItLjQgNC41LS4yIDYuNi43IDEuOS44IDMuNSAyLjIgNC42IDMuOSAxLjQgMiAyLjIgNC40IDIuMyA2LjkuMSAyLjYtLjYgNS4xLTIgNy4zLTEuOCAyLjctNC4xIDUtNi44IDYuOC01LjUgMy44LTEwIDUuNC0xMy42IDQuOC0zLjktLjYtNy4xLTIuNi05LjQtNS41eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="},392:(e,t,i)=>{e.exports=i.p+"assets/img/bird.jpg"},702:(e,t,i)=>{e.exports=i.p+"assets/img/logo.png"},921:(e,t,i)=>{e.exports=i.p+"assets/img/logo_bw.png"},932:(e,t,i)=>{e.exports=i.p+"456863e42fe5630c596a.mp3"},18:(e,t,i)=>{e.exports=i.p+"4b652d3a3c236c583028.mp3"},605:(e,t,i)=>{e.exports=i.p+"b29b5f8daa0d76690225.mp3"}},e=>{e(e.s=75)}]);