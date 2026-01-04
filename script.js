const openModalButtons = document.querySelectorAll('[data-modal-action="open-modal"]');
const closeModalButtons = document.querySelectorAll('[data-modal-action="close-modal"]');
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');

openModalButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

modalWindows.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
});

function openModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.add('open')
    }
  });
}

function closeModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.remove('open')
    }
  });
}

function toggleAccordion(event) {

  const accordionHeader = event.target.closest('.accordion__header');

  if (!accordionHeader) return;

  const accordionContainer = accordionHeader.closest('.accordion__container');

  const accordionType = accordionContainer.getAttribute('accordion-type') ?? 'multi';

  const parentElement = accordionHeader.closest('[accordion-id]');
  const accordionState = parentElement.getAttribute('accordion-state');

  if (accordionType === 'single') {
    const accordions = accordionContainer.querySelectorAll('[accordion-id]');
    accordions.forEach((item) => {
      item.setAttribute('accordion-state', 'closed');
    });
  }

  if (accordionState === 'closed') {
    parentElement.setAttribute('accordion-state', 'open');
  } else {
    parentElement.setAttribute('accordion-state', 'closed');
  }
}


const accordions = document.querySelectorAll('.accordion__container');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', toggleAccordion);
});
