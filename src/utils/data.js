// functions that talk to api are here
const Query = {
  key: "6VE79QR4ZG4AXW9D36KKXSM9G",
  url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  async getData(location) {
    const query = this.url
      .concat(location)
      .concat("/")
      .concat("?key=")
      .concat(this.key);
    try {
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  },
};
export { Query };
