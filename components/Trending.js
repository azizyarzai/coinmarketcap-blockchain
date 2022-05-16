import React, { useState } from 'react'
import Rate from '../components/cmc-table/Rate'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'

const styles = {
  trendingWrapper: `mx-autos max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
}

const Trending = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Marketcap
          </h1>
          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day.&nbsp;
            <span className="underline">Read More</span>
          </p>
          <br />
          <div className={styles.flexCenter}>
            {/* <TrendingCard
              title="Trending"
              icon={fire}
              tredingData={TrendingData}
            />
            <TrendingCard
              title="Biggest gainers"
              icon={fire}
              tredingData={gainers}
            />
            <TrendingCard
              title="Recently Added"
              icon={recent}
              tredingData={TrendingData}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
