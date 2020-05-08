export interface PaginationResultInterface<PaginationEntity> {
    list: PaginationEntity[];
    total: number;
    page: number;
    limit: number;
}

export class Pagination<PaginationEntity> {

    public list: PaginationEntity[];
    public total: number;
    public page: number;
    public limit: number;

    constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
        this.list = paginationResults.list;
        this.total = paginationResults.total;
        this.page = paginationResults.page;
        this.limit = paginationResults.limit;
    }
}
