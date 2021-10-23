import React from 'react';
import CharacterDetail from './CharacterDetail';
import CharacterGear from './CharacterGear';

class CharacterView extends React.Component {
  constructor() {
      super();
      this.handleClose  = this.handleClose.bind(this);
  }
  handleClose() {
    this.props.onClose();
  }
  render() {
    const character = `${ this.props.data.characterName } (${ this.props.data.spec } ${ this.props.data.class })`;
    return (
      <div>
        <div>
          <h1 className="uppercase text-yellow-500 text-2xl mb-2">{character}</h1>
          <button
            className='bg-yellow-800 hover:bg-blue-700 ml-4 uppercase text-white font-bold py-2 px-4 rounded'
            onClick={this.handleClose}
            type="submit"
            >
            Close character
          </button>
          <CharacterDetail character={this.props.data}></CharacterDetail>
          <CharacterGear items={this.props.data.gear}></CharacterGear>
        </div>
      </div>
    )
  }
}

export default CharacterView;
