/*
**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.




2- popolare le options della select della milestone 3 dinamicamente.
*/

const cardContainer =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const lettersNum =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const outputContainer = document.getElementById('_conatiner');
const selectArea =document.querySelector('.sd-select');


const getFantasyColor =(array) =>{ 
  let newColor ='#';

  array.forEach(element => { if(newColor.length <= 6) {
    const estract = randomNum( 0 , lettersNum.length-1);
    newColor += lettersNum[estract];
    }
  })
  return newColor;
}

//funzione stampa
const cardPrinter = (container) =>{ 

  outputContainer.innerHTML = '';
  container.forEach(card => { getCard(card) })
}

//funzione crea card
const getCard = (object) => { 
  
  const {name, prefix, type}= object;
  
  // console.log(getFantasyColor(lettersNum));
  outputContainer.innerHTML +=
  `
    <div class="col my-3">
      <div class="card d-flex flex-column align-items-center py-4">
        <div class="content d-flex flex-column align-items-center">
          <i id= "${type}" class="${prefix}solid ${prefix}${name} mb-2" style="color: ${getFantasyColor(lettersNum)};"></i>
          <p class="mb-0">${name}</p>
        </div>
      </div>
    </div>
  `; 
}

cardPrinter(cardContainer);

//funzione che raccoglie info utente
  selectArea.addEventListener('change', function(){
    
    let container;
    const color = this.value;
    (color === 'all')? container = cardContainer: false;
    (color === 'blue')? container = cardContainer.filter((card)=> card.type === 'user'): false;
    (color === 'orange')? container = cardContainer.filter((card)=> card.type === 'animal'): false;
    (color === 'green')? container = cardContainer.filter((card)=> card.type === 'vegetable'): false;
    
    cardPrinter(container);
  })




  function randomNum( min , max ){
    return Math.floor(Math.random() * (max - min +1) + min);
  }

 



  







