const reservation = document.querySelector('.reservation');
const modalWindow = document.querySelector('.modal-container');
const closeModal = document.querySelector('.modal__close-btn');


reservation.addEventListener('click', () => {
    modalWindow.style.display = 'block'
});

closeModal.addEventListener('click', onCloseModal);

modalWindow.addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
        onCloseModal()
    }
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') onCloseModal()})


function onCloseModal(){
    modalWindow.style.display = 'none'
};

