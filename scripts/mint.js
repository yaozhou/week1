const hre = require("hardhat");
const config = require('../config.json')

const contract_name = config['contract_name']
const contract_address = config['contract_address']
const wallet_address = config['wallet_address']
const meta_data_cid = config['meta_data_cid']

async function mint() {
    const contract_factory = await hre.ethers.getContractFactory(contract_name);
    const contract = await contract_factory.attach(contract_address);

    const tx = await contract.safeMint(wallet_address, 'ipfs://' + meta_data_cid,  {
        gasLimit: 4200000
    });

    console.log(tx)
}

mint()
