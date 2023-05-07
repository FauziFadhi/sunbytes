import { Candidate } from "@models/core/Candidate";
import { BadRequestException, Logger } from "@nestjs/common";
import { ICandidateCreate } from "./candidate.interface";

export class CandidateService {
  constructor(
    private readonly logger: Logger,
  ) {

  }


  async create(dto: ICandidateCreate) {
    const candidate = await Candidate.create({
      company: dto.company,
      name: dto.name,
      owner: dto.owner,
    })
    .catch((e) => {
      this.logger.error("FAILED TO CREATE CANDIDATE", e.stack, "DATABASE ERROR")
      throw new BadRequestException('Failed to create new candidate.');
    })

    return candidate;
  }

}
