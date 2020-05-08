import { Module } from '@nestjs/common';
import { UtilsService } from './services/utils.service';

@Module({
    imports: [],
    controllers: [],
    providers: [UtilsService],
    exports: [UtilsService]
})
export class SharedModule { }
