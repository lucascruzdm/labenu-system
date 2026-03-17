import { Injectable } from "@nestjs/common";

@Injectable()
    export class TurmasService {
        constructor(private prisma: PrismaService) {}
    
      async listarTurmas() {
        return this.prisma.cliente.findMany();
      }
    }