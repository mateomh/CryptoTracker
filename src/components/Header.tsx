import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { useAppStyles, darkTheme } from "../styles/useAppStyles";

const Header:React.FC = () => {
  const styles = useAppStyles();
  const navigate = useNavigate();

  const {currency, setCurrency} = CryptoState();

  return(
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={styles.HeaderTitle}
              onClick={()=>{navigate("/")}}
              variant="h6"
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              className={styles.CurrencySelect}
              value={currency}
              onChange={(e: any)=> setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;