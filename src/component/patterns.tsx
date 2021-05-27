import { Pattern } from "./interface";

const LEGACY_PATTERN: Pattern = {
    table_name:"[1] `/^prj_/i`",
    primary_key:"[2] `/^id/`",
    foreign_key: "[>2] `/^id/`",
    tiny_int:"",
    date: "date",
    date_time: "date_time",
    text: "image_path, path"
}

enum AVAILABLE_PATTERN {
    NOT_FOUND,
    LEGACY_PATTERN
}

const PATTERN_LIST: Pattern[] = [LEGACY_PATTERN];
export { PATTERN_LIST, LEGACY_PATTERN, AVAILABLE_PATTERN };