const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'awake verify sunset unveil dynamic knee heart casino illness hello because two',
    'https://rpc-mumbai.maticvigil.com'
    );

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
    .send({from: accounts[0]});
    
    console.log('Result deployed to ', result.options.address);

}

deploy();