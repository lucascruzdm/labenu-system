import { Body, Controller, Get, Post } from "@nestjs/common";
import { TurmasService } from "./turmas.service";
import { Turmas } from "./turmas.model";

@Controller('turmas')
    export class TurmasControler{
        constructor (private turmasService: TurmasService) {}

    @Get('listarturmas')
        listarTurmas(){
            return this.turmasService.listarTurmas();
            
        }
    @Post('criarturmas')
        async create(@Body() turmas: Turmas) {
              
            return this.turmasService.create(turmas);
        }
    
    
    
    }