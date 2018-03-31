pragma solidity ^0.4.18;

/// @dev Contract for Dopex exchange
contract Dopex {
    /// @dev Struct to hold information about an option
    struct OptionInfo {
        /// @dev The address of the creator of the option
        address creator;

        /// @dev The strike price of the contract
        uint strike;

        /// @dev The start time of the contract
        uint start;

        /// @dev The period of the contract
        uint period;

        /// @dev The price to buy this contract
        uint price;

        /// @dev The buyer of the contract
        address buyer;

        /// @dev Has the contract been exercised?
        bool exercised;
    }

    /// @dev The next id to be used for a call option
    uint public nextCallId;
    /// @dev The next id to be used for a put option
    uint public nextPutId;

    /// @dev Mapping from the id of a call to the info about its contract
    mapping (uint => OptionInfo) calls;
    /// @dev Mapping from the id of a put to the info about its contract
    mapping (uint => OptionInfo) puts;

    /// @dev Fired when a new call is created
    event NewCall(
          uint id
        , address creator
        , uint strike
        , uint start
        , uint period
        , uint price
    );
    /// @dev Fired when a call is purchased
    event CallPurchased(uint id, address buyer);
    /// @dev Fired when a call is exercised
    event CallExercised(uint id);
    /// @dev Fired when a call is closed without being exercised
    event CallClosed(uint id);

    /// @dev Fired when a new put is created
    event NewPut(
          uint id
        , address creator
        , uint strike
        , uint start
        , uint period
        , uint price
    );
    /// @dev Fired when a put is purchased
    event PutPurchased(uint id, address buyer);
    /// @dev Fired when a put is exercised
    event PutExercised(uint id);
    /// @dev Fired when a put is closed without being exercised
    event PutClosed(uint id);

    /// @dev Create a new call option
    /// @param _strike The strike price of the contract
    /// @param _start The start time of the contract
    /// @param _period The exercise period of the contract
    /// @param _price The price of the contract
    function createCall(
          uint _strike
        , uint _start
        , uint _period
        , uint _price
    )
        public
    {
        OptionInfo storage _info = calls[nextCallId];

        // Store data about the contract
        _info.creator = msg.sender;
        _info.strike  = _strike;
        _info.start   = _start;
        _info.period  = _period;
        _info.price   = _price;

        // Expose the new contract
        emit NewCall(
              nextCallId++
            , msg.sender
            , _strike
            , _start
            , _period
            , _price
        );
    }

    /// @dev Purchase an existing call option
    /// @param _id The id of the call option
    function purchaseCall(uint _id) public payable
    {
        // Lookup the contract's info
        OptionInfo storage _info = calls[_id];

        // Ensure that the contract actually exists
        require(0x0 != _info.creator);

        // Require that the price was paid for the contract
        require(_info.price == msg.value);

        // Set the buyer in the contract info
        _info.buyer = msg.sender;

        // Send the seller his money
        _info.creator.transfer(msg.value);

        // Expose that the contract was bought
        emit CallPurchased(_id, msg.sender);
    }

    /// @dev Exercise the call option
    /// @param _id The id of the call option
    function exerciseCall(uint _id) public
    {
        // Lookup the contract's info
        OptionInfo storage _info = calls[_id];

        // Require that the sender is the buyer of the contract
        require(_info.buyer == msg.sender);

        // Require that the exercise is within the period
        require(_info.start <= now && _info.start + _info.period >= now);

        // Require that the option has not been exercised
        require(!_info.exercised);

        // Now the options has been exercised
        _info.exercised = true;

        // Expose that the option has been exercised
        emit CallExercised(_id);
    }

    /// @dev Close a call option if it has not been exercised
    /// @param _id The id of the call option
    function closeCall(uint _id) public
    {
        // Lookup the contract's info
        OptionInfo storage _info = calls[_id];

        // Require that the exercising period has ended
        require(_info.start + _info.period < now);

        // Require that the option has not been exercised
        require(!_info.exercised);

        // Now the options has been exercised
        _info.exercised = true;

        // Expose that the option has been closed
        emit CallClosed(_id);
    }
}