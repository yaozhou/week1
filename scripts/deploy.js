const hre = require("hardhat");
const config = require('../config.json')
const fs = require('fs')

async function deploy_contract(name) {
    const contract_factory = await hre.ethers.getContractFactory(name);
    const contract = await contract_factory.deploy();
    await contract.deployed()

    console.log('deploy contract at ',  contract.address)

    config['contract_address'] = contract.address
    fs.writeFileSync('./config.json', JSON.stringify(config))
}

const contract_name = config['contract_name']
deploy_contract(contract_name)

