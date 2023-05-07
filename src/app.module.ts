import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CONFIG_MODULES } from 'app.provider';
import { CandidateModule } from 'candidates/candidate.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CandidateModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ...CONFIG_MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
