import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancelmodal',
  templateUrl: './cancelmodal.component.html',
  styleUrls: ['./cancelmodal.component.css']
})
export class CancelmodalComponent implements OnInit {

  step: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.step = 1;
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  continue() {
    this.step = 2;
  }

}
