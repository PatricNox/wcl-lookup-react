import React from 'react';
import WCLApi from '../../api/WCLApi';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = { query: '', realm: '', region: 'eu', loading: false, inProgress: true };
        this.handleQueryChange  = this.handleQueryChange.bind(this);
        this.handleRealmChange  = this.handleRealmChange.bind(this);
        this.handleRegionChange  = this.handleRegionChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.updateProgressState  = this.updateProgressState.bind(this);
    }
  handleQueryChange(event) {
    this.updateProgressState();
    this.setState({query: event.target.value});
  }
  handleRealmChange(event) {
    this.setState({realm: event.target.value});
    this.updateProgressState();
  }
  handleRegionChange(event) {
    this.setState({region: event.target.value});
    this.updateProgressState();
  }

  updateProgressState() {
    if (this.state.query && this.state.realm && this.state.region) {
      this.setState({ inProgress: false });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    WCLApi.parses.lookup(this.state.query, this.state.realm, this.state.region).then((data) => {
      this.props.onQuery(data)
      this.setState({ query: '', realm: '', region: 'eu' });
    }).finally(() => {
      this.setState({ loading: false });
    });
  }
  render() {
    const isLoading = this.state.loading;
    return !isLoading ? (
      <div>
          <span>
            <div className="flex flex-col">
              <form onSubmit={this.handleSubmit}>
                <input type="text"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  value={this.state.value}
                  onChange={this.handleQueryChange}
                />
                <input className="ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text"
                  value={this.state.realm}
                  onChange={this.handleRealmChange}
                />
                <select className="ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" value={this.state.region} onChange={this.handleRegionChange}>
                  <option value="eu">EU</option>
                  <option value="us">US</option>
                </select>
                <button
                  className={`${this.state.inProgress ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} ml-4 text-white font-bold py-2 px-4 rounded`}
                  type="submit"
                  disabled={this.state.inProgress}>
                  Lookup
                </button>
              </form>
            </div>
          </span>
      </div>
    ) : (
      <div>
        <h2 className="text-yellow-500">Loading..</h2>
      </div>
    )
  }
}

export default SearchForm;
