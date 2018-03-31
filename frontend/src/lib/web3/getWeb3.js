import store from '../../store'
import Web3 from 'web3'

const WEB3_INITIALIZED = 'WEB3_INITIALIZED'
function web3Initialized(results) {
  return {
      type:    WEB3_INITIALIZED
    , payload: results
  }
}

const COINBASE_RETRIEVED = 'COINBASE_RETRIEVED'
function coinbaseRetrieved(results) {
  return {
      type:    COINBASE_RETRIEVED
    , payload: results
  }
}

const getWeb3 = new Promise((resolve) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', (dispatch) => {
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      let results = {
        instance: web3
      }

      console.log('Injected web3 detected.');

      store.dispatch(web3Initialized(results))

      resolve(web3)
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.

      // Ganache
      //var provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')

      // truffle develop
      var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')

      web3 = new Web3(provider)

      let results = {
        instance: web3
      }

      console.log('No web3 instance injected, using Local web3.');

      store.dispatch(web3Initialized(results))

      resolve(web3)
    }
  })
})

const getCoinbase = new Promise((resolve, reject) => {
  getWeb3.then((web3) => {
    web3.eth.getCoinbase((error, coinbase) => {
      if(error) {
        console.error(error)
        reject(error)
      }

      let results = {
        coinbase: coinbase
      }

      store.dispatch(coinbaseRetrieved(results))

      resolve(coinbase)
    })
  })
})

function getWeb3AndCoinbase(callback) {
  getCoinbase.then((coinbase) => {
    let web3 = store.getState().web3.instance

    callback(web3, coinbase)
  })
}

export {
    WEB3_INITIALIZED
  , COINBASE_RETRIEVED
  , getWeb3
  , getCoinbase
  , getWeb3AndCoinbase
}
