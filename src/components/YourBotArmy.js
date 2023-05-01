import React from "react";
import BotCard from "./BotCard.js";

 // destructured props passed as arguments to YourBotArmy component
function YourBotArmy({botArmy, addBot, deleteBot}) { 
    
 //passed data to BotCard component as props
    const displayArmyBots = botArmy.map((bot) => (
      <BotCard key = {bot.id} bot = {bot} inArmy = {true} deleteBot = {deleteBot} addBot = {addBot}/>
    ))

    console.log(botArmy);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
         
        YOUR BOT ARMY
           {displayArmyBots}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
