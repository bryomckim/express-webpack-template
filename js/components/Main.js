import React from "react";
import API from '../api';
import LinkStore from '../stores/LinkStore';

export default class Main extends React.Component {
  componentDidMount() {
    API.fetchLinks();
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
