import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PorteroService } from '../../Services/portero.service';
import { Portero } from '../../Interfaces/portero';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-detail-portero',
  templateUrl: './detail-portero.component.html',
  styleUrls: ['./detail-portero.component.css'],
})
export class DetailPorteroComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, private service: PorteroService) {}
  portero?: Portero; 

  id: string;

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    console.log(this.id)
    this.portero = Promise.resolve(this.service.getPortero(this.id)) as unknown as Portero;
  }

  deletePortero() {
    this.service.deletePortero(this.id);
  }
}
