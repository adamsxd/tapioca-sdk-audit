/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610bd7380380610bd783398101604081905261002f916100b0565b4660a081905261009281604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b608052503360009081526020819052604090208190556003556100c9565b6000602082840312156100c257600080fd5b5051919050565b60805160a051610ae96100ee60003960006107d2015260006108070152610ae96000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806370a082311161006657806370a08231146100f25780637ecebe0014610112578063a9059cbb14610132578063d505accf14610145578063dd62ed3e1461015a57600080fd5b8063095ea7b31461009857806318160ddd146100c057806323b872dd146100d75780633644e515146100ea575b600080fd5b6100ab6100a63660046108df565b610185565b60405190151581526020015b60405180910390f35b6100c960035481565b6040519081526020016100b7565b6100ab6100e5366004610909565b6101f1565b6100c9610414565b6100c9610100366004610945565b60006020819052908152604090205481565b6100c9610120366004610945565b60026020526000908152604090205481565b6100ab6101403660046108df565b610423565b610158610153366004610967565b61057a565b005b6100c96101683660046109da565b600160209081526000928352604080842090915290825290205481565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906101e09086815260200190565b60405180910390a350600192915050565b600081156103bd576001600160a01b038416600090815260208190526040902054828110156102605760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b60448201526064015b60405180910390fd5b836001600160a01b0316856001600160a01b0316146103bb576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461032557838110156102f65760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606401610257565b6103008482610a23565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166103745760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610257565b61037e8483610a23565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906103b4908490610a3a565b9091555050505b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161040291815260200190565b60405180910390a35060019392505050565b600061041e6107cd565b905090565b60008115158061043b5750336001600160a01b038416145b1561053d5733600090815260208190526040902054828110156104995760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b6044820152606401610257565b336001600160a01b0385161461053b576001600160a01b0384166104f85760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610257565b6105028382610a23565b33600090815260208190526040808220929092556001600160a01b03861681529081208054859290610535908490610a3a565b90915550505b505b6040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016101e0565b6001600160a01b0387166105d05760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606401610257565b8342106106105760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b6044820152606401610257565b6001600160a01b038716600081815260026020526040812080546001926106ba927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d929161066383610a52565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e0016040516020818303038152906040528051906020012061082d565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610708573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107685760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152606401610257565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000467f000000000000000000000000000000000000000000000000000000000000000081146108055761080081610882565b610827565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b600060405180604001604052806002815260200161190160f01b8152506108526107cd565b8360405160200161086593929190610a6d565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610865565b80356001600160a01b03811681146108da57600080fd5b919050565b600080604083850312156108f257600080fd5b6108fb836108c3565b946020939093013593505050565b60008060006060848603121561091e57600080fd5b610927846108c3565b9250610935602085016108c3565b9150604084013590509250925092565b60006020828403121561095757600080fd5b610960826108c3565b9392505050565b600080600080600080600060e0888a03121561098257600080fd5b61098b886108c3565b9650610999602089016108c3565b95506040880135945060608801359350608088013560ff811681146109bd57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156109ed57600080fd5b6109f6836108c3565b9150610a04602084016108c3565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a3557610a35610a0d565b500390565b60008219821115610a4d57610a4d610a0d565b500190565b6000600019821415610a6657610a66610a0d565b5060010190565b6000845160005b81811015610a8e5760208188018101518583015201610a74565b81811115610a9d576000828501525b509190910192835250602082015260400191905056fea264697066735822122052b6ed4418f3d30f112473877d6ec715bba247063a1f2638cf0427685cb073d164736f6c63430008090033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  deploy(
    _initialAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_initialAmount, overrides || {}) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    _initialAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAmount, overrides || {});
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";
  public readonly contractName: "ERC20Mock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
