import React from 'react';

class CharacterView extends React.Component {
  constructor() {
      super();
      this.handleClose  = this.handleClose.bind(this);
  }
  handleClose() {
    this.props.onClose();
  }
  render() {
    return (
      <div>
        <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 ml-4 uppercase text-white font-bold py-2 px-4 rounded'
          onClick={this.handleClose}
          type="submit"
          >
          Close character
        </button>
        </div>
      </div>
    )
  }
}

export default CharacterView;
