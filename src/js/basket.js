(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-basket-open]'),
      closeModalBtn: document.querySelector('[data-basket-close]'),
      modal: document.querySelector('[data-basket]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();