import { get } from 'jquery';
import ServerActions from './actions/ServerActions';
let API = {
  fetchLinks() {
    // use ajax request to get the data
    get('/data/links').done(res => {
      ServerActions.receiveLinks(res);
    })
  }
};

export default API;
