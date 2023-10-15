import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/createstudent.dto';
import { UpdateStudentDto } from './dtos/updatestudent.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentservices: StudentService) {}
  @Get()
  getAllStudents() {
    return this.studentservices.findAll();
  }

  @Get(':id')
  getOneStudent(@Param('id') id: number) {
    return this.studentservices.findOne(id);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentservices.delete(id);
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentservices.create(createStudentDto);
  }
  @Patch(':id')
  updateStudent(
    @Param('id') id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentservices.update(id, updateStudentDto);
  }
}
