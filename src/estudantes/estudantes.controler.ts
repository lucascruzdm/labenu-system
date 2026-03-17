import { Controller, Get } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';


@Controller('estudantes')
export class EstudantesControler {

     constructor(private estudantesService: EstudantesService) {}
    
      @Get()
      listarEstudantes(){
        return this.estudantesService.listarEstudantes();
      }
      




    }