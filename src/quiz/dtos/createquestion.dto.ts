import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateQuestion {
  @IsString()
  @IsNotEmpty()
  @Length(3, 255)
  question: string;
  @IsNotEmpty()
  quizId: number;
}
