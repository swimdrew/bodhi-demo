import { Provider } from "@acala-network/bodhi";
import { createApiOptions } from "@acala-network/eth-providers";
import { WsProvider } from "@polkadot/api";

async function main() {
  const evmprovider = new Provider(
    createApiOptions({
      provider: new WsProvider("wss://karura-rpc-0.aca-api.network"),
    })
  );

  // Grab the following tx:
  // https://blockscout.karura.network/tx/0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e/token-transfers
  const tx = await evmprovider.getTXReceiptByHash(
    "0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e"
  );
  const recepit = await evmprovider.getTransactionByHash(
    "0xa82791bb02323ead8caa02adadd9fa2fde015d81bc170e5fd484306d060d016e"
  );
  console.log(`tx: ${tx}\nreceipt: ${recepit}`);
}

main();
