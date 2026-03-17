import { Controller, Get } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';


@Controller('docentes')
export class EstudantesControler {

     constructor(private estudantesService: EstudantesService) {}
    
      @Get()
      listarEstudantes(){
        return this.estudantesService.listarEstudantes();
      }
      




    }