import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAppStyles, darkTheme } from "../styles/useAppStyles";

const Header:React.FC = () => {
  const styles = useAppStyles();
  const navigate = useNavigate();

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
            >
              <MenuItem>USD</MenuItem>
              <MenuItem>COP</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;