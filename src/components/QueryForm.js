import React from 'react';

const QueryFormView = props => {
  if (!props.searched) {
    return (
        <div>
           <form>
               <input type="text"/>
               <input type="submit"/>
            </form> 
        </div>
    );
  }
  return null;
};

const QueriedResultView = props => {
  if (props.searched) {
    return (
        <div>
            <h1>Queried</h1>
        </div>
    );
  }

  return null;
};

class QueryForm extends React.Component {
  render() {
    return (
        <div>
            <QueryFormView hasQueired={this.props.searched} />
            <QueriedResultView hasQueired={this.props.searched} />
        </div>
    );
  }
}

export default QueryForm;
