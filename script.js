const exitPopup = document.getElementById("exit-popup");  // exit Pop-up
const stayButton = document.getElementById("stay-button");
const leaveButton = document.getElementById("leave-button");

const buttonHTML = document.getElementsByTagName('button')[0];  // - Le [0] sert à récupérer la première image trouvée dans le DOM.
const imgTitle = document.getElementById("imgtitle");
const imgTitleWhitoutClick = document.getElementsByTagName('h1')[1];
const myImages = document.getElementsByTagName('img');
const menuHTML = document.getElementsByTagName('p');
const imagesDiv = document.getElementsByClassName("images")[0];
const tabs = document.getElementsByTagName('li'); // navBar

const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const imgAccueil = ["plat0"];
const imgMenu = ["plat1","plat2","plat3","plat4"];
const imgSalle = ["salle1","salle2","salle3","salle4"];

menuHTML[0].style.fontWeight = "bold";

const displayPics = (pic) => { for (let i = 0; i < pic.length ; i++){ myImages[i].src = './assets/img/'+pic[i]+'.jpg';}}

const hiddeGrid = () => {
  imagesDiv.style.display = "inline";
  for (let i = 1 ; i < 4 ; i++) { myImages[i].style.display = "none";} // hidde 3 others img
}

const unHiddeGrid = () => {
  imagesDiv.style.display = "grid";
  for (let i = 1 ; i < 4 ; i++) { myImages[i].style.display = "inline";} // display 3 others img
}

const noneOrInlineElements = (paramBut, paramTitle1, paramTitle2) => {
  buttonHTML.style.display = paramBut;
  imgTitle.style.display = paramTitle1;
  imgTitleWhitoutClick.style.display = paramTitle2;
}

const nullMenu = () => {
  for (let i = 0 ; i < 4 ; i++) { menuHTML[i].innerHTML = null;}
}


// MENU
const getRandom = (data) => data[Math.floor(Math.random() * data.length)];
const menuDisplay = () => {
  menuHTML[0].innerHTML = "<u>Menu:</u>";
  menuHTML[1].innerHTML = `${getRandom(mainCourses)} ${getRandom(techniques)},`;
  menuHTML[2].innerHTML = `avec ${getRandom(sides)}`;
  menuHTML[3].innerHTML = `${getRandom(seasonings)}`;
}
const buttonMenu = document.getElementsByTagName('button')[0].addEventListener("click", menuDisplay);


const home = () => {
  noneOrInlineElements("none","none","inline");
  imgTitleWhitoutClick.innerHTML = "Produits Frais et Bio";
  displayPics(imgAccueil);
  hiddeGrid();
  nullMenu();
}
home();

const menu = () => {
  noneOrInlineElements("inline","inline","none");
  buttonHTML.innerHTML = "Marre de ce menu ? Changez-le !";
  imgTitle.innerHTML = "Les Plats du Jour";
  imgTitle.addEventListener("click", changeImage);
  hiddeGrid();
  displayPics(imgMenu);
}

const pics = () => {
  noneOrInlineElements("none","none","inline");
  buttonHTML.innerHTML = "Marre de ce menu ? Changez-le !";
  imgTitleWhitoutClick.innerHTML = "Nos Salles Climatisées";
  nullMenu();
  unHiddeGrid();
  displayPics(imgSalle);
}

// NavBar
tabs[0].addEventListener('click', home);
tabs[1].addEventListener('click', menu);
tabs[2].addEventListener('click', pics);

// Change Images
let imgX = 0;
const changeImage = () => {
  imgX++;
  if (imgX == 4) { imgX = 0; }
  myImages[0].src = './assets/img/'+imgMenu[imgX]+'.jpg';
}

//****** EXIT POP-UP ******//
// Afficher la pop-up lorsque la souris quitte la fenêtre
window.onmouseout = function(e) {if (e.clientY < 0) {exitPopup.style.display = "block";}}
// Cacher la pop-up lorsque l'utilisateur clique sur "Rester"
stayButton.onclick = function() { exitPopup.style.display = "none";}
// Cacher pop-up et Rediriger vers Home lorsqu'il clique sur "Quitter"
leaveButton.onclick = function() {exitPopup.style.display = "none"; home();}