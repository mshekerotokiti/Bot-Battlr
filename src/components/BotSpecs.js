import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot }) {
  return (
        <div className="row">

          <div>
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>

          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div>
              <div >
                <div className="row">
                  <div className="column">
                    <i/>
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i/>
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i/>
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default BotSpecs;