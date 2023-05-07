import { shuffle } from "@utils/helper";
import { Expose, Transform } from "class-transformer";

export class CandidateVm {
  @Transform(({ value }) => shuffle(value))
  @Expose()
  owner: number;

  @Transform(({value}) => shuffle(value))
  @Expose()
  name: string;

  @Transform(({value}) => shuffle(value))
  @Expose()
  company: string;

  constructor(args: CandidateVm) {
  }
}
