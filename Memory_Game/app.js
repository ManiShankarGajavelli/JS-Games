document.addEventListener('DOMContentLoaded',() =>{
    const cardsArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          },
          {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          }]
    cardsArray.sort(()=> 0.5-Math.random());
    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    var CardsSelected = [];
    var CardsSelectedId = [];
    var CardsWon = [];
    function createBoard() {
      for (let index = 0; index < cardsArray.length; index++) {
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',index);
        card.addEventListener('click',flipCard);
        grid.appendChild(card); 
      }
    }
    function flipCard() {
      var CardId = this.getAttribute('data-id');
      CardsSelected.push(cardsArray[CardId].name);
      CardsSelectedId.push(CardId);
      this.setAttribute('src', cardsArray[CardId].img);
      if(CardsSelectedId.length===2){
        setTimeout(checkForMatch,500)
      }
    }
    function checkForMatch() {
      var cards = document.querySelectorAll('img');
      var card1 = CardsSelectedId[0];
      var card2 = CardsSelectedId[1];
      if (card1==card2) {
        alert('you have selected same card!!!');
        cards[card1].setAttribute('src','images/blank.png');
        cards[card2].setAttribute('src','images/blank.png');
      } else if(CardsSelected[0]=== CardsSelected[1]){
        alert('you have selected the same images');
        cards[card1].setAttribute('src','images/white.png');
        cards[card2].setAttribute('src','images/white.png');
        cards[card1].removeEventListener('click',flipCard);
        cards[card2].removeEventListener('click',flipCard);
        CardsWon.push(CardsSelectedId);
      } else {
        alert('wrong card selected!!!');
        cards[card1].setAttribute('src','images/blank.png');
        cards[card2].setAttribute('src','images/blank.png');
      }

      CardsSelectedId = [];
      CardsSelected = [];
      result.innerHTML = CardsWon.length;
      if(CardsWon.length === cardsArray.length/2 ){
        result.innerHTML = 'YAY you have completed the game.' 
      }



    }





    createBoard();
          





        });