import React from "react";
import API from '../api';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};
export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log('4. in the view');
    this.setState(_getAppState());
  }
  render() {
    return <div>
              <h3>Links </h3>
              <ul>
                <li>Links ...</li>
                <li>Links ...</li>
                <li>Links ...</li>
              </ul>
          </div>
  }
}
