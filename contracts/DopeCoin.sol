pragma solidity ^0.4.18;

import './ERC20Interface.sol';

/// @dev Contract for dope coin example token
///  Shamelessly copied from https://github.com/ConsenSys/Tokens/blob/master/contracts/eip20/EIP20.sol
contract DopeCoin is ERC20Interface {
    uint private totalSupply_ = 1000000;

    uint constant private MAX_UINT = 2 ** 256 - 1;
    mapping (address => uint) public balances;
    mapping (address => mapping (address => uint)) public allowed;
    /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */
    string public name    = "DopeCoin";        // fancy name: eg Simon Bucks
    uint8 public decimals = 18;                // How many decimals to show.
    string public symbol  = "DOPE";            // An identifier: eg SBX

    function DopeCoin() public {
        balances[msg.sender] = 1000000;           // Give the creator all initial tokens
    }

    function totalSupply() public constant returns (uint) {
        return totalSupply_;
    }

    function transfer(address _to, uint _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        uint allowance = allowed[_from][msg.sender];
        require(balances[_from] >= _value && allowance >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        if (allowance < MAX_UINT) {
            allowed[_from][msg.sender] -= _value;
        }
        emit Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) public view returns (uint balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint remaining) {
        return allowed[_owner][_spender];
    }
}
