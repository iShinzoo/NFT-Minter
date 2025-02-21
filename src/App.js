import "./App.css";
import Routing from "./components/Routing";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet,
  polygon,
  optimism,
  arbitrum,
  base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "NFT Minter",
  projectId: process.env.REACT_APP_RAINBOW_WALLET_PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={
            darkTheme
            ({
            accentColor: "#4f46e5",
            accentColorForeground: "white",
            borderRadius: "medium",
          })}
          coolMode
        >
          <>
            <Routing />
          </>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
