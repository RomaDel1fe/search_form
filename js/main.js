const container = document.querySelector('.container');
const button = document.querySelector('.button');
const formBody = document.querySelector('.form');
const criteria = document.querySelector('.form__criteria');

document.addEventListener("click", form);

function form(event){
   if(event.target.closest('.button')){
      button.classList.add('_active');
      formBody.classList.add('_active');
   }
   if(event.target.closest('.form__search-input')){
      criteria.classList.toggle('_active')
   }
   if(!event.target.closest('.container')){
      button.classList.remove('_active');
      formBody.classList.remove('_active');
   }
}