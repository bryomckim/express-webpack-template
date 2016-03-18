import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(ActionTypes) {
        case ActionTypes.RECEIVE_LINKS:
          // do something with the data
          console.log('In Store', actions.links);
          _links = action.links;
          this.emit('change');
          break;
        default:
          // do nothing
      }
    })
  }
}

export default new LinkStore();
