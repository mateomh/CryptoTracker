import { Container, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { darkTheme, useAppStyles } from '../styles/useAppStyles';
import { CoinList } from '../utils/gecko-api';

export function numberWithCommas(x:number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable:React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)
  const navigate = useNavigate();
  const {currency, symbol} = CryptoState();
  const styles = useAppStyles();

  const tableHeaders = ["Coin", "Price", "24h Change", "Market Cap"]

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log("$$$$$$$$$$ COINS", data)

    setCoins(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return(
      coins.filter((coin:any) => {
        return (
          coin.name.toLowerCase().includes(search) ||
          coin.symbol.toLowerCase().includes(search))
      })
    )
  }
  

  return (
    <ThemeProvider theme= {darkTheme}>
      <Container>
        <Typography
          variant="h4"
          style={{margin: 18}}
        >
          Cryptocurrency Prices
        </Typography>
        <TextField
          label="Search for cryptocurrency"
          variant='outlined'
          style={{marginBottom: 20, width: "100%"}}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <TableContainer>
          { loading ? 
            (<LinearProgress style={{backgroundColor: "gold"}} />)
            : (
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((header) => {
                      return (
                      <TableCell
                        key={header}
                        align={header === "Coin" ? undefined : "right"}
                        style={{
                          color: "black",
                          fontWeight: "700"
                        }}
                      >
                        {header}
                      </TableCell>)
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                      handleSearch()
                      .slice((page - 1)* 10, (page - 1) * 10 + 10)
                      .map((coin: any) => {
                        const isProfit = coin.price_change_percentage_24h > 0
                        return(
                          <TableRow
                            onClick={() => navigate(`/coins/${coin.name}`)}
                            key={coin.name}
                            className={styles.row}
                          >
                            <TableCell
                              component="th"
                              scope='row'
                              style={{
                                display: "flex",
                                gap: 15
                              }}
                            >
                              <img 
                                src={coin.image}
                                alt={coin.name}
                                height="50"
                                style={{
                                  marginBottom: 10
                                }}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column"
                                }}
                              >
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                    fontSize: 22
                                  }}
                                >
                                  {coin.symbol}
                                </span>
                                <span
                                  style={{
                                    color: "darkgrey"
                                  }}
                                >
                                  {coin.name}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell align="right">
                              {symbol}{" "}
                              {numberWithCommas(coin.current_price.toFixed(2))}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                color: isProfit ? "rgb(14, 203, 129)" : "red",
                                fontWeight: 500,
                              }}
                            >
                              {isProfit && "+"}
                              {coin.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                            <TableCell align="right">
                              {symbol}{" "}
                              {numberWithCommas(
                                coin.market_cap.toString().slice(0, -6)
                              )}
                              M
                            </TableCell>
                          </TableRow>
                        )
                      })
                    }
                </TableBody>
              </Table>
            )
          }
        </TableContainer>
        <Pagination 
         count={((handleSearch()?.length / 10))}
         style={{
           padding: 20,
           width: "100%",
           display: "flex",
           justifyContent: "center"
          }}
          classes={{ul: styles.pagination}}
          onChange={ (_, value) => {
            setPage(value)
            window.scroll(0,450)
          }}
        />

      </Container>
    </ThemeProvider>
  )
}

export default CoinsTable