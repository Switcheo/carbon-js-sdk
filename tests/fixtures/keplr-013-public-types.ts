import type { Keplr } from "../../lib";

declare const keplr: Keplr;

void keplr.signDirectWithMessages("carbon-1", "swth1contract", [], {
  memo: "Carbon compatibility",
  sync: true,
});
void keplr.signFigureMarketsAuth("carbon-1", "swth1contract", "Carbon compatibility");
void keplr.getAllWallets();
void keplr.switchAccount("wallet-id");
