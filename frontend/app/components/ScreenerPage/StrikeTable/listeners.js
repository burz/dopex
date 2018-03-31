import Dopex from '../../../../../build/contracts/Dopex.json'
import contract from 'truffle-contract';

export const startNewCallListner = () => {
    const dopexContract = contract(Dopex)

    dopexContract.setProvider(web3.currentProvider)

    dopexContract.deployed().then((instance) => {
        instance.allEvents({fromBlock: 0}, (error, result) => {
            if (error) {
                console.log(error)
                return;
            }

            switch(result.event) {
                case 'NewCall':
                    break
                case 'CallPurchased':
                    break
            }
        });
    });
};

