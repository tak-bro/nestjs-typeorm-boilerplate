import { Like } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

    // TODO: refactor below to support where condition...
    public getWhereObject(query: any) {
        return Object.keys(query)
            .filter(key => key !== 'limit' && key !== 'page')
            .reduce((where, key) => {
                where[key] = Like('%' + query[key] + '%');
                return where;
            }, {});
    }
}
