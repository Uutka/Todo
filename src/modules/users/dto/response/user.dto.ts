import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
