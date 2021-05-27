import { Pattern } from "./interface";
import { AVAILABLE_PATTERN, PATTERN_LIST } from "./patterns";

class PatternProcessor {

    accuracyInPercentage: number = 60;
    maxSamples: number = 3;
    sampleTableArray: any;
    readonly matchedPattern: AVAILABLE_PATTERN = AVAILABLE_PATTERN.NOT_FOUND;
    constructor(sample: Array<Array<string>>) {
        this.sampleTableArray = sample.length <= this.maxSamples ? sample : sample.slice(0, this.maxSamples);
        this.matchPatterns();
    }

    matchPatterns = () => {
        for(let i = 0; i < PATTERN_LIST.length; i++) {
            var table = PATTERN_LIST[i]['table_name'];
            var index_priority = PATTERN_LIST[i]['table_name'].match(/\[.*?\]/g);
            console.log(index_priority);
            for(let j = 0; j < this.sampleTableArray.length; j++) {
                for(let k = 0; k < this.sampleTableArray[j].length; k++) {
                }
            }
        }
    }

}

export { PatternProcessor };