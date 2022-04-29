/*
**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

//1
// creare array con oggetto card con icona e testo
//creare funzione crea card
//creare funzione stampa card



const cardContainer =[
  {
    text: 'cat',
  },
  {
    text: 'crow',
  },
  {
    text: 'dog',
  },
  {
    text: 'dragon',
  },
  {
    text: 'horse',
  },
  {
    text: 'hippo',
  },
  {
    text: 'fish',
  },
  {
    text: 'carrot',
  },
  {
    text: 'apple-whole',
  },
  {
    text: 'lemon',
  },
  {
    text: 'pepper-hot',
  },
  {
    text: 'user-astronaut',
  },
  {
    text: 'user-graduate',
  },
  {
    text: 'user-ninja',
  },
  {
    text: 'user-secret',
  }
  
]


const outputContainer = document.getElementById('_conatiner');

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

cardPrinter();
