import { get } from 'jquery';
let API = {
  fetchLinks() {
    // use ajax request to get the data
    get('/data/links', (links) => {
      console.log(links);
    });
  }
};

export default API;
