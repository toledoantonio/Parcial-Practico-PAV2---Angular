import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Titulo = 'Parcial Práctico 4k2 - 2022';
  constructor() { }

  ngOnInit() {
  }

}
