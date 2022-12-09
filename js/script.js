
function getNewElement (content, classes){
   const newElement = document.createElement('div');
   newElement.append(content);
   newElement.classList.add(classes);
   return newElement;
}

function addNewClass (element, classes){
   const myEl = element.classList.add(classes);
   return myEl;
}

function removeClass (element, classes){
   const myEl = element.classList.remove(classes);
   return myEl;
}

function getImgElement(img){
    const newImgElement = document.createElement('img');
    newImgElement.setAttribute('src', './' + img);
    return newImgElement;
}

const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

const boxContainer = document.getElementById('carousel-box');
const nextButton = document.querySelector('.button.next');
const previousButton = document.querySelector('.button.previous');



// images.forEach(element, =>{
//    nextButton.addEventListener('click', function(){
//       boxContainer.append(getNewElement(getImgElement(element.image), 'my_carousel-item'));
//    })
     
// })

images.forEach((element, index) => {
   let currentIndex = 0;
  // console.log(`${element.image}:${index}`)
   const myDivEl = document.createElement('div');
   myDivEl.classList.add('my_carousel-item');
   
   const newImg = document.createElement('img');
   newImg.src = `./${element.image}`;
   myDivEl.append(newImg);
   boxContainer.append(myDivEl);
   
   
   nextButton.addEventListener('click', function(){
      if(index == currentIndex){
         myDivEl.classList.add('active');
         currentIndex = currentIndex - 4;
      }else if(index !== currentIndex){
         myDivEl.classList.remove('active');
         currentIndex++;
      }
      
      console.log(currentIndex);
   })
   
   previousButton.addEventListener('click', function(){
      if(index == currentIndex){
         myDivEl.classList.remove('active');
         currentIndex++;
      }else if(index !== currentIndex){
         myDivEl.classList.add('active');
         currentIndex = currentIndex - 4;
      }
      
      console.log(currentIndex);
   })
   
})



// //CREO NUOVO DIV
// const myDivEl = document.createElement('div');
// myDivEl.classList.add('my_carousel-item');

// //AGGIUNGO IMMAGGINE AL DIV
// myDivEl.append(getImgElement(images[currentImage].image));
// //STAMPO NEL DOM IL DIV CON L'IMMAGINE
// boxContainer.append(myDivEl);


// nextButton.addEventListener('click', function(){
//    //AGGIUNGO 1 AL COUNTER 
//    currentImage++
   
//    if(currentImage == 5){
//       currentImage = 0;
//    }
//    console.log(images[currentImage].image);
// })



