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
    },
    Banner: {
      backgroundImage: "url(./banner2.jpg)",
    },
    BannerContent: {
      height: 400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop: 25,
    },
    Tagline: {
      display: "flex",
      height: "40%",
      flexDirection: "column",
      justifyContent: "space-around",
      textAlign: "center",
    },
    Carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    CarouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
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