import { ApiProperty } from '@nestjs/swagger';

export class CreateDummyDto {

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age?: number;

}
