import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";

@Injectable()
    export class TurmasService {
        constructor(private prisma: PrismaService) {}
    
      async listarTurmas() {
        return this.prisma.turmas.findMany();
      }
    }
    