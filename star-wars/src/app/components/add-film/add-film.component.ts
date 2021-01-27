import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  display = 'none';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
}
