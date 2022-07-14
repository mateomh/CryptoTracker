import { CircularProgress, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { CryptoState } from '../CryptoContext';
import { darkTheme, useAppStyles } from '../styles/useAppStyles';
import { chartDays } from '../utils/data';
import { HistoricalChart } from '../utils/gecko-api';
import SelectButton from './SelectButton';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CoinInfoChartProps {
  coin: any;
}

const CoinInfoChart:React.FC<CoinInfoChartProps> = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const styles = useAppStyles();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency))
    setHistoricalData(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
  },[currency, days]);

  return (
    <ThemeProvider
    theme={darkTheme}>
      <div className={styles.ChartContainer}>
        {
          !historicalData ?
          (<CircularProgress
            style={{color:"gold"}}
            size={250}
            thickness={1}
          />
          )
          :
          (
            <>
              <Line
                data={{
                  labels: historicalData.map((dataPoint: Array<number>) => {
                    let date = new Date(dataPoint[0])
                    let time = `${date.getHours()}:${date.getMinutes()}`
                    return days === 1 ? time : date;
                  }),
                  datasets: [{
                    data: historicalData.map((dataPoint: Array<number>) => dataPoint[1]),
                    label: `Price (Past ${days} Days)`,
                    borderColor: "goldenrod"
                  }],
                }} 
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    }
                  }
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {chartDays.map((day) => {
                  return (
                  <SelectButton
                    onClick={() => setDays(day.value)}
                    selected={day.value === days}
                    key={day.label}
                  >
                    {day.label}
                  </SelectButton>)
                })}
              </div>
            </>
          )
        }
      </div>
    </ThemeProvider>
  )
}

export default CoinInfoChart