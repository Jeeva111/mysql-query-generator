import { PatternProcessor } from "./PatternProcessor";
import { AVAILABLE_PATTERN } from "./patterns";

class ProcessDatabase {

    useCustomPatternAnalysis: boolean = false;
    inputString: string
    databaseStruct: Array<Array<string>> = [];
    ableToProcess: AVAILABLE_PATTERN;

    constructor(readonly db_string: string) {
        this.ableToProcess = AVAILABLE_PATTERN.NOT_FOUND;
        this.inputString = db_string;
        this.analysisAbleToHandle();
        this.processDatabaseStructure();
    }

    analysisAbleToHandle = () => {

        this.databaseStruct = this.frameStringToArray();
        if(this.useCustomPatternAnalysis) {
            this.ableToProcess = this.customPatternCheck();
        } else {
            this.ableToProcess = this.preBuildPatternCheck();
        }
    }

    frameStringToArray = ():Array<Array<string>> => {

        var frameIntoArray = new Array();
        frameIntoArray[0] = [];
        var splitString = this.inputString.split("\n");
        var pointer: number = 0;
        for(let index = 0; index < splitString.length; index++) {
            if(splitString[index] == "") {
                pointer++;
                frameIntoArray[pointer] = [];
                continue;
            }            
            frameIntoArray[pointer].push(splitString[index]);   
        }
        return frameIntoArray;

    }

    customPatternCheck = ():AVAILABLE_PATTERN => {
        // use own custom pattern
        return AVAILABLE_PATTERN.NOT_FOUND;
    }

    preBuildPatternCheck = ():AVAILABLE_PATTERN => {

        var processResult = new PatternProcessor(this.databaseStruct);
        return processResult.matchedPattern;
    }

    processDatabaseStructure = () => {

    }

}

export default ProcessDatabase;