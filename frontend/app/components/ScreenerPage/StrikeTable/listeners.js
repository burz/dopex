import contract from 'truffle-contract';
import Dopex from '../../../../../build/contracts/Dopex.json';
import DopeCoin from '../../../../../build/contracts/DopeCoin.json';

import { getWeb3, getWeb3AndCoinbase } from 'utils/web3/getWeb3'

// export const processCallEvent = (error, event) => {
//     if (error) {
//         console.log(error)
//         return;
//     }

//     console.log("Processing call, dope!");
//     console.log(event);
//     //event.returnValues;
// }

// export const processPutEvent = (error, event) => {
//     if (error) {
//         console.log(error)
//         return;
//     }

//     console.log("Processing put, dope!");
//     console.log(event);
//     //event.returnValues;
// }

export const startEventListener = (callCallback, putCallback) => {

    getWeb3.then( (web3) => {
        const dopexContract = contract(Dopex);

        dopexContract.setProvider(web3.currentProvider);

        dopexContract.deployed().then((instance) => {
            instance.allEvents({fromBlock: 0}, (error, result) => {
                if (error) {
                    console.log(error)
                    return;
                }

                switch(result.event) {
                    case 'NewCall':
                        console.log("New call, dope!");
                        console.log(result);
                        callCallback(result);
                        break
                    case 'NewPut':
                        console.log("New put, dope!");
                        console.log(result);
                        putCallback(result);
                        break
                    default:
                        break
                }
            });
        });
    });
};



