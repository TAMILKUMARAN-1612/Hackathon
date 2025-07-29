const griddisplay=document.querySelector('#grid');
const resultdisplay=document.querySelector('#score')
const cards=[ {name:"java",
               img:"java.jpg"},
              {name:"pyhon",
               img:"python.jpg"},
              {name:"Html",
                img:"Html.jpg"},
              {name:"Css",
                img:"Css.jpg"},
              {name:"js",
                img:"Js.jpg"},
                 {name:"java",
               img:"java.jpg"},
              {name:"pyhon",
               img:"python.jpg"},
              {name:"Html",
                img:"Html.jpg"},
              {name:"Css",
                img:"Css.jpg"},
              {name:"js",
                img:"Js.jpg"},
                ]
       cards.sort(()=>0.5-Math.random())
     generateBoard();
   function generateBoard()
   {
       for(let i=0;i<cards.length;i++)
       {
           const Card=document.createElement('img');
           Card.setAttribute('src','bg.jpg');
           Card.setAttribute('data-id',i);
           Card.addEventListener('click',flipCard);
           griddisplay.appendChild(Card);
           
       }
       console.log(card);
   }
  cardChoosen=[];
  cardid=[];
  
  function flipCard()
  {
      const card_Id=this.getAttribute("data-id");
      this.setAttribute('src',card[data-id].img);
      cardid.push(card_Id);
      cardChoosen.push(card[card_Id].name);
     if(cardChoosen.length==2)
     {
         setTimeout(checkMatch,500);
     }
  }
  
  cardWon=[];
  
  function checkMatch()
  {
      const cards=document.querySelectorAll('img');
      if(cardChoose[0]==cardChoosen[1])
      {
          alert("You Found A Match");
          cards[cardChoosen[0]].setAttribute('src',done.png,'img');
          cards[cardChoosen[1]].setAttribute('src',done.png,'img');
          cards[cardChoosen[0]].removeEventListener('click',flipcard);
          cards[cardChoosen[1]].removeEventListener('click',flipcard);
      }
   else{
       card[cardChoosen[0]].setAttribute('src',bg.jpg,'img');
card[cardChoosen[1]].setAttribute('src',bg.jpg,'img');
   }
   cardChoosen=[];
  cardid=[];
  
  if(cardWon.length==card.length/2)
  {
      resultdisplay.innerHTML="congrlations you won"
  }
  }
  