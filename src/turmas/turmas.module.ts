import { Module } from "@nestjs/common";
import { TurmasService } from "./turmas.service";
import { TurmasControler } from "./turmas.controler";

@Module({
    providers: [TurmasService],
    controllers: [TurmasControler]
})
export class TurmasModule {}
