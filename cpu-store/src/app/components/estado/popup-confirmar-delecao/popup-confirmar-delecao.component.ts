import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './popup-confirmar-delecao.component.html',
  styleUrls: ['./popup-confirmar-delecao.component.css'],
  imports: [MatDialogContent, MatDialogActions]
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  onConfirm(): void {
    this.dialogRef.close(true); // Fechar o diálogo e retornar 'true' indicando confirmação
  }

  onCancel(): void {
    this.dialogRef.close(false); // Fechar o diálogo e retornar 'false' indicando cancelamento
  }
}
