console.log("Script is hooked!");
import { DataGetter } from "./utils/data.js";
const slave = new DataGetter();
console.log(slave.query('Rome'))