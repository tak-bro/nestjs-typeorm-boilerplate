import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DummyQueryDto {

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly page?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly limit?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly name?: string;

}
