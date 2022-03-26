
const refs = {
  container: document.querySelector('.container-list'),
  modalContainer: document.querySelector('.modal_team-container'),
  closModal: document.querySelector('.modal__btn-close'),
  heartButton: document.querySelector('.footer__team'),
};

refs.heartButton.addEventListener('click', heartButtonClick);
function heartButtonClick() { 
  
  refs.modalContainer.classList.add('is-open');
 
}
refs.closModal.addEventListener('click', closeModalClick);

document.addEventListener('keydown', closeModalWindow);

function closeModalWindow(event) {
  if (event.key === 'Escape') {
    closeModalClick();
  }
}

refs.modalContainer.addEventListener('click', closelightboxClick);

function closeModalClick() {
  refs.modalContainer.classList.remove('is-open');
}

function closelightboxClick(event) {
  if (event.target.nodeName !== 'SECTION') {
    return;
  }
  closeModalClick();
}


refs.container.addEventListener('click', closelightboxClick);

