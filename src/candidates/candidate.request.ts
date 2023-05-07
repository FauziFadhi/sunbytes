import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber } from "class-validator";

export class CandidateCreateReq {
  @IsNumber()
  @IsNotEmpty()
  owner: string;

  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  company: string;
}
