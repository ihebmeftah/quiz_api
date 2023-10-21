import {
  Param,
  Body,
  Get,
  Controller,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateQuiz } from '../dtos/createquiz.dto';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../entities/quiz.entity';
import { UpdateQuiz } from '../dtos/updatequiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizservices: QuizService) {}
  @Get()
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizservices.getAllQuiz();
  }
  @Get(':id')
  getOneQuiz(@Param('id') id: number): Promise<Quiz> {
    return this.quizservices.getOneQuiz(id);
  }
  @Post()
  createQuiz(@Body() body: CreateQuiz): Promise<Quiz> {
    return this.quizservices.craeteQuiz(body);
  }

  @Patch()
  updateQuiz(@Body() body: UpdateQuiz): Promise<Quiz> {
    return this.quizservices.updateQuiz(body);
  }
  @Delete(':id')
  deleteQuiz(@Param('id') id: number) {
    return this.quizservices.deleteQuiz(id);
  }
}
