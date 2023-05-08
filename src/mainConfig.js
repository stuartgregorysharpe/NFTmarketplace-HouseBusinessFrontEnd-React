import { InjectedConnector } from '@web3-react/injected-connector';
// import WalletConnect from "@walletconnect/client";
import QRCodeModal from '@walletconnect/qrcode-modal';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import dotenv from "dotenv";
dotenv.config();

const INFURA_KEY = '28e2008ae4974ac4942f6854a85fe21d';

export const POLLING_INTERVAL = 12000;


export const ERC20Address = '0x6210e82D02191ba2e3CAB0486C4777690DcA1242';
export const HouseBusinessAddress = '0x69f87B80CFBDAdFE8D43c4D35A4CbD6C43efFC77';
export const ContractAddress = '0x04819216B95AEaf1cb35f7fbEdeFC164e484103e';
export const StakingAddress = '0x1689A9eF4Fd10b77515262A96633105b04AeBF33';
export const ThirdPartyAddress = '0xec1aceD48c8264412827e957e26022D7a9ca8C9A';


// p => 0x4bF6b957744eE2E99e40c43612Cb0D25a63b2454
// m => 0xc4AF5D47A46Ade2865652CE834Ca7F47539cc30C

const config = {
  // development: {
  //   CHAIN_NAME: 'Goerli Testnet',
  //   CHAIN_ID: 5,
  //   CURRENCY: 'ETH',
  //   EXPLORER: 'https://goerli.etherscan.io/',
  //   WEBSOCKET_1: 'wss://goerli.infura.io/ws',
  //   RPC_URL_1: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  //   RPC_URL_2: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  //   RPC_URL_3: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  // },
  development: {
      CHAIN_NAME: "Polygon Testnet",
      CHAIN_ID: 80001,
      CURRENCY: "MATIC",
      EXPLORER: "https://mumbai.polygonscan.com/",
      WEBSOCKET_1: "wss://mumbai-dagger.matic.today",
      RPC_URL_1: "https://matic-mumbai.chainstacklabs.com",
      RPC_URL_2: "https://rpc-mumbai.maticvigil.com",
      // RPC_URL_3: "https://matic-testnet-archive-rpc.bwarelabs.com",
  },
  production: {
    CHAIN_NAME: 'Polygon Mainnet',
    CHAIN_ID: 137,
    CURRENCY: 'MATIC',
    EXPLORER: 'https://polygonscan.com/',
    WEBSOCKET: 'wss://rpc-mainnet.matic.network',
    RPC_URL_1: 'https://matic-mainnet.chainstacklabs.com',
    RPC_URL_2: 'https://rpc-mainnet.maticvigil.com',
    RPC_URL_3: 'https://rpc-mainnet.matic.quiknode.pro',
  },
};

export const networkConfig = config['development'];

export const secretKey = 'defi-business@Sec!*@#';

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Ethereum Mainnet
    5, // Goerli Testnet
    56, // Binance Smart Chain Mainnet
    97, // Binance Smart Chain Testnet
    137, // Polygon Mainnet
    80001, // Polygon Mumbai Testnet
  ],
});

export const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: 'https://bridge.walletconnect.org',
  qrcodeModal: QRCodeModal,
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: 'web3-react-demo',
});

export const connectorsByName = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink,
};

export const zeroAddress = '0x0000000000000000000000000000000000000000';
