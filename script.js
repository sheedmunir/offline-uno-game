const colors = ['red', 'green', 'blue', 'yellow'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','skip', 'reverse', 'draw two'];
const wildCards = ['wild', 'wild draw four'];
const deck = [];
function createDeck() {
    for (let color of colors) {
        for (let value of values) {
            if (value === '0') {
                deck.push({ color, value });
            }
            else{
            deck.push({ color, value });
            deck.push({ color, value });
            }   
        }
        
    }
    for (let wildCard of wildCards) {
            deck.push({ color: null, value: wildCard });
            deck.push({ color: null, value: wildCard });
            deck.push({ color: null, value: wildCard });
            deck.push({ color: null, value: wildCard });

        }
}

function drawRandomCards(num) {
    const hand = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const card = deck.splice(randomIndex, 1)[0];
        hand.push(card);
    }
    return hand;
}



//constanje

const handContainer = document.getElementById('mycards');
const shuffleButton = document.getElementById('shuffle-button')








function renderHand() {
    
    handContainer.innerHTML = '';

    for (let card of myHand) {
        const cardButton = document.createElement('button');
        cardButton.textContent = card.color ? `${card.color} ${card.value}` : card.value;
        cardButton.className = 'card-button';
        handContainer.appendChild(cardButton);
        cardButton.dataset.color = card.color || 'black';
        
        cardButton.addEventListener('click',()=>{

            
    if(currentDiscard.color === card.color || currentDiscard.value === card.value || currentDiscard.color === null  || card.color === null){
    const discard = document.getElementById('discard');
    discard.textContent = card.color ? `${card.color} ${card.value}` : card.value;
    discard.dataset.color = card.color;
    const inex = myHand.indexOf(card);
    played.push(card)
    myHand.splice(inex,1);
    renderHand();
    currentDiscard = card;
    showMessage('success');
    


    }

    else{
        showMessage('fail');
    }
        });

    }
    
}

createDeck();
let tempo = drawRandomCards(1);

let currentDiscard = {
    color:tempo[0].color,
    value:tempo[0].value
}

function renderDiscard() {
const discard = document.getElementById('discard');
discard.textContent = currentDiscard.color ? `${currentDiscard.color} ${currentDiscard.value}` : currentDiscard.value;
discard.dataset.color = currentDiscard.color; 

}
renderDiscard();
const myHand = drawRandomCards(7);
renderHand();

function createPlayer(name) {
    const playersbox =document.getElementById('players');
    const player=document.createElement('div');
    player.className = 'player';
    player.textContent=name;
    playersbox.appendChild(player);
}




const players=['ahmed','sheed','mohd','rashid','ally','ali','sara','maria','john','doe'];

players.forEach((element)=>{
    createPlayer(element);
})


const draw = document.getElementById('draw');

draw.addEventListener('click',()=>{

    if(deck.length == 0){
        showMessage("no card in deck .please shuffle!")
        shuffleButton.style.visibility = 'visible';
    }
    else{
    const cardButton = document.createElement('button');
    showMessage('succesfully drawn card and gamiung');
    let deckdraw = drawRandomCards(1);
    let cl = deckdraw[0].color 
    let vl = deckdraw[0].value 
    let drawfinal ={
        color:cl,
        value:vl
    }
    cardButton.textContent = cl ? `${cl} ${vl}` : vl;
    cardButton.className = 'card-button';
    handContainer.appendChild(cardButton);
    cardButton.dataset.color = cl || 'black';  
    myHand.push(drawfinal);
    renderHand();
        }

    })

    let messageTimer;

    function showMessage(text) {
        const message = document.getElementById('message');
        message.textContent=text;
        clearTimeout(messageTimer);
        messageTimer = setTimeout( () =>{message.textContent=''},2000);

        }

        const played = [];

        function shuffle() {
            played.pop();
            played.forEach((key)=>{
                deck.push(key);
            })
           
            played.length = 0 ;
            shuffleButton.style.visibility = 'hidden';
        }
    
    shuffleButton.addEventListener('click',shuffle)    

