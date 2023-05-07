import { Expose } from "class-transformer";

export class CandidateVm {
  @Expose()
  owner: number;

  @Expose()
  name: string;

  @Expose()
  company: string;

  constructor(args: CandidateVm) {
  }
}
