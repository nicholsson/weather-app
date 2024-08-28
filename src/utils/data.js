// functions that talk to api are here
export class DataGetter {
    constructor(){
        this.key = '6VE79QR4ZG4AXW9D36KKXSM9G';
        this.requestFormat = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

    } 
    query(location){
        const queryLocation = this.requestFormat.concat(location).concat('/');
        const query = queryLocation.concat(this.key);
        return query;
    }
}
