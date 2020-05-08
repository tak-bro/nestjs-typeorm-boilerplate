import { ApiProperty } from '@nestjs/swagger';

export class DummyQueryDto {

    @ApiProperty()
    readonly page?: number;

    @ApiProperty()
    readonly limit?: number;

    @ApiProperty()
    readonly name?: string;

}
