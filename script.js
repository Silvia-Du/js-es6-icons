/*
//1
// creare array con oggetto card con icona e testo
//creare funzione crea card
//creare funzione stampa card

**Milestone 2**FATTO
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/





const cardContainer =[
  {
    text: 'cat',
    color: 'blue' 
  },
  {
    text: 'crow',
    color: 'blue'
  },
  {
    text: 'dog',
    color: 'blue'
  },
  {
    text: 'dragon',
    color: 'blue'
  },
  {
    text: 'horse',
    color: 'blue'
  },
  {
    text: 'hippo',
    color: 'blue'
  },
  {
    text: 'fish',
    color: 'blue'
  },
  {
    text: 'carrot',
    color: 'yellow'
  },
  {
    text: 'apple-whole',
    color: 'yellow'
  },
  {
    text: 'lemon',
    color: 'yellow'
  },
  {
    text: 'pepper-hot',
    color: 'yellow'
  },
  {
    text: 'user-astronaut',
    color: 'violet'
  },
  {
    text: 'user-graduate',
    color: 'violet'
  },
  {
    text: 'user-ninja',
    color: 'violet'
  },
  {
    text: 'user-secret',
    color: 'violet'
  }
  
]


const outputContainer = document.getElementById('_conatiner');
const selectArea =document.querySelector('.sd-select');


//funzione stampa
const cardPrinter = () =>{
  outputContainer.innerHTML = '';
  cardContainer.forEach(card => {
    getCard(card);
    

  })
}

//funzione crea card
const getCard = (object) => {

  const {text}= object;

  const cardElement =`
    <div class="col my-3">
      <div class="card d-flex flex-column align-items-center py-4">
        <div class="content d-flex flex-column align-items-center">
          <i class="fa-solid fa-${text} mb-2"></i>
          <p class="mb-0">${text}</p>
        </div>
      </div>
    </div>
  `;

  outputContainer.innerHTML += cardElement;
}

const animalCard = cardContainer.filter((card)=> card.color === 'blue');
console.log(animalCard, 'card animali');

const foodCard = cardContainer.filter((card)=> card.color === 'yellow');
console.log(foodCard, 'food card');

const userCard = cardContainer.filter((card)=> card.color === 'violet');
console.log(userCard, 'user card');

cardPrinter();




//funzione che raccoglie info utente
function selectTipeInput (container){

  selectArea.addEventListener('change', function(){
    console.log(this.value);
  
  })
  

}

selectTipeInput (cardContainer);
