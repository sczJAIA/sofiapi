import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength, IsString, IsNotEmpty } from 'class-validator';
export class LoginDto {
  @ApiProperty({ type: String, example: 'j.alejandro@gmail.com' })
  readonly email: string;

  @ApiProperty({ type: String, example: 'Clave123' })
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
