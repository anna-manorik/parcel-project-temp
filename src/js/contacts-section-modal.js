(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacts-section-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacts-section-close]'),
    modal: document.querySelector('[data-modal-contacts-section]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('contacts-section-data-modal--hidden');
  }
})();