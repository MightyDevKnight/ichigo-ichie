import './App.css';
import React from 'react';

function App() {
  
  const goToTelegram = () => {
    window.open('https://t.me/ichigoichiofficial', "_blank");
  }
  const goToTwitter = () => {
    window.open('https://twitter.com/Ichigoichie_ETH?t=G8Lg7D4hICbdY7PL4v1W-g&s=09', "_blank");
  }
  const goToDex = () => {
    window.open('https://www.dextools.io/app/ether/pair-explorer/0xe4ce706711a10c42d63164289ba8ef6b93e8c224', "_blank")
  }
  const goToUniswap = () => {
    window.open('https://app.uniswap.org/#/swap?outputCurrency=0xe84a63365d5afc66698418413e5c97b887d96eff&chain=mainnet', "_blank")
  }
  const walletAddress = () => {
    navigator.clipboard.writeText("0xe84a63365d5afc66698418413e5c97b887d96eff");
  }
  const goToMedium = () => {
    window.open('https://medium.com/@ichigo_ichi', "_blank");
  }

  return (
    <div className="App">
      <body>
        <div className='background-image'>
          <div className='title'  >Ichigo Ichie</div>
            <div className='wallet'>
              <div>
                <button className='telegram-button' onClick={goToTelegram}></button>
            <button className='twitter-button' onClick={goToTwitter}></button>
              <button className='medium-button' onClick={goToMedium}></button>
              </div>
              <button className='button-34' onClick={walletAddress}>0xe84a63365d5afc66698418413e5c97b887d96eff</button>
            </div>
            <div className='action-button'>
              <div className='dex-button' onClick={goToDex}><button className='button-33'>Dextools</button></div>
              <button className='button-33' onClick={goToUniswap}>Uniswap</button>
            </div>
          <div className='copyright'>@COPYRIGHT 2022</div>
        </div>
      </body>
    </div>
  );
}

export default App;
