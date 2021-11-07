import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1><b>Uniswap Flashloans testing</b></h1>
          <p>This is a basic tutorial of Flash Swaps of Uniswap V3. This might be helpful when you want to make a profit from arbitrage trading.</p>
          <p>Let’s Get Started😁</p>
          <p>Installation and Setup</p>
          <p>Install Node.js & yarn, if you haven’t already.</p>
          <p><b>1. Clone This Repo</b></p>
          <p>Run the following command.</p>
          <p><i><code>git clone https://github.com/yuichiroaoki/flash-swap-example.git</code></i></p>
          <p>Quickstart</p>
          <p>Right now this repo only works with hardhat mainnet fork. With hardhat, you can run your smart contracts on mainnet fork. For more search: Harhdat Docs</p>
          <p>Setup Environment Variables</p>
          <p>You’ll need an ALCHEMY_MAINNET_RPC_URL environment variable. You can get one from Alchemy website for free.</p>
          <p>Then, you can create a .env file with the following.</p>
          <p><i><code>ALCHEMY_MAINNET_RPC_URL='your-own-alchemy-mainnet-rpc-url'</code></i></p>
          <p><b>2. Install Dependencies</b></p>
          <p>Run the following command.</p>
          <p><i><code>yarn install</code></i></p>
          <p><b>3. Compile Smart Contracts</b></p>
          <p>Run the following command.</p>
          <p><i><code>yarn compile</code></i></p>
          <p><b>4. Execute Flash Swaps on Mainnet Fork 🔥</b></p>
          <p>Run the following command, and it will run scripts/flashswaps.ts script.</p>
          <p><code>yarn flashswaps</code></p>
          <p>Expected Outputs</p>
          <span>
            <code>
            $ yarn flashswaps<br></br>
            yarn run v1.22.5<br></br>
            $ npx hardhat run scripts/flashswaps.ts<br></br>
            No need to generate any newer typings.<br></br>
            deployer's initial balance 0<br></br>
            deployer's ending balance 4.860772792026915<br></br>
            Congrats! You earned 4.860772792026915 DAI !!<br></br>
            Done in 40.72s.
            </code>
          </span>
          <p>This is how you implement flash swaps and earn 4 DAI on mainnet fork.</p>
          <br></br>
      </header>
    </div>
  );
}

export default App;
