import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { transformer } from '@utils/helper';
import { CandidateCreateReq } from './candidate.request';
import { CandidateService } from './candidate.service';
import { CandidateVm } from './candidate.viewmodel';

@Controller({
  path: 'candidates',
  version: '1'
})
@ApiTags('Candidate')
export class CandidateController {
  constructor(private readonly service: CandidateService) {}

  @Post()
  async create(
    @Body() body: CandidateCreateReq,
  ): Promise<CandidateVm> {
    const candidate = await this.service.create(body)
    return transformer(CandidateVm, candidate)
  }
}
