import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecargaService } from 'src/app/services/recarga/recarga.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {

  constructor(private ope: RecargaService, 
    private formBuilder: FormBuilder,
    private route: Router
  ) {

  }

  formulario!: FormGroup;

  mensaje: string = '';
  tipo: string = '';
  alertaVisible: boolean = false;

  mostrarAlerta(mensaje: string, tipo: string) {
    this.mensaje = mensaje;
    this.tipo = tipo;
    this.alertaVisible = true;
    setTimeout(() => {
      this.alertaVisible = false;
    }, 3000);
  }

  listaOperadores: {id: number, name: string}[] = [];

  getOperadores() {
  this.ope.getOperadores().subscribe(
    res => {
      if (res && res.data) { 
        this.listaOperadores = res.data.map((operador: {id: number, name: string}) => ({
          id: operador.id,
          name: operador.name
        }));
      }
    }
  )
}

  ngOnInit(): void {
    this.getOperadores();
    this.formulario = this.formBuilder.group({
      operador: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      valor: ['', [Validators.required, Validators.min(1)]]
    });
  }

  envairRecarga() {
    const idOperador = this.formulario.get('operador')?.value;
    const numero = this.formulario.get('numero')?.value;
    const valor = this.formulario.get('valor')?.value;
  
    this.ope.postRecarga(idOperador, numero, valor).subscribe(
      res => {
        if (res && res.message) {
          this.mostrarAlerta(res.message, 'success');
        }
      },
      error => {
        if (error.error && error.error.message) {
          this.mostrarAlerta(error.error.message, 'error');
        } else {
          this.mostrarAlerta('Error al enviar la recarga. Por favor, inténtelo de nuevo más tarde.', 'error');
        }
      }
    );
  }
  
  salir(){
    this.route.navigate(['/login']);
  }

}
