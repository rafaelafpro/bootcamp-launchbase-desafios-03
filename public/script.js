modalOverlay = document.querySelector('.modal-overlay');
cards = document.querySelectorAll('.card');
closeModal = document.querySelector('.close-modal');
maximizeModal = document.querySelector('.maximize-modal');
modal = document.querySelector('.modal');
iFrame = document.querySelector('iframe');

for (let card of cards) {
    card.addEventListener ('click', ()=> {
        let page = card.getAttribute('id');
        
        iFrame.src = `https://rocketseat.com.br/${page}`;
        modalOverlay.classList.add('active');
    })
}


closeModal.addEventListener('click', ()=>{
    modalOverlay.classList.remove('active');
})


maximizeModal.addEventListener('click', ()=> {
    modal.classList.toggle('maximize');
})

