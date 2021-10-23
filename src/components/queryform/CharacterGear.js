import React from 'react';

class CharacterGear extends React.Component {
  render() {
    const assetUrl = process.env.REACT_APP_WCL_ASSETS;
    const items = this.props.items;
    return (
      <div className="flex mt-4 p-2 w-2/3 m-auto border border-yellow-100 text-left">
          <div className="flex flex-col">
            {items.map(item => (
              <div className="flex text-blue-300 ">
                <div class="ml-1">
                  <img
                    src={ assetUrl + item.icon }
                    alt={ item.name }
                    width="40" />
                </div>
                <div className="mt-2 ml-4">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default CharacterGear;
