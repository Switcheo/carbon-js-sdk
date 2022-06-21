import CarbonSDK from "../lib/CarbonSDK";
import { SWTHAddress } from "../lib/util/address";



const bytes = SWTHAddress.getAddressBytes('tswth1mw90en8tcqnvdjhp64qmyhuq4qasvhy2s6st4t', CarbonSDK.Network.TestNet);

console.log('bytes', Buffer.from(bytes).toString('hex'))