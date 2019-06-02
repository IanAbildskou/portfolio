import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
    padding: '0 16px',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5em'
  },
  tile: {
    borderRadius: '8px'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
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
  const [open, setOpen] = React.useState(false);

  function handleClickOpen(title) {
    setOpen(title);
  }

  function handleClose(event) {
    event.stopPropagation();
    setOpen(false);
  }
  return (
    <div className="App">
      <CssBaseline />
      <h1>Hi! I'm Ian.</h1>
      {listList.map(({ title, data }) => (
        <div key={title}>
          <h2>{title}</h2>
          <GridList className={classes.gridList} cols={window.innerWidth / 250}>
            {data.map(tile => (
              <GridListTile className='tile' classes={{tile: classes.tile}} onClick={() => handleClickOpen(tile.title)} key={tile.title}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  className='title-bar'
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
                <Dialog
                  open={open === tile.title}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{tile.title}</DialogTitle>
                  <DialogContent>
                    <div className='dialog-image' style={{backgroundImage: 'url(' + tile.img + ')'}}></div>
                    <DialogContentText id="alert-dialog-description">
                      {tile.text}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridListTile>
            ))}
          </GridList>
        </div>
      ))}
    </div>
  );
}

export default App;
