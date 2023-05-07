import { Logger, Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';


@Module({
  imports: [
  ],
  controllers: [CandidateController],
  providers: [CandidateService, Logger],
})
export class CandidateModule {}
