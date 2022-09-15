import './App.css';
import React from 'react';

function App() {
  
  const goToTelegram = () => {
    window.open('https://t.me/ichigoichiofficial', "_blank");
  }
  const goToTwitter = () => {
    window.open('https://twitter.com/Ichigoichie_ETH?t=3Ib2oXF0iSTahelHgVhYXg&s=35', "_blank");
  }
  const goToDex = () => {
    window.open('https://www.dextools.io/app/ether/pair-explorer/0x5ad7452ceafdaeb0936507d5bb5890964ef56bd3', "_blank")
  }
  const goToUniswap = () => {
    window.open('https://app.uniswap.org/#/swap?outputCurrency=0x1c4853ec0d55e420002c5efabc7ed8e0ba7a4121&chain=mainnet', "_blank")
  }
  const walletAddress = () => {
    navigator.clipboard.writeText("0x1c4853ec0d55e420002c5efabc7ed8e0ba7a4121");
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
              <button className='button-34' onClick={walletAddress}>0x1c4853ec0d55e420002c5efabc7ed8e0ba7a4121</button>
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
