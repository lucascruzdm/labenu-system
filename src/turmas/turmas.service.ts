import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { Turmas } from "./turmas.model";

@Injectable()
    export class TurmasService {
        constructor(private prisma: PrismaService) {}
    
      async listarTurmas() {
        return this.prisma.turmas.findMany();
      }
    
      async create(data: Turmas) {       
        return this.prisma.turmas.create({ data });
      }
    }