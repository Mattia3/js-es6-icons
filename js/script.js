const allIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//Richiamo la classe "row"
const rowIcon = document.querySelector('.row');

//Creo una funzione dove vado a ciclare e ad inserire nell'html le icone e i testi sotto le icone
function iconInsert (array){
  rowIcon.innerHTML = "";
for (let i = 0; i < array.length; i++){
  const singleIcon = array[i];
  const {name, type} = singleIcon;
  let icon = `<div class="col p-0 icon-container ${type}">
                <i class="fas fa-${name}"></i>
                <h5 class="title-icon">${name}</h5>
              </div>`;
  rowIcon.innerHTML += icon
}
}
//Richiamo la funzione dell'arrey generale
iconInsert(allIcon)

//Creo un array dove vado a inserire la chiave(type) con il valore user
const user = []
//Creo un array dove vado a inserire la chiave(type) con il valore vegetable
const vegetable = []
//Creo un array dove vado a inserire la chiave(type) con il valore animal
const animals = []

//Creo una funzione e un ciclo dove vado a pushare le icone in base al loro "type"(animal,user,vegetable)
function allArray(){
  let myTypeAnimal = {
    type: 'animal'
  }
  let myTypeVegetable = {
    type: 'vegetable'
  }
  let myTypeUser = {
    type: 'user'
  }
  
  for (let i = 0; i < allIcon.length; i++){
    const sigleAnimals = allIcon[i];
    const {type} = sigleAnimals;
    if(type === myTypeAnimal.type){
      animals.push(sigleAnimals)
    }
    if(type === myTypeVegetable.type){
      vegetable.push(sigleAnimals)
    }
    if(type === myTypeUser.type){
      user.push(sigleAnimals)
    }
  }

}

//Stampo sulla console i miei Array appena creati(animal,vegetable,user)
console.log("Array Animali", animals)
console.log("Array Vegetali", vegetable)
console.log("Array User", user)

//Dichiaro la funzione
allArray()

//Richiamo l'ID della select
const selectAll = document.getElementById("select-all")

//Vado a selezionare le icone in base al loro valore(all,animal,vegetable,user)
selectAll.addEventListener("change", function(){

  if(selectAll.value === 'all'){
    iconInsert(allIcon)
  }
  if(selectAll.value === 'animal'){
    iconInsert(animals)
  }
  if(selectAll.value === 'vegetable'){
    iconInsert(vegetable)
  }
  if(selectAll.value === 'user'){
    iconInsert(user)
  }
})