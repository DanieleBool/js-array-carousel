// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let imageA ="";
  
for(i = 0; i<items.length; i++) {
    imageA +=
     `
    <div class="item">
    <img src="${items[i]}" alt="${items[i]}">
    </div>
    `;
}
  
console.log(imageA);
  
// inseriamo gli elementi
const itemsCont = document.querySelector(".jumbo-cont");
itemsCont.innerHTML = imageA;
  
// rendere il primo attivo
const item = document.getElementsByClassName("item");
console.log(item[0]);
let activeItem = 0;
item[activeItem].classList.add("active");

const up = document.querySelector(".up");
const down = document.querySelector(".down");

// funzione con cui rimuovo l'active -> incremento di 1 il mio item -> aggiungo al prossimo l'active
// la lunghezza di 'items' è 5 quindi, dato che parto da 0 e non da 1, in queso if devo decrementare -1 per interrompere

// down.addEventListener("click", function(){
//     if(activeItem < items.length - 1){
//         item[activeItem].classList.remove("active");
//         // oppure aggiungere activeItem++ sopra in quadra
//         activeItem++;
//         item[activeItem].classList.add("active");
//     }
// });




// soluzione con LOOP
down.addEventListener("click", function(){
    item[activeItem].classList.remove("active");    
    if(activeItem == items.length - 1){
        activeItem = 0;
    }else{
        activeItem++;    
    }
    item[activeItem].classList.add("active");   

});

// up.addEventListener("click", function(){
//     if(activeItem > 0){
//         // come sopra rimuovo l'active
//         item[activeItem].classList.remove("active");
//         // oppure aggiungere activeItem++ sopra in quadra
//         // decremento
//         activeItem--;
//         // aggiungo l'active all'elemento decrementato (diversamente da Stopra)
//         item[activeItem].classList.add("active");
//     }
// });

// soluzione con LOOP
up.addEventListener("click", function(){
    item[activeItem].classList.remove("active");
    if(activeItem == 0){
        activeItem = items.length -1;
    }else{
        activeItem--;    
    }
    item[activeItem].classList.add("active");   

});

// ARRAY 2







// let imagesAr = '';
// for (let i = 0; i < items.length; i++) {
//     imagesAr += 
//     `
//     <div class='itemdiv'>
//         <img src="${items[i]}" alt="${title[i]}">
//     </div>
//     `;
// }

// console.log(imagesAr);

// // inserisco gli elementi in pagina
// // document.querySelector(".jumbo-cont").innerHTML = imagesAr; alternativa
// const jumboC = document.querySelector(".jumbo-cont");
// jumboC.innerHTML += imagesAr;


// // rendo il primo elemento attivo
// const itemj = document.getElementsByClassName('.itemdiv');
// console.log(itemj[0]);//  il mio itemdiv può incrementare
// let activeItem = 0;
// itemj[activeItem].classList.add('active');
// let activeImg = 0;
// jumbImg[activeImg].classList.add('active');

// const upp = document.querySelector('.up');
// const downn = document.querySelector('.down');

// downn.addEventListener("click", function(){
//     jumbImg[activeImg].classList.remove('active');

// });
