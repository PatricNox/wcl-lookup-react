import React from 'react';
import SearchForm from './queryform/SearchForm';
class QueryForm extends React.Component {
    constructor() {
        super();
        this.state = {showCharacter: false, inProgress: true, characterData: {}};
        this.handleQuery  = this.handleQuery.bind(this);

    }
  handleQuery(event) {
    console.log(event);
    // this.setState({query: event.target.value});
  }
  render() {
    const showCharacter = this.state.showCharacter;
    return !showCharacter ? (
      <SearchForm onQuery={this.handleQuery}></SearchForm>
    ):(
      <div>
        {this.state.characterData.characterName}
      </div>);
  }
}

export default QueryForm;
