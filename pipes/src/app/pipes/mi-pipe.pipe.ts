import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(cadenaBombillas: string, tipo: "LED" | 'Flourescente' | 'Incandescente'): string {
    return "Ventajas de las " + cadenaBombillas + " " + tipo;
  }
}
