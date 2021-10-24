import React from 'react';

function itemColorByQuality(quality) {
  switch (quality) {
    case "common":
      return 'text-white';
    case "uncommon":
      return 'text-green-500';
    case "rare":
      return 'text-blue-500';
    case "epic":
      return 'text-purple-500';
    case "legendary":
      return 'text-yellow-500';
    case "artifact":
      return 'text-yellow-200';
    case "heirloom":
      return 'text-blue-300';
    default:
      // Poor
      return 'text-gray-500';
  }
}
class CharacterGear extends React.Component {
  render() {
    const assetUrl = process.env.REACT_APP_WCL_ASSETS;
    const items = this.props.items;
    return (
      <div className="flex mt-4 p-2 w-2/3 m-auto border border-yellow-100 text-left">
          <div className="flex flex-col">
            {items.map(item => (
              <div
                className="flex"
                key={item.id}
              >
                <div className="ml-1">
                  <img
                    src={ assetUrl + item.icon }
                    alt={ item.name }
                    width="40" />
                </div>
                <div className="mt-2 ml-4">
                  <a
                    href={`https://www.wowhead.com/item=${item.id}`}
                    className={itemColorByQuality(item.quality)}
                    >
                      { item.name } ({ item.itemLevel })
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default CharacterGear;
