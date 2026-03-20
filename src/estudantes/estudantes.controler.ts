import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import type { Estudantes } from './estudantes.model';


@Controller('estudantes')
export class EstudantesControler {

     constructor(private estudantesService: EstudantesService) {}
    
      @Get('listarestudantes')
      listarEstudantes(){
        return this.estudantesService.listarEstudantes();
      }
      
      @Post('criarestudantes')
      async create(@Body() estudantes: Estudantes) {
        return this.estudantesService.create(estudantes);
      }




    }