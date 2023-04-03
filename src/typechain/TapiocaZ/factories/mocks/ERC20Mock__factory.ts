/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC20Mock, ERC20MockInterface } from "../../mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "owner",
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
    name: "symbol",
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
] as const;

const _bytecode =
  "0x610140604081815234620003f7576200138f8038038091620000228286620003fc565b84398201918181840312620003f75780516001600160401b039290838111620003f757846200005391840162000420565b9160209485820151858111620003f7576200006f920162000420565b93815192828401848110868211176200030457835260019081855282850191603160f81b83528151878111620003045760038054918383811c93168015620003ec575b87841014620003d657601f928381116200038b575b50808784821160011462000326576000916200031a575b5060001982841b1c191690841b1781555b895191898311620003045760049a8b548581811c91168015620002f9575b89821014620002e45782811162000299575b50879184116001146200022e5793839491849260009562000222575b50501b92600019911b1c19161787555b82815191012093519020918360e052610100958387524660a0528151928301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f958686528385015260608401524660808401523060a084015260a0835260c0830195838710908711176200020d57508490525190206080523060c052610120908152610ef7928362000498843960805183610dcf015260a05183610e9b015260c05183610da0015260e05183610e1e01525182610e4401525181610dfb0152f35b604190634e487b7160e01b6000525260246000fd5b0151935038806200013b565b9190601f198416928c60005284896000209460005b8b8983831062000281575050501062000266575b50505050811b0187556200014b565b01519060f884600019921b161c191690553880808062000257565b86860151895590970196948501948893500162000243565b8c600052886000208380870160051c8201928b8810620002da575b0160051c019086905b828110620002cd5750506200011f565b60008155018690620002bd565b92508192620002b4565b60228d634e487b7160e01b6000525260246000fd5b90607f16906200010d565b634e487b7160e01b600052604160045260246000fd5b905085015138620000de565b859250601f1982169084600052896000209160005b8b8282106200037457505083116200035b575b5050811b018155620000ef565b87015160001983861b60f8161c1916905538806200034e565b838b0151855589969094019392830192016200033b565b82600052876000208480840160051c8201928a8510620003cc575b0160051c019085905b828110620003bf575050620000c7565b60008155018590620003af565b92508192620003a6565b634e487b7160e01b600052602260045260246000fd5b92607f1692620000b2565b600080fd5b601f909101601f19168101906001600160401b038211908210176200030457604052565b919080601f84011215620003f7578251906001600160401b0382116200030457604051916020916200045c601f8301601f1916840185620003fc565b818452828287010111620003f75760005b8181106200048357508260009394955001015290565b85810183015184820184015282016200046d56fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde03146107b357508163095ea7b31461078957816318160ddd1461076a57816323b872dd1461069f578163313ce567146106835781633644e5151461065f578163395093511461061057816340c10f191461054d57816370a08231146105175781637ecebe00146104e057816395d89b41146103dd578163a457c2d714610334578163a9059cbb14610303578163d505accf14610115575063dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e66108f1565b6100ee61090c565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b839150346101115760e0366003190112610111576101316108f1565b61013961090c565b90604435926064356084359060ff821682036102ff578042116102bc576001600160a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff93818110858211176102a9578c52519020906101eb610d96565b928b5192602084019461190160f01b86526022850152604284015260428352608083019083821090821117610296579161023e9391610236938d5260c4359260a43592519020610d07565b919091610bed565b16036102535750610250939450610aeb565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461011157806003193601126101115760209061032d6103236108f1565b602435903361097d565b5160018152f35b905082346103da57826003193601126103da5761034f6108f1565b91836024359233815260016020528181206001600160a01b03861682526020522054908282106103895760208561032d8585038733610aeb565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b838334610111578160031936011261011157805191809380549160019083821c928285169485156104d6575b60209586861081146104c35785895290811561049f5750600114610447575b6104438787610439828c0383610922565b51918291826108a8565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061048c57505050826104439461043992820101948680610428565b805486850188015292860192810161046e565b60ff19168887015250505050151560051b8301019250610439826104438680610428565b634e487b7160e01b845260228352602484fd5b93607f1693610409565b50503461011157602036600319011261011157806020926001600160a01b036105076108f1565b1681526005845220549051908152f35b50503461011157602036600319011261011157806020926001600160a01b0361053e6108f1565b16815280845220549051908152f35b9190503461060c578060031936011261060c576105686108f1565b906001600160a01b0360243592169283156105ca57506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926105b0879560025461095a565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b50503461011157806003193601126101115761032d6020926106586106336108f1565b91338152600186528481206001600160a01b038416825286528460243591205461095a565b9033610aeb565b50503461011157816003193601126101115760209061067c610d96565b9051908152f35b5050346101115781600319360112610111576020905160128152f35b83915034610111576060366003190112610111576106bb6108f1565b6106c361090c565b9184604435946001600160a01b0384168152600160205281812033825260205220549060001982036106fe575b60208661032d87878761097d565b848210610727575091839161071c6020969561032d95033383610aeb565b9193948193506106f0565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061032d6107a96108f1565b6024359033610aeb565b929150346108a457836003193601126108a457600354600181811c918690828116801561089a575b60209586861082146108875750848852908115610865575060011461080c575b6104438686610439828b0383610922565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106108525750505082610443946104399282010194386107fb565b8054868501880152928601928101610835565b60ff191687860152505050151560051b830101925061043982610443386107fb565b634e487b7160e01b845260229052602483fd5b93607f16936107db565b8380fd5b6020808252825181830181905290939260005b8281106108dd57505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016108bb565b600435906001600160a01b038216820361090757565b600080fd5b602435906001600160a01b038216820361090757565b90601f8019910116810190811067ffffffffffffffff82111761094457604052565b634e487b7160e01b600052604160045260246000fd5b9190820180921161096757565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03809116918215610a985716918215610a47576000828152806020526040812054918083106109f357604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03809116918215610b9c5716918215610b4c5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6005811015610cf15780610bfe5750565b60018103610c4b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b60028103610c985760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600314610ca157565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311610d8a5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610d7d5781516001600160a01b03811615610d77579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016301480610e98575b15610df1577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff8211176109445760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614610dc856fea2646970667358221220d1f594201ccd18784f91e04a49e6d4987b5c6f2a08e9c23eb094eb35d2eebf8864736f6c63430008120033";

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

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
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
