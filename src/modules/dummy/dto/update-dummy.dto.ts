import { ApiProperty } from '@nestjs/swagger';

export class UpdateDummyDto {

    @ApiProperty()
    readonly name?: string;

    @ApiProperty()
    readonly age?: number;

}

