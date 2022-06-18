import { createApiOptions, EvmRpcProvider } from "@acala-network/eth-providers";
import { WsProvider } from "@polkadot/api";

async function main() {
  const evmprovider = new EvmRpcProvider(
    "wss://karura-rpc-0.aca-api.network",
    {
      // subqlUrl is required to query historial data
      // can be found in the [doc](https://evmdocs.acala.network/network/network-configuration#karura-main-network)
      subqlUrl: 'https://karura-evm-subql.aca-api.network',
    }
  );
  const balance = await evmprovider.getBalance(
    "0x1c3D657F0518A094BF351852bad4285EFc0D5Ce9"
  );
  // Grab the following tx:
  // https://blockscout.karura.network/tx/0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e/token-transfers
  const tx = await evmprovider.getTXReceiptByHash(
    "0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e"
  );
  const recepit = await evmprovider.getTransactionByHash(
    "0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e"
  );

  // tx & receipt are null
  console.log(`balance: ${balance.toString()}\ntx: ${JSON.stringify(tx)}\nreceipt: ${JSON.stringify(recepit)}`);

  await evmprovider.disconnect();
}

main();
