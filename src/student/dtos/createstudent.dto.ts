import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsOptional()
  readonly age: number;
  @IsString({ each: true })
  @IsOptional()
  readonly adress: string[];
}
