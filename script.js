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

const outputContainer = document.getElementById('_conatiner');

/**
 * GEnera numero randomicamente da min a max
 * @param {num} min 
 * @param {num} max 
 * @returns 
 */
const randomNum = ((min, max)=>  Math.floor(Math.random() * (max - min +1) + min))

//funzione genera colore random
/**
 * prende come valore un array di strighe e restitusce una stringa colore esadecimale
 * @param {string} array 
 * @returns 
 */
const getFantasyColor =() =>{ 
  const lettersNum =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let newColor ='#';

  lettersNum.forEach(element => { if(newColor.length <= 6) {
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
          <i id= "${type}" class="${prefix}solid ${prefix}${name} mb-2" style="color: ${getFantasyColor()};"></i>
          <p class="mb-0">${name}</p>
        </div>
      </div>
    </div>
  `; 
}

cardPrinter(cardContainer);


//funzione che raccoglie info utente & restituisce un'array di elementi selezionati
document.querySelector('.sd-select').addEventListener('change', function(){
    
  let container;
  const select = this.value;
  (select === 'all')? container = cardContainer: false;
  (select === 'user')? container = cardContainer.filter((card)=> card.type === 'user'): false;
  (select === 'animal')? container = cardContainer.filter((card)=> card.type === 'animal'): false;
  (select === 'vegetable')? container = cardContainer.filter((card)=> card.type === 'vegetable'): false;
    
  cardPrinter(container);
})

const cardType = ['all'];
cardContainer.forEach((card)=>{ (cardType.includes(card.type))?'': cardType.push(card.type) })

cardType.forEach((card, i)=>{ 
	document.querySelector('select').innerHTML +=` <option value="${cardType[i]}" id="${cardType[i]}">${cardType[i]}</option>` 
})












  







