const sortbtn=document.getElementById('sort');

let isBtn=false;

let isShow=false;

const load= async (isShow)=>{
  isShow=handleShowAll();

    const res= await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data= await res.json();
    const cards=data.data.tools;
    cardshow(cards,isShow)
    console.log(cards)
    // sorted(cards);
    // console.log(cards);
    return cards;

}

const cardshow=(cards,isShow)=>{
    const divcon=document.getElementById('card-con');
    const divcon2=document.getElementById('card-con2');


  //   if(cards.length>8 && !isShow){
  //     show.classList.remove('hidden');
  // }
  // else{
  //     show.classList.add('hidden');
  
  // }
  console.log('isshowall',isShow);
  
  // // display only first 8
  
  // if(!isShow){
      cards=cards.slice(0,8);
  // }
  
  sortbtn.addEventListener('click' ,function(){

    const cards1=cards;
    
    
const cards2=cards1.map(obj => {
    return {...obj, date: new Date(obj.published_in)};
  })

    const sortedAsc = cards2.sort(
        (objA, objB) => Number(objA.date) - Number(objB.date),
      );
      
      sortedAsc.forEach(element => {

        const div=document.createElement('div');
      div.classList=`card w-96 bg-base-100 shadow-xl p-5`;
      div.innerHTML=`<figure><img src="${element.image}" alt="Shoes" /></figure>
       <div class="card-body">
        <h2 class="card-title">Features</h2>
       <ol class="border-b-2 p-5">
      
       ${element.features.map(ele=>
          `<li>${(element.features.indexOf(ele))+1}.${ele}</li>`).join('')
          }
      
      
       </ol>
       <h2 class="card-title">${element.name}</h2>
       <div class="flex justify-between items-center">
          <div class="flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class=" text-gray-500 ">${element.published_in}
        </span>
          </div>

          <div class="card-actions justify-end">
          <button class="btn rounded-full"><i class="fa-solid fa-arrow-right text-red-500"></i></button>
        </div>
       </div>
      
   </div>`;
      divcon2.appendChild(div);

      divcon.remove();

      
      
  });


  })



      cards.forEach(element => {

        const div=document.createElement('div');
      div.classList=`card w-96 bg-base-100 shadow-xl p-5`;
      div.innerHTML=`<figure><img src="${element.image}" alt="Shoes" /></figure>
       <div class="card-body">
        <h2 class="card-title">Features</h2>
       <ol class="border-b-2 p-5">
      
       ${element.features.map(ele=>
          `<li>${(element.features.indexOf(ele))+1}.${ele}</li>`).join('')
          }
      
      
       </ol>
       <h2 class="card-title">${element.name}</h2>
       <div class="flex justify-between items-center">
          <div class="flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class=" text-gray-500 ">${element.published_in}
        </span>
          </div>

          <div class="card-actions justify-end">
          <button class="btn rounded-full"><i class="fa-solid fa-arrow-right text-red-500"></i></button>
        </div>
       </div>
      
   </div>`;
      divcon.appendChild(div);

      
      
  });
    }



const handleShowAll= () =>{

  isShow=true;


  

}



load();