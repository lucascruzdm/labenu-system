import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { Turmas } from "./turmas.model";

@Injectable()
    export class TurmasService {
    buscasTurmas(turmas: Turmas) {
        throw new Error("Method not implemented.");
    }
        constructor(private prisma: PrismaService) {}
    
      async listarTurmas() {
        return this.prisma.turmas.findMany();
      }
    
      async create(data: Turmas) {       
        return this.prisma.turmas.create({ data });
      }
   
      async buscarTurmas(data: Turmas){
        return this.prisma.turmas.findUnique({
          where: {
          id: Number(data.id),
        }})
      }
   
   
   
    }