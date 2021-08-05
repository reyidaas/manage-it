import {
  MinLength,
  IsString,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
} from 'class-validator';

export default class CreateProjectDto {
  @IsString({ message: 'Title must be a string!' })
  @MinLength(3, { message: 'Title must be at least 3 characters long.' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string!' })
  description: string;

  @IsOptional()
  @IsArray({ message: 'Tags must be array.' })
  @ArrayNotEmpty({ message: 'Tags array must not be empty.' })
  @ArrayUnique({ message: 'Tags must be unique.' })
  tags?: string[];
}
