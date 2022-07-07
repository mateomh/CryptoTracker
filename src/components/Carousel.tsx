import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { useAppStyles } from '../styles/useAppStyles'
import { TrendingCoins } from '../utils/gecko-api';

const Carousel = () => {
  const styles = useAppStyles();
  const { currency } = CryptoState();
  const [trendingCoins, setTrendingCoins] = useState([]);

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  };

  const items:any = trendingCoins.map((coin: any) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    // const color = (profit > 0) ? "rgb(14, 203, 129)" : "red"
    return(
      <Link
        to={`/coins/${coin.id}`}
        className={styles.CarouselItem}
      >
        <img 
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{marginBottom: 10}}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
      </Link>
    )
  });

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrendingCoins(data);
  }

  useEffect(() => {
    console.log("EFFECT")
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div className={styles.Carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        responsive={responsive}
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        items={items}
      />
    </div>
  )
}

export default Carousel