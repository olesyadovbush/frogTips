import React, { useState, useEffect, useRef } from 'react';
import FrogImage from './images/FROG.png';
import './App.css';
import { getData } from './services/dataHelpers'

interface Tip {
  id: number;
  status: string;
  submitter_api_key: null;
  timestamp: number;
  tip: string;
  tweeted: number;
  twitter_tweet_id: number;
}

const App = () => {

const [id, setId] = useState<number>();
const [tips, setTips] = useState<Tip[]>([]);
const [tip, setTip] = useState<string[]>();


useEffect(() => {
  getTips().then(data => {
    setTips(data);
    setId(data[0].id);
  })
}, [])

  const getTips =  (): Promise<Tip[]> => {
    return getData("https://frog.tips/api/3/tips")
}
const getTipById = (id: number) => {
  const result: string[] = 
  tips.filter(tip => tip.id === id)
  .map(tip => tip.tip);
  return result;
}
useEffect(() => {
  if(id) setTip(getTipById(id));
}, [id])

const getNextTip = () => {
  const rand = tips[Math.floor(Math.random() * tips.length)];
  if(rand) {
    setId(rand.id);
    setTip(getTipById(rand.id));
  }
    if (id) setTips(deleteTipById(id));
  if(tips.length === 5){
    getTips().then(data => {
      setTips(data);
      setId(data[0].id);
    })
  }
}

const deleteTipById = (id: number) => {
  const currentTip: Tip[] = tips.filter(tip => tip.id === id);
  const indexOfCurrentTip: number = tips.indexOf(currentTip[0]);
  const result: Tip[] = [...tips.slice(0, indexOfCurrentTip), ...tips.slice(indexOfCurrentTip+1)];
  return result;
}

  return (<>
            <div id="CROAK">
              <div className="heading">HOW TO OPERATE YOUR FROG</div>
              <div id="FROG" onClick={getNextTip}>
                  <img src={FrogImage} className="frog"/>
              </div>
              <div id="instructions" className="instructions">CLICK FROG FOR ANOTHER TIP</div>
              <div id="tip" className="tip_content">
                  <div id="tip_id" className="tip_id">&nbsp;Tip {id}:</div>
                  {tip || "This is your tip"}
              </div>
          </div>
        </>
      );
    }

export default App;
