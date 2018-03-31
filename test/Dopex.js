const Dopex    = artifacts.require('Dopex')
const DopeCoin = artifacts.require('DopeCoin')

function genericSetup(callback) {
  return Promise.all([
      Dopex.deployed()
    , DopeCoin.deployed()
  ]).then((instances) => {
    return callback(instances[0], instances[1])
  })
}

function expectFailure(callback) {
  return genericSetup(callback).then(() => {
    assert(false, "The function should have failed")
  }).catch((error) => {
    assert(
        -1 !== error.toString().indexOf("revert")
      , "The function should have reverted"
    )
  })
}

contract('Dopex', function (accounts) {
  it('Fails to create a call option with no allowance', () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.createCall(
          dopecoin.address
        , 100
        , 100
        , 100
        , 100
        , 100
      )
    })
  })

  it('Succeeds to create a call option with an appropriate allowance', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopecoin.approve(dopex.address, 100).then(() => {
        return dopex.createCall(
            dopecoin.address
          , 100
          , 100
          , 100
          , Math.pow(10, 18)
          , 1
        )
      }).then(() => {
        return dopex.nextCallId.call()
      }).then(nextCallId => assert(0 !== nextCallId, 'Next call id was not increased'))
    })
  })

  it('Fails to purchase call option with not enough ETH', () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.purchaseCall(0)
    })
  })

  it('Succeeds to purchase call option with enough ETH', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopex.purchaseCall(0, {value: 1})
    })
  })

  it("Can't close call contract before the exercise period has ended", () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.closeCall(0)
    })
  })

  it('Can close call contract if nobody has purchased it', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopecoin.approve(dopex.address, 100).then(() => {
        return dopex.createCall(
            dopecoin.address
          , 100
          , 100
          , 100
          , Math.pow(10, 18)
          , 1
        )
      }).then(() => {
        return dopex.closeCall(1)
      })
    })
  })

  it('Fails to create a put option with no ETH sent', () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.createPut(
          dopecoin.address
        , 100
        , 100
        , 100
        , 100
        , 100
      )
    })
  })

  it('Succeeds to create a put option when ETH is sent', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopex.createPut(
          dopecoin.address
        , 100
        , 1
        , 100
        , Math.pow(10, 18)
        , 100
        , {value: 100}
      ).then(() => {
        return dopex.nextPutId.call()
      }).then(nextPutId => assert(0 !== nextPutId, 'Next put id was not increased'))
    })
  })

  it('Fails to purchase put option with no ETH sent', () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.purchasePut(0)
    })
  })

  it('Can purchase put option with enough ETH sent', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopex.purchasePut(0, {value: 100})
    })
  })

  it("Can't close put contract before the exercise period has ended", () => {
    return expectFailure((dopex, dopecoin) => {
      return dopex.closePut(0)
    })
  })

  it('Can close put contract if nobody has purchased it', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopex.createPut(
          dopecoin.address
        , 100
        , 100
        , 0
        , Math.pow(10, 18)
        , 1
        , {value: 100}
      ).then(() => {
        return dopex.closePut(1)
      })
    })
  })

  it('Can exercise call', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopecoin.approve(dopex.address, 100).then(() => {
        return dopex.createCall(
            dopecoin.address
          , 100
          , 100
          , 100
          , Math.pow(10, 18)
          , 1
        )
      }).then(() => {
        return dopex.purchaseCall(2, {value: 1})
      }).then(() => {
        return dopex.exerciseCall(2, {value: 100 * 100})
      })
    })
  })

  it('Can exercise put', () => {
    return genericSetup((dopex, dopecoin) => {
      return dopex.createPut(
          dopecoin.address
        , 100
        , 100
        , 100
        , Math.pow(10, 18)
        , 1
        , {value: 100}
      ).then(() => {
        return dopex.purchasePut(2, {value: 1})
      }).then(() => {
        return dopecoin.approve(dopex.address, 100)
      }).then(() => {
        return dopex.exercisePut(2)
      })
    })
  })
})
