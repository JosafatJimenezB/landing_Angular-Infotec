import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCollapseModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-collapse-navbar, ngbd-modal-options',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css'],
  styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})
export class NavbarComponent implements OnInit{

  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {

  }

  isMenuCollapsed = true;

  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}

}
