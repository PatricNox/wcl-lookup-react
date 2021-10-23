import React from 'react';

class CharacterDetail extends React.Component {
  render() {
    const talents = this.props.character.talents;
    const legendary = this.props.character.legendaryEffects[0];
    const assetUrl = process.env.REACT_APP_WCL_ASSETS;
    return (
      <div className="flex justify-between mt-4 p-2 w-2/3 m-auto border border-yellow-800 text-left">
        {/* Talents */}
        <div className="flex flex-col">
          <span class="uppercase text-xs  text-yellow-200">talents</span>
          <div className="flex">
            {talents.map(talent => (
              <div className="text-blue-300">
                <div class="ml-1">
                  <img
                    src={ assetUrl + talent.icon }
                    alt={ talent.name }
                    width="40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* rank */}
        <div className="flex flex-col">
          <span class="uppercase text-xs  text-yellow-200">rank</span>
          <div className="flex">
            <div className="text-3xl text-green-500">{ this.props.character.rank } / { this.props.character.outOf }</div>
          </div>
        </div>

        {/* Legendary */}
        <div class="flex flex-col justify-center">
          <span class="uppercase text-xs  text-yellow-200">legendary</span>
          <div className="uppercase text-yellow-500">{ legendary.name }</div>
          <img
            src={ assetUrl + legendary.icon }
            alt={ legendary.name }
            width="40" />
        </div>
      </div>
    )
  }
}

export default CharacterDetail;
