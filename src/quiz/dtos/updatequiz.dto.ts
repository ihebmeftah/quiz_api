import { PartialType } from '@nestjs/mapped-types';
import { CreateQuiz } from './createquiz.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateQuiz extends PartialType(CreateQuiz) {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
