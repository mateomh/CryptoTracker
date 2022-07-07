import { Container, Typography } from '@material-ui/core';
import React from 'react'
import { useAppStyles } from '../styles/useAppStyles';
import Carousel from './Carousel';

const Banner:React.FC = () => {
  const styles = useAppStyles();

  return (
    <div className={styles.Banner}>
      <Container className={styles.BannerContent}>
        <div className={styles.Tagline}>
          <Typography
            variant='h2'
          >
            Crypto Hunter
          </Typography>

          <Typography>
            This is the best tracker
          </Typography>

        </div>
        <Carousel/>
      </Container>

    </div>
  )
}

export default Banner;