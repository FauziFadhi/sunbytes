import { Candidate } from "@models/core/Candidate";
import { BadRequestException } from "@nestjs/common";
import { ICandidateCreate } from "./candidate.interface";

export class CandidateService {
  constructor(
  ) {

  }


  async create(dto: ICandidateCreate) {
    const candidate = await Candidate.create({
      company: dto.company,
      name: dto.name,
      owner: dto.owner,
    })
    .catch((e) => {
      console.error("FAILED TO CREATE CANDIDATE", e.stack, "DATABASE ERROR")
      throw new BadRequestException('Failed to create new candidate.');
    })

    return candidate;
  }

}
