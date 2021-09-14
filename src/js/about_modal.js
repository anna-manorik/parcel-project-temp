(() => {
  const refs = {
    openModalBtn: document.querySelector('[about_data-modal-open]'),
    closeModalBtn: document.querySelector('[about_data-modal-close]'),
    modal: document.querySelector('[about_data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
