import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateQuiz {
  @IsString()
  @IsNotEmpty()
  @Length(3, 255)
  title: string;
  @IsString()
  @IsOptional()
  @Length(3, 255)
  description: string;
}
