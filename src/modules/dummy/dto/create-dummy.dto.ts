import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDummyDto {

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly age?: number;

}
