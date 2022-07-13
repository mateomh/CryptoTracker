import { createTheme, makeStyles } from '@material-ui/core';
import { AppStyles } from '../interfaces/appInterfaces';


export const useAppStyles = ():AppStyles => {
  const useStyles = makeStyles((theme) => ({
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
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
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