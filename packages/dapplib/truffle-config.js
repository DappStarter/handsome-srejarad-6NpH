require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind hour grace fantasy frame secret'; 
let testAccounts = [
"0xf689c5e1cf7985d45fe9da2fe7bbb86c2ddd707c0c4fdf066ff8c03c0a95d398",
"0xde758e3b6d781427544dd68f739c9e7f01ea8d514118d596dea2317d5b0f554e",
"0xb1e3a14884c732699f27d41d5fc4052373d17b60b315454d10d42855e93800c7",
"0x1e533599a721d20928730d47ecce1a69ed6f4c8c6fbf62e9e237ea7a01cf1eaa",
"0x0563ee0f2f97d6af3e518587053b778c1e11a587a26ceeffb2d10137966da6d3",
"0x5caa2252b6feba800170efb5f724bdb995821c5c9e692d8d015b1bc41c935671",
"0xceebe7d90661bf4f777f202e6ae7c9e117452a85627127f473d7d9681384f498",
"0xc166db2638424a8444c1cc3decdac2093893ffb19d0e233e05b2122702160ee2",
"0x3bce2bb6191673e402651d1b8149bc98d23d365793e685ca5aedc8e5e9f9f96d",
"0xd8219471ddda354ad329e53685eebc85cc1553b8b889b8bc2a10a77945af0a4d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


