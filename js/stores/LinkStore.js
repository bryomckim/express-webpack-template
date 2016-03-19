import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _links = [];

console.log('Called now!!');
class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.ActionTypes) {
        case ActionTypes.RECEIVE_LINKS:
          // do something with the data
          console.log('In Store', action);
          _links = action.links;
          this.emit('change');
          break;
        default:
          // do nothing
      }
    });
  }

  getAll() {
    return _links;
  }

}

export default new LinkStore();
