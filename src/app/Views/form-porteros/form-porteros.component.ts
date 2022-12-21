import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PorteroService } from '../../Services/portero.service';

@Component({
  selector: 'app-form-porteros',
  templateUrl: './form-porteros.component.html',
  styleUrls: ['./form-porteros.component.css'],
})
export class FormPorterosComponent implements OnInit {
  ngOnInit(): void {}

  formulario: FormGroup;

  constructor(private service: PorteroService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      mail: new FormControl(),
      mesDisponible: new FormControl(),
    });
  }
  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.service.addPortero(this.formulario.value);
    console.log(response);
    alert('Usuario creado correctamente');
  }
}
