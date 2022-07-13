import { LinearProgress, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import { CryptoState } from "../CryptoContext";
import { useAppStyles } from "../styles/useAppStyles";
import { SingleCoin } from "../utils/gecko-api";
import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas } from "../components/CoinsTable";

const Coins:React.FC = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<any>();
  const { currency, symbol } = CryptoState();
  const styles = useAppStyles();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  }

  useEffect(() => {
    fetchCoin()
  }, [])

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  
  return(
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={styles.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={styles.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={styles.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfoChart />

    </div>
  );
}

export default Coins;
