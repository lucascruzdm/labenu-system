import { Module } from "@nestjs/common";
import { TurmasService } from "./turmas.service";
import { TurmasControler } from "./turmas.controler";
import { PrismaService } from "src/shared/prisma.service";

@Module({
    providers: [TurmasService,PrismaService],
    controllers: [TurmasControler]
})
export class TurmasModule {}
