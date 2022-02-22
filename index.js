const bip39 = require('bip39');
const lineByLine = require('n-readlines');
const { hdkey } = require('ethereumjs-wallet');

let line;
const liner = new lineByLine('english.txt');
const address = 'your address here';

const runme = async (word) => {
  const seed = `${word} your-seed-here`;
  const seedBuffer = await bip39.mnemonicToSeed(seed);
  const HDwallet = hdkey.fromMasterSeed(seedBuffer);
  const mainWallet = HDwallet.derivePath("m/44'/60'/0'/0/0").getWallet();

  if (mainWallet.getAddressString() == address.toLowerCase())
    return console.log('recovered seed phrase is: ', seed);
};

while ((line = liner.next())) {
  runme(line.toString());
}
