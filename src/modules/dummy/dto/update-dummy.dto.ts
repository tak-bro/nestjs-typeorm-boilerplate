import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateDummyDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly age?: number;

}

