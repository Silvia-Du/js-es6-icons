/*
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
const cardCollection =[];


//funzione stampa
const cardPrinter = (container) =>{
  outputContainer.innerHTML = '';
  
  container.forEach(card => {

    getCard(card);
    
  })
}



//funzione crea card
const getCard = (object) => {

  const {text, color}= object;

  const cardElement =`
    <div class="col my-3">
      <div class="card d-flex flex-column align-items-center py-4">
        <div class="content d-flex flex-column align-items-center">
          <i id= "${color}" class="fa-solid fa-${text} mb-2"></i>
          <p class="mb-0">${text}</p>
        </div>
      </div>
    </div>
  `;
  cardCollection.push(cardElement);
  outputContainer.innerHTML += cardElement;

}

cardPrinter(cardContainer);



//funzione che raccoglie info utente

  selectArea.addEventListener('change', function(){
    let color;
    let container;
    color = this.value;

    if(color === 'blue'){
      container = cardContainer.filter((card)=> card.color === 'blue');
    }else if(color ==='yellow'){
      container = cardContainer.filter((card)=> card.color === 'yellow');
    }else if(color ==='violet'){
      container = cardContainer.filter((card)=> card.color === 'violet');
    }else{
      container = cardContainer;
    }

    cardPrinter(container);
  })


  function randomNum( min , max ){
    return Math.floor(Math.random() * (max - min +1) + min);
  }

  // const lettersNumbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 const lettersNum =['0', '1', '2', '3', 'A', 'B', 'C', 'D', 'E', 'F'];

for( let i =0; i< lettersNum.length; i++ ){

  const estract = randomNum( 0 , lettersNum.length);
  console.log('elemento delarray--->',lettersNum[estract], 'num random estratto',estract);

}

// 6 elementi random da tutto l'array, 

  // function getFantasyColor(){

  // }


    //generare una stringa di 7 elementi 
  //   il primo deve essere sempre #
  //generare una stringa di 6 elementi 

  //   gli altri sei, per ogni posizione possono essere o un numero o una lettera.
  //   ogni posizione deve essere occupata da un elemento randomico casuale, non univoco nella stringa.
  // = devo estrarre 6 elementi a caso(da un contenitore immagino) e metterli insieme in una stringa...pusharli in un nuovo luogo..un array?



