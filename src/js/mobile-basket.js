(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mobile-basket-open]'),
      closeModalBtn: document.querySelector('[data-mobile-basket-close]'),
      modal: document.querySelector('[data-mobile-basket]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();