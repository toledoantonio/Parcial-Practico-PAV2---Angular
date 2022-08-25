import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarjetas } from '../../models/tarjetas';
import { TarjetasService } from '../../services/tarjetas.service';
import { ModalDialogService } from '../../services/modal-dialog.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  Titulo = 'Tarjetas';

  TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)',
  };

  Mostrar: string = 'L';
  RegistrosTotal: number;

  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...',
  };

  Items: Tarjetas[] = [];
  OpcionesActivo = [
    { Id: null, Nombre: '' },
    { Id: true, Nombre: 'SI' },
    { Id: false, Nombre: 'NO' },
  ];

  FormAlta = new FormGroup({
    tarjeta: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    cantidad: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{1,7}'),
    ]),
    activo: new FormControl(null, [Validators.required]),
  });

  constructor(
    private tarjetasService: TarjetasService,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.getTarjetas();
  }

  getTarjetas() {
    this.tarjetasService.get().subscribe((res: Tarjetas[]) => {
      this.Items = res;
      this.RegistrosTotal = res.length;
    });
  }

  mostrarListado() {
    this.Mostrar = 'L';
    this.FormAlta.reset();
    this.getTarjetas();
  }

  mostrarAlta() {
    this.Mostrar = 'A';
  }

  grabarTarjeta() {
    const itemCopy = { ...this.FormAlta.value };
    this.tarjetasService.post(itemCopy).subscribe((res: any) => {
      this.modalDialogService.Alert('Tarjeta Agregada correctamente');
      this.mostrarListado();
    });
  }
}
