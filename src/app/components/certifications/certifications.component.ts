import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit{
  ngOnInit(): void {
    this.initializeModal();
  }

  initializeModal(): void {
    const modals = document.querySelectorAll('.modal-frame') as NodeListOf<HTMLElement>;
    const closeButtons = document.querySelectorAll('.close') as NodeListOf<HTMLElement>;
    const openButtons = document.querySelectorAll('.contenedor.open') as NodeListOf<HTMLElement>;

    // Event listener para cerrar el modal
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal-frame') as HTMLElement;
        if (modal) {
          modal.classList.remove('state-appear');
          modal.classList.add('state-leave');
        }
      });
    });

    // Event listener para abrir el modal correspondiente
    openButtons.forEach((openButton) => {
      openButton.addEventListener('click', () => {
        const targetModalId = openButton.getAttribute('data-modal');
        const targetModal = document.getElementById(targetModalId as string) as HTMLElement;

        // Mostrar el modal seleccionado
        if (targetModal) {
          targetModal.classList.remove('state-leave');
          targetModal.classList.add('state-appear');
        }
      });
    });

    // Event listener para finalizar la animación
    modals.forEach(modal => {
      modal.addEventListener('animationend', () => {
        if (modal.classList.contains('state-leave')) {
          modal.classList.remove('state-leave');
        }
      });
    });
  }

}
