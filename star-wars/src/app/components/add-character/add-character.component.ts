import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
