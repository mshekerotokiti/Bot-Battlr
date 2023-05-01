import React from "react";
import BotCard from "./BotCard";

// destructured props passed as arguments to BotCollection component
function BotCollection({bots, addBot, deleteBot}) { 

   //passed data to BotCard component as props
      const displayBots = bots.map((bot) => (
      <BotCard key = {bot.id} bot = {bot} addBot = {addBot} inArmy = {false} deleteBot = {deleteBot}/>
     ))


  return (
    <div className="column">
      <div className="row" >
        BOT COLLECTION
        {displayBots}
      </div>
    </div>
  );
}

export default BotCollection;