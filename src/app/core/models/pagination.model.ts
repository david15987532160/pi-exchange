interface IMeta {
    msg: string;
    status: number;
    response_id: string;
}

interface IPagination {
    count: number;
    offset: number;
    total_count: number;
}

export interface IPaginationData<T> {
    data: T[];
    meta: IMeta;
    pagination: IPagination;
}
