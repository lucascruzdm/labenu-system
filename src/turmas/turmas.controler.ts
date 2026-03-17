import { Controller, Get } from "@nestjs/common";
import { TurmasService } from "./turmas.service";

@Controller('turmas')
    export class TurmasControler{
        constructor (private turmasService: TurmasService) {}

    @Get()
        listarTurmas(){
            return this.turmasService.listarTurmas();
            
        }
    }