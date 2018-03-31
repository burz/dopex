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

        /// @dev The buyer of the contract
        address buyer;
    }

    /// @dev The next id to be used for a call option
    uint public nextCallId;

    /// @dev The next id to be used for a put option
    uint public nextPutId;

    /// @dev Fired when a new call is created
    event NewCall(uint id, address creator, uint strike, uint start, uint period);
    /// @dev Fired when a call is purchased
    event CallPurchased(uint id, address buyer);
    /// @dev Fired when a call is exercised
    event CallExercised(uint id);
    /// @dev Fired when a call is closed without being exercised
    event CallClosed(uint id);

    /// @dev Fired when a new put is created
    event NewPut(uint id, address creator, uint strike, uint start, uint period);
    /// @dev Fired when a put is purchased
    event PutPurchased(uint id, address buyer);
    /// @dev Fired when a put is exercised
    event PutExercised(uint id);
    /// @dev Fired when a put is closed without being exercised
    event PutClosed(uint id);
}
