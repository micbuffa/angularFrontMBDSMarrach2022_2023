import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // champs du formulaire
  nomAssignment = '';
  dateDeRendu?: Date;

  onSubmit() {
    if((!this.nomAssignment) || (!this.dateDeRendu)) { return; }

    console.log(this.nomAssignment + " " + this.dateDeRendu);

    let assignment = new Assignment();
    assignment.nom = this.nomAssignment;
    assignment.dateDeRendu = this.dateDeRendu;
    assignment.rendu = false;

    //this.assignments.push(assignment);
    // on emet un evenement vers le père (ou autre)
    // qui porte l'assignement à ajouter dans la liste
    this.nouvelAssignment.emit(assignment);
  }

}
