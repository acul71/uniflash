import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Uniswap Flashloans testing
          Today I’m going to show you the basic tutorial of Flash Swaps of Uniswap V3. This might be helpful when you want to make a profit from arbitrage trading.
The tutorial repo is here.
Let’s Get Started😁
Installation and Setup
Install Node.js & yarn, if you haven’t already.
2. Clone This Repo
Run the following command.
git clone https://github.com/yuichiroaoki/flash-swap-example.git
Quickstart
Right now this repo only works with hardhat mainnet fork. With hardhat, you can run your smart contracts on mainnet fork. For more: Harhdat Docs
Setup Environment Variables
You’ll need an ALCHEMY_MAINNET_RPC_URL environment variable. You can get one from Alchemy website for free.
Then, you can create a .env file with the following.
ALCHEMY_MAINNET_RPC_URL='your-own-alchemy-mainnet-rpc-url'
2. Install Dependencies
Run the following command.
yarn install
3. Compile Smart Contracts
Run the following command.
yarn compile
4. Execute Flash Swaps on Mainnet Fork 🔥
Run the following command, and it will run scripts/flashswaps.ts script.
yarn flashswaps
Expected Outputs
$ yarn flashswaps
yarn run v1.22.5
$ npx hardhat run scripts/flashswaps.ts
No need to generate any newer typings.
deployer's initial balance 0
deployer's ending balance 4.860772792026915
Congrats! You earned 4.860772792026915 DAI !!
Done in 40.72s.
This is how you implement flash swaps and earn 4 DAI on mainnet fork.
        </p>
      </header>
    </div>
  );
}

export default App;
