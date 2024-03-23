import React from "react";

function Pokemon(props) {
  const { name, type, base, image } = props;

  return (
    <div className="pokemon-container">
      <div className="pokemon">
        <div className="pokemon-image-container">
          <img src={image} alt={name} className="pokemon-image" />
        </div>

        <div className="pokemon-info">
          <div className="pokemon-name-container">
            <h2>{name}</h2>
          </div>
          <div className="pokemon-type-container">
            <p1>{type.join(" ")} </p1>
          </div>
        
          <div className="base-stats">
            <div className="pokemon-base-stat">
              <p>HP:{base.HP}  Sp.Attack:{base["Sp. Attack"]}</p>
            </div>
            {/* <div className="pokemon-base-stat">
              <p>Attack:{base.Attack}  Sp.Defense:{base["Sp. Defense"]}</p>
            </div>
            <div className="pokemon-base-stat">
              <p>Defense:{base.Defense}  Speed:{base.Speed}</p>
            </div>
           */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;