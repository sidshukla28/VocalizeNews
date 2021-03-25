import React, { useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


import NewsCards from './components/newsCards/NewsCards';
import useStyles from './styles.js'; 
//import voice from '.image/voice.jpg';

const alanKey = '1fc940618eeb0426c223f1f81c4205852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key : alanKey,
      onCommand: ({command, articles }) => {
        if (command === 'newHeadlines' ) {
          setNewsArticles(articles);           
        }
      }
    })
  }, [])
  return(
    <div>
      <div className={classes.logoContainer}>
          <img src="voicefn.png" className={classes.alanLogo} alt="alan logo" />
      </div>
      <NewsCards articles= {newsArticles} />
    </div>
  );
}

export default App;