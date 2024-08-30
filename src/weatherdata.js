class Query {
  constructor() {
    this.key = "6VE79QR4ZG4AXW9D36KKXSM9G";
    this.url =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  }
  async getData(location) {
    const query = `${this.url}${location}/?key=${this.key}`;
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
  }
}
export { Query };
