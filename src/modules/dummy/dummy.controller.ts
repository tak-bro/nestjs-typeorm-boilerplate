import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Pagination } from '@core/pagination';

import { DummyDto } from './dto/dummy.dto';
import { DummyQueryDto } from './dto/dummy-query.dto';
import { UpdateDummyDto } from './dto/update-dummy.dto';
import { CreateDummyDto } from './dto/create-dummy.dto';

import { DummyService } from './dummy.service';

@Controller('dummy')
export class DummyController {

    constructor(private readonly dummyService: DummyService) {}

    @Get('/all')
    async findAll(): Promise<DummyDto[]> {
        return await this.dummyService.findAll();
    }

    @Get()
    async getDummyList(@Query() query: DummyQueryDto): Promise<Pagination<DummyDto>> {
        return await this.dummyService.getList(query);
    }

    @Get(':id')
    async findDummyById(@Param() params): Promise<DummyDto> {
        return await this.dummyService.findById(params.id);
    }

    @Post()
    async create(@Body() dummy: CreateDummyDto): Promise<DummyDto> {
        return await this.dummyService.create(dummy);
    }

    @Put(':id')
    async update(@Body() updated: UpdateDummyDto, @Param() params): Promise<DummyDto> {
        const { id } = params;
        return await this.dummyService.update(id, updated);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.dummyService.delete(params.id);
    }
}
