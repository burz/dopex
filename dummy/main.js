const contract         = require('truffle-contract')
const DopexContract    = require('../build/contracts/Dopex.json')
const DopeCoinContract = require('../build/contracts/DopeCoin.json')
const Web3             = require('web3')

const web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
const web3         = new Web3(web3Provider)

const Dopex    = contract(DopexContract)
const DopeCoin = contract(DopeCoinContract)

Dopex.setProvider(web3.currentProvider)
DopeCoin.setProvider(web3.currentProvider)

const START  = 1023231223
const PERIOD = 3242

let dopex
let dopecoin
let accounts

let accountsPromise = new Promise((resolve) => {
  web3.eth.getAccounts((error, results) => {
    resolve(results)
  })
})

Promise.all([
    Dopex.deployed()
  , DopeCoin.deployed()
  , accountsPromise
]).then((data) => {
  dopex    = data[0]
  dopecoin = data[1]
  accounts = data[2]

  function createCall(strike, size, price) {
    return dopecoin.approve(
        dopex.address
      , size
      , {from: accounts[0]}
    ).then(() => {
      return dopex.createCall(
          dopecoin.address
        , strike
        , size
        , START
        , PERIOD
        , price
        , {
              from: accounts[0]
            , gas:  250000
          }
      ).catch(error => console.log('fuck90', error))
    }).catch(error => console.log('fuck2', error))
  }

  function createPut(strike, size, price, accountNum) {
    return dopex.createPut(
        dopecoin.address
      , strike
      , size
      , START
      , PERIOD
      , price
      , {
            value: strike * size
          , from:  accounts[accountNum]
          , gas:   250000
        }
    ).catch(error => console.log('fuck', error))
  }

  let promises = []

  for(let i = 0; i < 2; ++i) {
    promises.push(createCall(
        i
      , i
      , i
    ))

    promises.push(createPut(
        i
      , i
      , i
      , i
    ))
  }

  return Promise.all(promises)
})
