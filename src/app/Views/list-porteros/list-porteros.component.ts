import { Component, OnInit } from '@angular/core';
import { PorteroService } from '../../Services/portero.service';
import { Portero } from '../../Interfaces/portero';
import { doc } from '@firebase/firestore';

@Component({
  selector: 'app-list-porteros',
  templateUrl: './list-porteros.component.html',
  styleUrls: ['./list-porteros.component.css'],
})
export class ListPorterosComponent implements OnInit {
  listPorteros: Portero[] = [];
  selectedPortero: Portero;

  constructor(private service: PorteroService) {}

  ngOnInit(): void {
    this.service.getPorteros().subscribe((portero) => {
      this.listPorteros = portero;
    });
  }
}
