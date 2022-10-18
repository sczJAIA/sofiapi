import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsEmail, IsString, IsNotEmpty } from 'class-validator';
export class CreateAdvisorsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Jose Alejandro',
    type: String,
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Ibañez Arevalo',
    type: String,
  })
  readonly last_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  @ApiProperty({
    description: '1',
    example: '0: Femenino, 1: Masculino, 2: Prefiero no decirlo',
    type: String,
    maxLength: 1,
  })
  readonly gender: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'j.alejandro460@gmail.com',
    type: String,
  })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '+59165013519',
    type: String,
  })
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Bolivia',
    type: String,
  })
  readonly country: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '-17.72939205609252',
    type: String,
  })
  readonly lat: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '-63.12186084889396',
    type: String,
  })
  readonly lng: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'clave123',
    type: String,
  })
  readonly password: string;
}
