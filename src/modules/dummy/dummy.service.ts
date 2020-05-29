import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Pagination, PaginationResultInterface } from '@core/pagination';
import { UtilsService } from '@shared/services/utils.service';
import { DummyEntity } from '@entities/dummy.entity';

import { DummyDto } from './dto/dummy.dto';
import { DummyQueryDto } from './dto/dummy-query.dto';
import { UpdateDummyDto } from './dto/update-dummy.dto';
import { CreateDummyDto } from './dto/create-dummy.dto';

@Injectable()
export class DummyService {

    constructor(@InjectRepository(DummyEntity) private readonly dummyRepository: Repository<DummyEntity>,
                private readonly utilsService: UtilsService,
                private readonly configService: ConfigService) {
    }

    // Introduce to how to use ConfigService
    getNodeEnvironment() {
        return this.configService.get('NODE_ENV'); // should be 'local', 'dev' or 'prod'
    }

    async findAll(): Promise<DummyDto[]> {
        const dummyItems = await this.dummyRepository.find();
        return dummyItems.map(dummy => new DummyDto(dummy));
    }

    async getList(query: DummyQueryDto): Promise<Pagination<DummyDto>> {
        const limit = Number(query.limit) || 10;
        const page = Number(query.page) || 0;

        const [list, total] = await this.dummyRepository.findAndCount({
            where: this.utilsService.getWhereObject({ ...query }),
            take: limit,
            skip: limit * page,
        });
        const paginationResult: PaginationResultInterface<DummyDto> = { list, total, page, limit };
        return new Pagination<DummyDto>(paginationResult);
    }

    async findById(dummyId: string): Promise<DummyDto> {
        try {
            const dummy = await this.dummyRepository.findOne(dummyId).then(dummy => new DummyDto(dummy));
            return new DummyDto(dummy);
        } catch (err) {
            throw new Error(err);
        }
    }

    async create(dto: CreateDummyDto): Promise<DummyDto> {
        const newDummy = DummyService.getDummyEntityFromCreateDto(dto);
        const savedDummy = await this.dummyRepository.save(newDummy);
        return new DummyDto(savedDummy);
    }

    async update(dummyId: string, dto: UpdateDummyDto): Promise<DummyDto> {
        const toUpdate = await this.dummyRepository.findOne(dummyId);
        if (!toUpdate) {
            throw new NotFoundException();
        }
        const updated = await this.dummyRepository.save({ ...toUpdate, ...dto });
        return new DummyDto(updated);
    }

    async delete(dummyId: string): Promise<DeleteResult> {
        const dummy = await this.dummyRepository.findOne(dummyId);
        if (!dummy) {
            throw new NotFoundException();
        }
        return await this.dummyRepository.delete({ dummyId });
    }

    private static getDummyEntityFromCreateDto(createDto: CreateDummyDto): DummyEntity {
        const newDummy = new DummyEntity();
        newDummy.name = createDto.name;
        newDummy.age = createDto.age;
        return newDummy;
    }
}
