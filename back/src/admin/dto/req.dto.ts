import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateConsultReqDto {
  @ApiPropertyOptional({
    example: '홍길동',
  })
  name?: string;

  @ApiProperty({
    required: true,
    example: '010-1234-5678',
  })
  contact: string;

  @ApiPropertyOptional({
    example: '문의',
  })
  consult: string;

  @ApiPropertyOptional({
    example: '이거 솔루션 어떻게 이용하고 얼맙니까?',
  })
  text: string;
}
