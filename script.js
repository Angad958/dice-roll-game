'use strict';
let score0El=document.getElementById('score--0');
let score1El=document.getElementById('score--1');
score0El.textContent="0";
score1El.textContent="0";
let a=0, activeplayer=0, score=[0,0];
const dice=document.querySelector('.dice');
dice.classList.add('hidden');
const rolldice=document.querySelector('.btn--roll');
const holdscore=document.querySelector('.btn--hold');
const newgame=document.querySelector('.btn--new');
rolldice.addEventListener('click', function()
{
    const dicenumber=Math.trunc(Math.random()*6+1);
    
    
    dice.classList.remove('hidden');
    dice.src=`dice-${dicenumber}.png`;
    score[activeplayer]=score[activeplayer]+dicenumber;
    a=dicenumber+a;
    

    if(dicenumber!=1)
    {
        document.getElementById(`current--${activeplayer}`).textContent=a;
        
       
    }
    
    if(dicenumber==1)
    {
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        document.getElementById(`current--${activeplayer}`).textContent='0';
        document.getElementById(`score--${activeplayer}`).textContent='0';
        score[activeplayer]=0;
        a=0;
    
        activeplayer=activeplayer==0?1:0;
       
        
       
        document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
       }
    }

);

holdscore.addEventListener('click', function()
{
 
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    document.getElementById(`current--${activeplayer}`).textContent='0'
    activeplayer=activeplayer==0?1:0;
   
   a=0;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');

}
);

newgame.addEventListener('click',function()

{
    a=0;
     activeplayer=0;
      score=[0,0];
    document.querySelector('#score--0').textContent='0';
    document.querySelector('#score--1').textContent='0';
    
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`#current--0`).textContent='0';
    document.querySelector(`#current--1`).textContent='0';
    document.querySelector(`.player--0`).classList.add('player--active');
    dice.classList.add('hidden');



});