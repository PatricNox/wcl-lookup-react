import React from 'react';
import WCLApi from '../../api/WCLApi';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = { query: '', realm: '', region: 'eu', loading: false, inProgress: true, message: '' };
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

    let charData = null;
    this.setState({ loading: true, message: 'loading..' });

    // Query backend using superpromise.
    WCLApi.parses.lookup(this.state.query, this.state.realm, this.state.region).then((data) => {
      // If we got a character name, store the data in a scoped variable.
      if (data.characterName) charData = data;
      else this.setState({message: 'Character not found'})
      this.setState({ query: '', realm: '', region: 'eu' });
    }).finally(() => {
      this.setState({ loading: false });

      // Finally, bubble to parentComponent.
      // Must be the last event due to we can't perform a react state
      // update on an unmounted component. (unmounts in parentComponent if we got data)
      if (charData) this.props.onQuery(charData);
    }).catch((e) => console.log(e));
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
                  value={this.state.query}
                  placeholder="Character"
                  onChange={this.handleQueryChange}
                />
                <input className="ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text"
                  value={this.state.realm}
                  placeholder="Realm (Server)"
                  onChange={this.handleRealmChange}
                />
                <select className="ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" value={this.state.region} onChange={this.handleRegionChange}>
                  <option value="eu">EU</option>
                  <option value="us">US</option>
                </select>
                <button
                  className={`${this.state.inProgress ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} ml-4 uppercase text-white font-bold py-2 px-4 rounded`}
                  type="submit"
                  disabled={this.state.inProgress}>
                  Lookup
                </button>
              </form>
            </div>
          </span>
          <div>
            <h2 className="mt-4 text-red-500 uppercase">{this.state.message}</h2>
          </div>
      </div>
    ) : (
      <div>
        <h2 className="text-yellow-500 uppercase">Loading..</h2>
      </div>
    )
  }
}

export default SearchForm;
