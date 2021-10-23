import React from 'react';
import SearchForm from './queryform/SearchForm';
import CharacterView from './queryform/CharacterView';
class QueryForm extends React.Component {
  constructor() {
      super();
      this.state = {showCharacter: false, data: {}};
      this.handleQuery  = this.handleQuery.bind(this);
      this.handleClose  = this.handleClose.bind(this);
  }
  handleQuery(data) {
    this.setState({ data: data, showCharacter: true });
  }
  handleClose() {
    this.setState({ data: {}, showCharacter: false });
  }
  render() {
    const showCharacter = this.state.showCharacter;
    return !showCharacter ? (
      <SearchForm onQuery={this.handleQuery}></SearchForm>
    ):(
      <CharacterView data={this.state.data} onClose={this.handleClose}></CharacterView>
    );
  }
}

export default QueryForm;
