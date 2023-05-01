import React, { useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {                                            
    //useState to update the fetched data and update bots into army
   const [bots, setBots] = useState([])                               
   const [botArmy, setBotArmy] = useState([])

   //useEffect hook to fetch our data from server
   useEffect(() => {                                                
      fetch("http://localhost:8001/bots") 
      .then((res) => res.json())
      .then((bots) => setBots(bots))
   }, [])

    
   if(!bots){
    return <h2>Just a while, be patient a little</h2>
   }
   
   //delete button forever after clicking the delete button
   function deleteBot(bot){
    fetch(`http://localhost:8001/bots ${bot.id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
     .then((res) => {
      setBots(bots.filter(({id}) => id !== bot.id));
      setBotArmy(botArmy.filter(({id}) => id !== bot.id))
      console.log(res);
     })
   }

     //click function to add & remove bots to bot army when clicked
   function addBot(bot, inArmy) {
    //inArmy === true if bot is already in botArmy

    if (botArmy.includes(bot) && inArmy === true) {
      //remove bot from botArmy state

      setBotArmy(botArmy.filter(({id}) => id !== bot.id));
      
    }

     else if (!botArmy.includes(bot) && inArmy === false) {
       //add to botArmy state

        setBotArmy([...botArmy, bot])
       
    }
}
  return (
    <div>
      <YourBotArmy botArmy = {botArmy} addBot = {addBot} deleteBot = {deleteBot}/>
      <BotCollection bots = {bots} addBot = {addBot} deleteBot = {deleteBot}/>
    </div>
  )
}

export default BotsPage;