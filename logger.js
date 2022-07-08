import {TYPE_LOG,TYPE_ERROR,TYPE_WARN} from './constants.js'
function logger(log, type = TYPE_ERROR){
    console[type](log);
}
export default logger;