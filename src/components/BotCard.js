import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

// destructured props passed as arguments to BotCard component
function BotCard({ bot, addBot, inArmy, deleteBot}) { 
  
  return (
    <div className="column">
      <div
        key={bot.id}
        onClick={() => {addBot(bot, inArmy)}}
      >
        <div>
          <img alt="oh no!" src={bot.avatar_url} />
        </div>

        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
       
          <span>
            {bot.health}
          </span>

          <span>
            {bot.damage}
          </span>

          <span>
            {bot.armor}
          </span>
          <span>
              <button
                className="button"
                onClick={() =>
                  deleteBot(bot)
                }
              >
                x
              </button>
          </span>
      </div>
    </div>
  );
}

export default BotCard;