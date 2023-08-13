import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  evento: never

  async enableShutdownHooks(app: INestApplication) {
    this.$on(this.evento, async () => {
      await app.close();
    });
  }
}