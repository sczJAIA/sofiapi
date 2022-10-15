import { ApiProperty } from '@nestjs/swagger';
import {
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsNotEmpty,
} from 'class-validator';
export class RegisterDto {
  @ApiProperty({
    example: 'Jose Alejandro',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'Ibañez Arevalo',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty({
    description: '0: Femenino, 1: Masculino, 2: Prefiero no decirlo',
    example: '0',
    type: String,
    maxLength: 1,
  })
  @MaxLength(1)
  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @ApiProperty({
    example: 'j.alejandro460@gmail.com',
    type: String,
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: '+59165013519',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({
    example: 'Bolivia',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @ApiProperty({
    example: '-17.72939205609252',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly lat: string;

  @ApiProperty({
    example: '-63.12186084889396',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly lng: string;

  @ApiProperty({ type: String, example: 'Clave123' })
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
