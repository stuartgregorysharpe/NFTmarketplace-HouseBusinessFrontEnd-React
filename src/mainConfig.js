import { InjectedConnector } from '@web3-react/injected-connector';
// import WalletConnect from "@walletconnect/client";
import QRCodeModal from '@walletconnect/qrcode-modal';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import dotenv from "dotenv";
dotenv.config();

export const POLLING_INTERVAL = 12000;

export const ERC20Address = '0xf6AD3B23F7E3dddF8FC75253DeE549Ce8130Dd7e';
export const HouseBusinessAddress = '0xcA94Bf86C10Aae6936f02ea8E6975D9111C71e0c';
export const MarketplaceAddress = '0xCb2a529e6662f318bc631808417E6ea86d0fc1e1'
export const HouseDocAddress = '0xd5B28c8bF487829D6A3B396B71DE7aDb35AA81Da';
export const StakingAddress = '0x1f9c5e90cb1Ef0fb05024d8ef499DA06eD1d1460';
export const ThirdPartyAddress = '0x836CC84a866380767536F72A3ff4252F4D2E3107';
export const OperatorAddress = '0x4Eb03157F3fc6e9b815CC457EACB7562Cd5bae7f';

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
// export const apiURL = "http://localhost:8080"; // Development server
export const apiURL = "https://off-backend.azurewebsites.net"; // Production server

export const secretKey = 'defi-business@Sec!*@#';

export const stripePublishKey =
	process.env.REACT_APP_STRIPE_API_KEY || 'pk_test_51NASr5DlH3rUeTvspdEFX05R8hZVZMj7GUZ1NKP3NvdhaSPbNX7vpOJybsKRUnB4z5oytvL98F6gA0e6K1uZ6Pwu00MJa941iy';

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
