import { ApiProperty } from '@nestjs/swagger';
export class TokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg1Y2YyODkyMzg3MGQ2ZDY4N2NkOSIsIm5hbWUiOiJKb3NlIEFsZWphbmRybyIsImlhdCI6MTY2NTc2MjQzOCwiZXhwIjoxNjY1NzYyNDk4fQ.bAbf6dSPiJGdKsucjCSPggLo0ju6AZruUNFD-iiu9XI',
    type: 'string',
  })
  readonly token: string;
}
