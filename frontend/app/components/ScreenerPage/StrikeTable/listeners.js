import contract from 'truffle-contract';
import Dopex from '../../../../../build/contracts/Dopex.json';

import { getWeb3 } from 'utils/web3/getWeb3'

export const startNewCallListner = () => {

    getWeb3.then( (web3) => {
        console.log(web3)


        const dopexContract = contract(Dopex);

        dopexContract.setProvider(web3.currentProvider);

        dopexContract.deployed().then( (instance) => {
            log(instance);
        });


        // dopexContract.deployed().then((instance) => {
        //     instance.allEvents({fromBlock: 0}, (error, result) => {
        //         if (error) {
        //             console.log(error)
        //             return;
        //         }

        //         switch(result.event) {
        //             case 'NewCall':
        //                 console.log("New call, dope!");
        //                 console.log(result);
        //                 break
        //             case 'CallPurchased':
        //                 break
        //         }
        //     });
        // });
    });

};
