import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './createstudent.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
