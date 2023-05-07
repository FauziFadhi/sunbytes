import { Expose } from "class-transformer";

export class CandidateVm {
  @Expose()
  owner: string;

  @Expose()
  name: string;

  @Expose()
  company: string;

  constructor(args: CandidateVm) {
  }
}
