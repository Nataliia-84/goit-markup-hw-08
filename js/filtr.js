const filtrEL = document.querySelector('.js-list');
filtrEL.addEventListener('click', onClickButton);

const elements = document.querySelectorAll('.project__item');


function onClickButton(event) {
   
    if (event.target.nodeName !=='BUTTON') {
        return;
    }

    const filtr = event.target.dataset['filtr'];
   
    elements.forEach((item) => {
            
        item.classList.remove('visually__hidden');
        if (item.dataset['filtr'] !== filtr  && filtr!=='all'  )   {
            item.classList.add('visually__hidden');
        }
       
    })

}