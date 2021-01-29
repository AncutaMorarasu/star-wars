import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css'],
})
export class AddPlanetComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
