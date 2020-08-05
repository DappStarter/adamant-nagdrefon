require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth ridge coconut good nasty flower tell'; 
let testAccounts = [
"0x81159e939c06f3854feebf3467a87cdff0e79bf214fabd3e5f9f0d8e487c6ffd",
"0x17b52938ad803b18a565744cd4b822e31159d5e49a72d4649ec0cebff2c67ef2",
"0xf669280dccf9fdd9b08bbc8d3cf770117d3361857f0e0689472019956e57179d",
"0x138c9174d44999548cc6a789b232bccdf833752f3e03b17c4d46c434d259d341",
"0x46180034635edca6061a1e64455938eec25f67cd7d562a550a74040cade1505c",
"0xfd6e383e007ec6ef14a4e0d81571109fab3a93b14ef411763190d79dca27d319",
"0x6d3dad555639773b11f7de7464476f39c77592eb33b946065f72f3cb33f6060e",
"0xa475e288c7ea9187e30751759ebd11ecb52cb30aa1eb878cd4fb31c16b1d37d2",
"0x9fad2bb6779bf374e213ca65b8e303d51a3c98e0be7229e0fe1d2185a859db34",
"0xffe20cfea37f43c435ec1e70b96214c0833f0130f166f2f3a3f718510ca43f21"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
