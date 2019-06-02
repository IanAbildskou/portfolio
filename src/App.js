import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './App.css';
import workData from './workData';
import freeTimeProjectsData from './freeTimeProjectsData';
import schoolData from './schoolData';
import travelData from './travelData';
import otherData from './otherData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
}));

function App() {
  const classes = useStyles();
  const listList = [{
      title: 'Work',
      data: workData
    }, {
      title: 'Free time projects',
      data: freeTimeProjectsData
    }, {
      title: 'School',
      data: schoolData
    }, {
      title: 'Travel',
      data: travelData
    }, {
      title: 'Other',
      data: otherData
    }];
  return (
    <div className="App">
      <CssBaseline />
      <h1>Hi! I'm Ian.</h1>
      {listList.map(({ title, data }) => (
        <div>
          <h2>{title}</h2>
          <GridList className={classes.gridList} cols={4}>
            {data.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ))}
    </div>
  );
}

export default App;
