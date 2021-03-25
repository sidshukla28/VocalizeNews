import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Modi, Elon Musk, Bitcoin, Apple, Tesla, SpaceX, Google', text: 'What\'s up with Modi' },
    { color: '#283593', title: 'News by Sources', info: 'BBC News, ABC News, CNN, Time, IGN, Buzzfeed, Wired ', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles }) => {
    const classes = useStyles(); 

    if(!articles.length){
        return (
            <Grow in> 
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} classNAme={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {
                                 infoCard.info 
                                     ? ( <Typography variant="h6">
                                            <strong>
                                              <center>{infoCard.title.split(' ')[2]}:</center>
                                              </strong>
                                              
                                              {infoCard.info}
                                        </Typography>) : null}
                                        <br />
                                   <center> <Typography variant="h6">Try saying:<br /><i>{infoCard.text} </i></Typography></center>
                            </div>
                         </Grid>   
                    ))}
                  </Grid>
            </Grow> 
        );
    }
    return (
        <Grow in> 
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex' }}>
                         <NewsCard article={article} i={i} />
                    </Grid>
                ))} 

            </Grid>
           
 
        </Grow> 
    );
}

export default NewsCards;