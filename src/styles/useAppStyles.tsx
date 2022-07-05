import { createTheme, makeStyles } from '@material-ui/core';
import { AppStyles } from '../interfaces/appInterfaces';


export const useAppStyles = ():AppStyles => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight:'100vh',
    },
    HeaderTitle: {
      flex: 1,
      color: 'goldenrod',
      fontWeight:'bold',
      cursor: 'pointer',
    },
    CurrencySelect: {
      width: 100,
      height: 40,
      marginLeft: 15,
    }
  })
  
  );
  
  return useStyles();
}

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  }
});