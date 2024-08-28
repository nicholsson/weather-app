// functions that talk to api are here
const dataGetter = {
  key: "6VE79QR4ZG4AXW9D36KKXSM9G",
  requestFormat:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  queryLocation(location) {
    const query = this.requestFormat
      .concat(location)
      .concat("/")
      .concat(this.key);
    return query;
  },
};
export { dataGetter };
