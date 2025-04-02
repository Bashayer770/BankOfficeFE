import { Component, EventEmitter, Output } from '@angular/core';
import { ClosesvgComponent } from '../../svg/closesvg/closesvg.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ClosesvgComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
