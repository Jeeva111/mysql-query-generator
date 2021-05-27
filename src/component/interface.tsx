interface ProcessDatabase {

}

type Pattern = {
    table_name: string
    primary_key: string;
    foreign_key: string;
    tiny_int: string;
    date: string;
    date_time: string;
    integer?: string;
    varchar?: string;
    text?: string;
}

export type { ProcessDatabase, Pattern };