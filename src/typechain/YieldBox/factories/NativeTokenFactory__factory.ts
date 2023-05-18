/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NativeTokenFactory,
  NativeTokenFactoryInterface,
} from "../NativeTokenFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    name: "AssetRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "assetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "froms",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "createToken",
    outputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ids",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isApprovedForAsset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nativeTokens",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051608081018252600480825260006020830181905292820183905260608201839052600580546001808201835591909452825160039094027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054939490939092849260ff1990921691908490811115610091576100916100e7565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101556100fd565b634e487b7160e01b600052602160045260246000fd5b61290f806200010d6000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c8063836a1040116100de578063b8489fb511610097578063cf35bdd011610071578063cf35bdd014610429578063e985e9c51461044c578063eafe7a7414610477578063f242432a1461047f57600080fd5b8063b8489fb5146103e3578063bd85b039146103f6578063ce7f27141461041657600080fd5b8063836a10401461033a5780639eea5f661461034d578063a123c33e14610360578063a22cb46514610389578063a75fcb1e1461039c578063b061db94146103d057600080fd5b80632482ee27116101305780632482ee27146102515780632b800e3b146102795780632d4e1d52146102ba5780632eb2c2d6146102f45780634e1273f4146103075780635ba4d64e1461032757600080fd5b8062fdd58e1461017757806301e1e3b1146101b557806301ffc9a7146101ca5780630e89341c146101ed5780631dbeeb4e1461021b5780631f0ee4c31461022e575b600080fd5b6101a2610185366004611e88565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b6101c86101c3366004611f00565b610492565b005b6101dd6101d8366004611f90565b61060c565b60405190151581526020016101ac565b61020e6101fb366004611fb4565b5060408051602081019091526000815290565b6040516101ac919061201a565b6101c8610229366004611f00565b61065e565b61024161023c366004611fb4565b610707565b6040516101ac949392919061202d565b61026461025f3660046120bc565b6108d0565b60405163ffffffff90911681526020016101ac565b6102a2610287366004611fb4565b6008602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016101ac565b6101a26102c836600461217e565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b6101c86103023660046121cf565b610b13565b61031a61031536600461228e565b610c60565b6040516101ac91906122fa565b6101c8610335366004612353565b610dab565b6101c86103483660046123a2565b610ef4565b6101c861035b3660046123a2565b610f3d565b6102a261036e366004611fb4565b6007602052600090815260409020546001600160a01b031681565b6101c86103973660046123da565b610fff565b6101dd6103aa36600461240f565b600360209081526000938452604080852082529284528284209052825290205460ff1681565b6101a26103de36600461217e565b611069565b6101c86103f136600461243f565b611119565b6101a2610404366004611fb4565b60026020526000908152604090205481565b6101c8610424366004611fb4565b6111e3565b61043c610437366004611fb4565b6112cf565b6040516101ac9493929190612493565b6101dd61045a3660046124d8565b600060208181529281526040808220909352908152205460ff1681565b6005546101a2565b6101c861048d366004612511565b611319565b6000600586815481106104a7576104a761258d565b600091825260209091206003909102015460ff1660048111156104cc576104cc61247d565b146105105760405162461bcd60e51b815260206004820152600f60248201526e4e54463a204e6f74206e617469766560881b60448201526064015b60405180910390fd5b8260005b81811015610603576105a88686838181106105315761053161258d565b905060200201602081019061054691906125a3565b6003600089898681811061055c5761055c61258d565b905060200201602081019061057191906125a3565b6001600160a01b031681526020808201929092526040908101600090812033825283528181208c825290925290205460ff1661141e565b6105f18686838181106105bd576105bd61258d565b90506020020160208101906105d291906125a3565b888686858181106105e5576105e561258d565b905060200201356114aa565b806105fb816125d6565b915050610514565b50505050505050565b60006001600160e01b031982166301ffc9a760e01b148061063d5750636cdb3d1360e11b6001600160e01b03198316145b8061065857506303a24d0760e21b6001600160e01b03198316145b92915050565b60008581526007602052604090205485906001600160a01b031633146106965760405162461bcd60e51b8152600401610507906125f1565b8360005b818110156106fd576106eb8787838181106106b7576106b761258d565b90506020020160208101906106cc91906125a3565b898787858181106106df576106df61258d565b90506020020135611568565b806106f5816125d6565b91505061069a565b5050505050505050565b60066020526000908152604090208054819061072290612628565b80601f016020809104026020016040519081016040528092919081815260200182805461074e90612628565b801561079b5780601f106107705761010080835404028352916020019161079b565b820191906000526020600020905b81548152906001019060200180831161077e57829003601f168201915b5050505050908060010180546107b090612628565b80601f01602080910402602001604051908101604052809291908181526020018280546107dc90612628565b80156108295780601f106107fe57610100808354040283529160200191610829565b820191906000526020600020905b81548152906001019060200180831161080c57829003601f168201915b5050506002840154600385018054949560ff90921694919350915061084d90612628565b80601f016020809104026020016040519081016040528092919081815260200182805461087990612628565b80156108c65780601f1061089b576101008083540402835291602001916108c6565b820191906000526020600020905b8154815290600101906020018083116108a957829003601f168201915b5050505050905084565b6005546000906108df9061161d565b90506108f560008060008463ffffffff16611677565b50604051806080016040528089898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a018190048102820181019092528881529181019190899089908190840183828082843760009201919091525050509082525060ff861660208083019190915260408051601f87018390048302810183018252868152920191908690869081908401838280828437600092018290525093909452505063ffffffff84168152600660209081526040909120835180519193506109e2928492910190611de0565b5060208281015180516109fb9260018501920190611de0565b50604082015160028201805460ff191660ff90921691909117905560608201518051610a31916003840191602090910190611de0565b50505063ffffffff81166000908152600760205260409081902080546001600160a01b0319163390811790915590517f0b0bcdebd2813328a89a9ed5971e5863201ed78fc4e0e2b271cceddb9ce9051090610a97908b908b908b908b908b90899061268c565b60405180910390a26040805163ffffffff8316815260006020820181905291829133916000805160206128ba833981519152910160405180910390a4604051339060009063ffffffff8416907f16b85f49bf01212961345d3016c9a531894accf62eb7680f2045d79185cc0ec0908390a4979650505050505050565b848314610b5d5760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b6044820152606401610507565b610b6888600061141e565b610b76888888888888611bb0565b6001600160a01b0387163b156106fd5760405163bc197c8160e01b808252906001600160a01b0389169063bc197c8190610bc29033908d908c908c908c908c908c908c9060040161270c565b602060405180830381600087803b158015610bdc57600080fd5b505af1158015610bf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c149190612770565b6001600160e01b031916146106fd5760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610507565b606083828114610cad5760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b6044820152606401610507565b8067ffffffffffffffff811115610cc657610cc661278d565b604051908082528060200260200182016040528015610cef578160200160208202803683370190505b50915060005b81811015610da15760016000888884818110610d1357610d1361258d565b9050602002016020810190610d2891906125a3565b6001600160a01b03166001600160a01b031681526020019081526020016000206000868684818110610d5c57610d5c61258d565b90506020020135815260200190815260200160002054838281518110610d8457610d8461258d565b602090810291909101015280610d99816125d6565b915050610cf5565b5050949350505050565b60008481526007602052604090205484906001600160a01b03163314610de35760405162461bcd60e51b8152600401610507906125f1565b8215610ec5576001600160a01b038416151580610dfd5750815b610e3d5760405162461bcd60e51b81526020600482015260116024820152704e54463a207a65726f206164647265737360781b6044820152606401610507565b6000858152600760205260408082205490516001600160a01b038088169392169188917f16b85f49bf01212961345d3016c9a531894accf62eb7680f2045d79185cc0ec09190a4600085815260076020908152604080832080546001600160a01b0389166001600160a01b031991821617909155600890925290912080549091169055610eed565b600085815260086020526040902080546001600160a01b0319166001600160a01b0386161790555b5050505050565b60008381526007602052604090205483906001600160a01b03163314610f2c5760405162461bcd60e51b8152600401610507906125f1565b610f37838584611568565b50505050565b6001600160a01b0382166000908152600360209081526040808320338452825280832086845290915290205482908490610f7b90839060ff1661141e565b600060058681548110610f9057610f9061258d565b600091825260209091206003909102015460ff166004811115610fb557610fb561247d565b14610ff45760405162461bcd60e51b815260206004820152600f60248201526e4e54463a204e6f74206e617469766560881b6044820152606401610507565b610eed8486856114aa565b336000818152602081815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000600185600481111561107f5761107f61247d565b148061109c5750600285600481111561109a5761109a61247d565b145b806110b8575060038560048111156110b6576110b661247d565b145b6111045760405162461bcd60e51b815260206004820152601f60248201527f41737365744d616e616765723a2063616e6e6f7420616464204e6174697665006044820152606401610507565b61111085858585611677565b95945050505050565b600554821061116a5760405162461bcd60e51b815260206004820152601d60248201527f41737365744d616e616765723a206173736574206e6f742076616c69640000006044820152606401610507565b3360008181526003602090815260408083206001600160a01b038816808552908352818420878552835292819020805460ff19168615159081179091558151878152928301529192917f6aceb1b079beeabdd8c2f30cd221ca27ec52e9d0aef6bb229cc175cf15dd778b910160405180910390a3505050565b6000818152600860205260409020546001600160a01b031633811461124a5760405162461bcd60e51b815260206004820152601c60248201527f4e54463a2063616c6c657220213d2070656e64696e67206f776e6572000000006044820152606401610507565b6000828152600760205260408082205490516001600160a01b038085169392169185917f16b85f49bf01212961345d3016c9a531894accf62eb7680f2045d79185cc0ec09190a4600091825260076020908152604080842080546001600160a01b039094166001600160a01b0319948516179055600890915290912080549091169055565b600581815481106112df57600080fd5b600091825260209091206003909102018054600182015460029092015460ff821693506101009091046001600160a01b0390811692169084565b61132486600061141e565b61133086868686611d0b565b6001600160a01b0385163b156114165760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e61906113789033908b908a908a908a908a906004016127a3565b602060405180830381600087803b15801561139257600080fd5b505af11580156113a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ca9190612770565b6001600160e01b031916146114165760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610507565b505050505050565b6001600160a01b0382163314806114325750805b8061146357506001600160a01b03821660009081526020818152604080832033845290915290205460ff1615156001145b6114a65760405162461bcd60e51b8152602060048201526014602482015273151c985b9cd9995c881b9bdd08185b1b1bddd95960621b6044820152606401610507565b5050565b6001600160a01b0383166114d05760405162461bcd60e51b8152600401610507906127ea565b6001600160a01b038316600090815260016020908152604080832085845290915281208054839290611503908490612810565b909155505060008281526002602052604081208054839290611526908490612810565b909155505060408051838152602081018390526000916001600160a01b0386169133916000805160206128ba83398151915291015b60405180910390a4505050565b6001600160a01b03831661158e5760405162461bcd60e51b8152600401610507906127ea565b6001600160a01b0383166000908152600160209081526040808320858452909152812080548392906115c1908490612827565b9091555050600082815260026020526040812080548392906115e4908490612827565b909155505060408051838152602081018390526001600160a01b0385169160009133916000805160206128ba833981519152910161155b565b600063ffffffff8211156116735760405162461bcd60e51b815260206004820152601b60248201527f426f72696e674d6174683a2075696e743332204f766572666c6f7700000000006044820152606401610507565b5090565b60006004600086600481111561168f5761168f61247d565b60048111156116a0576116a061247d565b8152602080820192909252604090810160009081206001600160a01b03808916835290845282822090871682528352818120858252909252902054905080611ba857811580611701575060018560048111156116fe576116fe61247d565b14155b61174d5760405162461bcd60e51b815260206004820152601e60248201527f5969656c64426f783a204e6f20746f6b656e496420666f7220455243323000006044820152606401610507565b60008560048111156117615761176161247d565b14806119055750826001600160a01b03166330fa738c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156117a157600080fd5b505afa1580156117b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d9919061283f565b60048111156117ea576117ea61247d565b8560048111156117fc576117fc61247d565b14801561188a5750826001600160a01b031663f6b4dfb46040518163ffffffff1660e01b815260040160206040518083038186803b15801561183d57600080fd5b505afa158015611851573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611875919061285c565b6001600160a01b0316846001600160a01b0316145b80156119055750826001600160a01b03166317d70f7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118ca57600080fd5b505afa1580156118de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119029190612879565b82145b6119515760405162461bcd60e51b815260206004820152601b60248201527f5969656c64426f783a205374726174656779206d69736d6174636800000000006044820152606401610507565b60008560048111156119655761196561247d565b14801561197957506001600160a01b038416155b8061198d57506001600160a01b0384163b15155b6119d15760405162461bcd60e51b81526020600482015260156024820152742cb4b2b6322137bc1d102737ba1030903a37b5b2b760591b6044820152606401610507565b6005805490509050600560405180608001604052808760048111156119f8576119f861247d565b81526001600160a01b038088166020808401919091529087166040830152606090910185905282546001818101855560009485529190932082516003909402018054929390929091839160ff191690836004811115611a5957611a5961247d565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b0319169190921617905560609091015160029091015580600460008782811115611ac057611ac061247d565b6004811115611ad157611ad161247d565b8152602080820192909252604090810160009081206001600160a01b0389811683529084528282209088168252835281812086825283528181209390935580518281529182019290925282917f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b910160405180910390a281846001600160a01b0316866004811115611b6557611b6561247d565b604080516001600160a01b0388168152602081018690527f30605d4cd099421ed12ca1ba642a1ea2659f679b5cdd0ccd032586640eeaff43910160405180910390a45b949350505050565b6001600160a01b038516611bd65760405162461bcd60e51b8152600401610507906127ea565b8260005b81811015611ca6576000868683818110611bf657611bf661258d565b9050602002013590506000858584818110611c1357611c1361258d565b6001600160a01b038d16600090815260016020908152604080832088845282528220805493909102949094013594508493925090611c52908490612810565b90915550506001600160a01b038916600090815260016020908152604080832085845290915281208054839290611c8a908490612827565b9250508190555050508080611c9e906125d6565b915050611bda565b50856001600160a01b0316876001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb88888888604051611cfa9493929190612892565b60405180910390a450505050505050565b6001600160a01b038316611d315760405162461bcd60e51b8152600401610507906127ea565b6001600160a01b038416600090815260016020908152604080832085845290915281208054839290611d64908490612810565b90915550506001600160a01b038316600090815260016020908152604080832085845290915281208054839290611d9c908490612827565b909155505060408051838152602081018390526001600160a01b03808616929087169133916000805160206128ba833981519152910160405180910390a450505050565b828054611dec90612628565b90600052602060002090601f016020900481019282611e0e5760008555611e54565b82601f10611e2757805160ff1916838001178555611e54565b82800160010185558215611e54579182015b82811115611e54578251825591602001919060010190611e39565b506116739291505b808211156116735760008155600101611e5c565b6001600160a01b0381168114611e8557600080fd5b50565b60008060408385031215611e9b57600080fd5b8235611ea681611e70565b946020939093013593505050565b60008083601f840112611ec657600080fd5b50813567ffffffffffffffff811115611ede57600080fd5b6020830191508360208260051b8501011115611ef957600080fd5b9250929050565b600080600080600060608688031215611f1857600080fd5b85359450602086013567ffffffffffffffff80821115611f3757600080fd5b611f4389838a01611eb4565b90965094506040880135915080821115611f5c57600080fd5b50611f6988828901611eb4565b969995985093965092949392505050565b6001600160e01b031981168114611e8557600080fd5b600060208284031215611fa257600080fd5b8135611fad81611f7a565b9392505050565b600060208284031215611fc657600080fd5b5035919050565b6000815180845260005b81811015611ff357602081850181015186830182015201611fd7565b81811115612005576000602083870101525b50601f01601f19169290920160200192915050565b602081526000611fad6020830184611fcd565b6080815260006120406080830187611fcd565b82810360208401526120528187611fcd565b905060ff85166040840152828103606084015261206f8185611fcd565b979650505050505050565b60008083601f84011261208c57600080fd5b50813567ffffffffffffffff8111156120a457600080fd5b602083019150836020828501011115611ef957600080fd5b60008060008060008060006080888a0312156120d757600080fd5b873567ffffffffffffffff808211156120ef57600080fd5b6120fb8b838c0161207a565b909950975060208a013591508082111561211457600080fd5b6121208b838c0161207a565b909750955060408a0135915060ff8216821461213b57600080fd5b9093506060890135908082111561215157600080fd5b5061215e8a828b0161207a565b989b979a50959850939692959293505050565b60058110611e8557600080fd5b6000806000806080858703121561219457600080fd5b843561219f81612171565b935060208501356121af81611e70565b925060408501356121bf81611e70565b9396929550929360600135925050565b60008060008060008060008060a0898b0312156121eb57600080fd5b88356121f681611e70565b9750602089013561220681611e70565b9650604089013567ffffffffffffffff8082111561222357600080fd5b61222f8c838d01611eb4565b909850965060608b013591508082111561224857600080fd5b6122548c838d01611eb4565b909650945060808b013591508082111561226d57600080fd5b5061227a8b828c0161207a565b999c989b5096995094979396929594505050565b600080600080604085870312156122a457600080fd5b843567ffffffffffffffff808211156122bc57600080fd5b6122c888838901611eb4565b909650945060208701359150808211156122e157600080fd5b506122ee87828801611eb4565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b8181101561233257835183529284019291840191600101612316565b50909695505050505050565b8035801515811461234e57600080fd5b919050565b6000806000806080858703121561236957600080fd5b84359350602085013561237b81611e70565b92506123896040860161233e565b91506123976060860161233e565b905092959194509250565b6000806000606084860312156123b757600080fd5b8335925060208401356123c981611e70565b929592945050506040919091013590565b600080604083850312156123ed57600080fd5b82356123f881611e70565b91506124066020840161233e565b90509250929050565b60008060006060848603121561242457600080fd5b833561242f81611e70565b925060208401356123c981611e70565b60008060006060848603121561245457600080fd5b833561245f81611e70565b9250602084013591506124746040850161233e565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b60808101600586106124b557634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b600080604083850312156124eb57600080fd5b82356124f681611e70565b9150602083013561250681611e70565b809150509250929050565b60008060008060008060a0878903121561252a57600080fd5b863561253581611e70565b9550602087013561254581611e70565b94506040870135935060608701359250608087013567ffffffffffffffff81111561256f57600080fd5b61257b89828a0161207a565b979a9699509497509295939492505050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156125b557600080fd5b8135611fad81611e70565b634e487b7160e01b600052601160045260246000fd5b60006000198214156125ea576125ea6125c0565b5060010190565b6020808252601c908201527f4e54463a2063616c6c6572206973206e6f7420746865206f776e657200000000604082015260600190565b600181811c9082168061263c57607f821691505b6020821081141561265d57634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6080815260006126a060808301888a612663565b82810360208401526126b3818789612663565b91505060ff8416604083015263ffffffff83166060830152979650505050505050565b81835260006001600160fb1b038311156126ef57600080fd5b8260051b8083602087013760009401602001938452509192915050565b6001600160a01b0389811682528816602082015260a060408201819052600090612739908301888a6126d6565b828103606084015261274c8187896126d6565b90508281036080840152612761818587612663565b9b9a5050505050505050505050565b60006020828403121561278257600080fd5b8151611fad81611f7a565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03878116825286166020820152604081018590526060810184905260a0608082018190526000906127de9083018486612663565b98975050505050505050565b6020808252600c908201526b4e6f2030206164647265737360a01b604082015260600190565b600082821015612822576128226125c0565b500390565b6000821982111561283a5761283a6125c0565b500190565b60006020828403121561285157600080fd5b8151611fad81612171565b60006020828403121561286e57600080fd5b8151611fad81611e70565b60006020828403121561288b57600080fd5b5051919050565b6040815260006128a66040830186886126d6565b828103602084015261206f8185876126d656fec3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62a264697066735822122042886e4cfa6fd8d208ce1341276ab1786e4aadd7cc7c2ae4b9de7a07fa57c8cc64736f6c63430008090033";

type NativeTokenFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeTokenFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeTokenFactory__factory extends ContractFactory {
  constructor(...args: NativeTokenFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "NativeTokenFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeTokenFactory> {
    return super.deploy(overrides || {}) as Promise<NativeTokenFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NativeTokenFactory {
    return super.attach(address) as NativeTokenFactory;
  }
  connect(signer: Signer): NativeTokenFactory__factory {
    return super.connect(signer) as NativeTokenFactory__factory;
  }
  static readonly contractName: "NativeTokenFactory";
  public readonly contractName: "NativeTokenFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeTokenFactoryInterface {
    return new utils.Interface(_abi) as NativeTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeTokenFactory {
    return new Contract(address, _abi, signerOrProvider) as NativeTokenFactory;
  }
}
