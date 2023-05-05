/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YieldBoxURIBuilder,
  YieldBoxURIBuilderInterface,
} from "../YieldBoxURIBuilder";

const _abi = [
  {
    inputs: [
      {
        components: [
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
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "uint8",
        name: "nativeDecimals",
        type: "uint8",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeName",
        type: "string",
      },
    ],
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
        components: [
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
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeSymbol",
        type: "string",
      },
    ],
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
    inputs: [
      {
        components: [
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
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        components: [
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
        internalType: "struct NativeToken",
        name: "nativeToken",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50611ab2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635c6d8435146100515780636d7cd0371461007a57806384b1017d1461009f578063aa1163b9146100b2575b600080fd5b61006461005f366004611292565b6100c5565b604051610071919061132d565b60405180910390f35b61008d61008836600461136f565b6105a6565b60405160ff9091168152602001610071565b6100646100ad3660046113a7565b610633565b6100646100c03660046113a7565b6108fb565b60606100f26040518060800160405280606081526020016060815260200160608152602001600081525090565b60036101016020880188611441565b60048111156101125761011261142b565b14156101bc5760408051808201825260078152664552433131353560c81b60208083019190915290835261016091601491610151918a01908a01611462565b6001600160a01b031690610aa6565b61016d8760600135610c46565b60405160200161017e92919061149b565b60408051601f198184030181529181526020838101929092528051808201825260078152664552433131353560c81b92810192909252820152610335565b60016101cb6020880188611441565b60048111156101dc576101dc61142b565b141561026d5760006101f46040880160208901611462565b6040805160c0810190915260056080820190815264045524332360dc1b60a08301528152909150602081016102316001600160a01b038416610ce3565b8152602001610248836001600160a01b0316610da6565b815260200161025f836001600160a01b0316610ded565b60ff16815250915050610335565b6040805180820190915260068152654e617469766560d01b6020820152815261029685806114eb565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506020808301919091526102df908601866114eb565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408083019190915261032c9060608701908701611539565b60ff1660608201525b6000806103456020890189611441565b60048111156103565761035661142b565b14156103da5761036585610c46565b6001600160a01b03851615610397576040518060400160405280600581526020016466616c736560d81b8152506103b5565b604051806040016040528060048152602001637472756560e01b8152505b6040516020016103c6929190611556565b60405160208183030381529060405261040f565b6103ef601461015160408a0160208b01611462565b6040516020016103ff91906115bc565b6040516020818303038152906040525b6020830151604084015191925061057b91600361042f60208c018c611441565b60048111156104405761044061142b565b1461046f576040518060400160405280600c81526020016b16113232b1b4b6b0b639911d60a11b815250610480565b604051806020016040528060008152505b600361048f60208d018d611441565b60048111156104a0576104a061142b565b146104b7576104b28660600151610c46565b6104c8565b604051806020016040528060008152505b6104e060148d60400160208101906101519190611462565b87518760038f60000160208101906104f89190611441565b60048111156105095761050961142b565b146105235760405180602001604052806000815250610550565b6105308f60600135610c46565b6040516020016105409190611601565b6040516020818303038152906040525b604051602001610567989796959493929190611635565b604051602081830303815290604052610ea5565b60405160200161058b919061176c565b60405160208183030381529060405292505050949350505050565b600060036105b76020850185611441565b60048111156105c8576105c861142b565b14156105d65750600061062d565b60016105e56020850185611441565b60048111156105f6576105f661142b565b141561062a57600061060e6040850160208601611462565b9050610622816001600160a01b0316610ded565b91505061062d565b50805b92915050565b6060600061064685830160408701611462565b6001600160a01b031614156106945782828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506108f492505050565b60016106a36020860186611441565b60048111156106b4576106b461142b565b141561078c5760006106cc6040860160208701611462565b90506106e0816001600160a01b0316610da6565b6106f06060870160408801611462565b6001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561072857600080fd5b505afa15801561073c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261076491908101906117c7565b604051602001610775929190611874565b6040516020818303038152906040529150506108f4565b600361079b6020860186611441565b60048111156107ac576107ac61142b565b141561085c576107c26060850160408601611462565b6001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156107fa57600080fd5b505afa15801561080e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261083691908101906117c7565b60405160200161084691906118bf565b60405160208183030381529060405290506108f4565b828261086e6060870160408801611462565b6001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156108a657600080fd5b505afa1580156108ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108e291908101906117c7565b60405160200161084693929190611904565b9392505050565b6060600061090e85830160408701611462565b6001600160a01b0316141561095c5782828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506108f492505050565b600161096b6020860186611441565b600481111561097c5761097c61142b565b14156109a85760006109946040860160208701611462565b90506106e0816001600160a01b0316610ce3565b60036109b76020860186611441565b60048111156109c8576109c861142b565b141561085c576109e360146101516040870160208801611462565b6109f08560600135610c46565b604051602001610a0192919061149b565b60408051601f19818403018152918152610a219060608701908701611462565b6001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015610a5957600080fd5b505afa158015610a6d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a9591908101906117c7565b604051602001610846929190611874565b60606000610ab583600261195d565b610ac090600261197c565b67ffffffffffffffff811115610ad857610ad86117b1565b6040519080825280601f01601f191660200182016040528015610b02576020820181803683370190505b509050600360fc1b81600081518110610b1d57610b1d611994565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610b4c57610b4c611994565b60200101906001600160f81b031916908160001a9053506000610b7084600261195d565b610b7b90600161197c565b90505b6001811115610bf3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610baf57610baf611994565b1a60f81b828281518110610bc557610bc5611994565b60200101906001600160f81b031916908160001a90535060049490941c93610bec816119aa565b9050610b7e565b5083156108f45760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b60606000610c538361100b565b600101905060008167ffffffffffffffff811115610c7357610c736117b1565b6040519080825280601f01601f191660200182016040528015610c9d576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610cd657610cdb565b610ca7565b509392505050565b60408051600481526024810182526020810180516001600160e01b03166306fdde0360e01b179052905160609160009182916001600160a01b03861691610d2a91906119c1565b600060405180830381855afa9150503d8060008114610d65576040519150601f19603f3d011682016040523d82523d6000602084013e610d6a565b606091505b509150915081610d9557604051806040016040528060038152602001623f3f3f60e81b815250610d9e565b610d9e816110e3565b949350505050565b60408051600481526024810182526020810180516001600160e01b03166395d89b4160e01b179052905160609160009182916001600160a01b03861691610d2a91906119c1565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b1790529051600091829182916001600160a01b03861691610e3391906119c1565b600060405180830381855afa9150503d8060008114610e6e576040519150601f19603f3d011682016040523d82523d6000602084013e610e73565b606091505b5091509150818015610e86575080516020145b610e91576012610d9e565b80806020019051810190610d9e91906119dd565b6060815160001415610ec557505060408051602081019091526000815290565b6000604051806060016040528060408152602001611a3d6040913990506000600384516002610ef4919061197c565b610efe91906119fa565b610f0990600461195d565b90506000610f1882602061197c565b67ffffffffffffffff811115610f3057610f306117b1565b6040519080825280601f01601f191660200182016040528015610f5a576020820181803683370190505b509050818152600183018586518101602084015b81831015610fc6576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101610f6e565b600389510660018114610fe05760028114610ff157610ffd565b613d3d60f01b600119830152610ffd565b603d60f81b6000198301525b509398975050505050505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061104a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611076576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061109457662386f26fc10000830492506010015b6305f5e10083106110ac576305f5e100830492506008015b61271083106110c057612710830492506004015b606483106110d2576064830492506002015b600a831061062d5760010192915050565b60606040825110611102578180602001905181019061062d91906117c7565b8151602014156112435760005b60208160ff161080156111445750828160ff168151811061113257611132611994565b01602001516001600160f81b03191615155b1561115b578061115381611a1c565b91505061110f565b60008160ff1667ffffffffffffffff811115611179576111796117b1565b6040519080825280601f01601f1916602001820160405280156111a3576020820181803683370190505b509050600091505b60208260ff161080156111e05750838260ff16815181106111ce576111ce611994565b01602001516001600160f81b03191615155b156108f457838260ff16815181106111fa576111fa611994565b602001015160f81c60f81b818360ff168151811061121a5761121a611994565b60200101906001600160f81b031916908160001a9053508161123b81611a1c565b9250506111ab565b50506040805180820190915260038152623f3f3f60e81b602082015290565b60006080828403121561127457600080fd5b50919050565b6001600160a01b038116811461128f57600080fd5b50565b60008060008060e085870312156112a857600080fd5b6112b28686611262565b9350608085013567ffffffffffffffff8111156112ce57600080fd5b6112da87828801611262565b93505060a0850135915060c08501356112f28161127a565b939692955090935050565b60005b83811015611318578181015183820152602001611300565b83811115611327576000848401525b50505050565b602081526000825180602084015261134c8160408501602087016112fd565b601f01601f19169190910160400192915050565b60ff8116811461128f57600080fd5b60008060a0838503121561138257600080fd5b61138c8484611262565b9150608083013561139c81611360565b809150509250929050565b600080600060a084860312156113bc57600080fd5b6113c68585611262565b9250608084013567ffffffffffffffff808211156113e357600080fd5b818601915086601f8301126113f757600080fd5b81358181111561140657600080fd5b87602082850101111561141857600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561145357600080fd5b8135600581106108f457600080fd5b60006020828403121561147457600080fd5b81356108f48161127a565b600081516114918185602086016112fd565b9290920192915050565b6722a92198989a9a9d60c11b8152600083516114be8160088501602088016112fd565b602f60f81b60089184019182015283516114df8160098401602088016112fd565b01600901949350505050565b6000808335601e1984360301811261150257600080fd5b83018035915067ffffffffffffffff82111561151d57600080fd5b60200191503681900382131561153257600080fd5b9250929050565b60006020828403121561154b57600080fd5b81356108f481611360565b6e16113a37ba30b629bab838363c911d60891b8152825160009061158181600f8501602088016112fd565b6e16113334bc32b229bab838363c911d60891b600f9184019182015283516115b081601e8401602088016112fd565b01601e01949350505050565b7016113a37b5b2b720b2323932b9b9911d1160791b815281516000906115e98160118501602087016112fd565b601160f91b6011939091019283015250601201919050565b6a16113a37b5b2b724b2111d60a91b8152815160009061162881600b8501602087016112fd565b91909101600b0192915050565b683d913730b6b2911d1160b91b8152885160009061165a816009850160208e016112fd565b6b11161139bcb6b137b6111d1160a11b6009918401918201528951611686816015840160208e016112fd565b601160f91b6015929091019182015288516116a8816016840160208d016112fd565b88519101906116be816016840160208c016112fd565b7f2c2270726f70657274696573223a7b227374726174656779223a2200000000006016929091019182015286516116fc816031840160208b016112fd565b61175c61174e61174861174261173561172f6031878901016e1116113a37b5b2b72a3cb832911d1160891b8152600f0190565b8c61147f565b601160f91b815260010190565b8961147f565b8761147f565b617d7d60f01b815260020190565b9c9b505050505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008152600082516117a481601d8501602087016112fd565b91909101601d0192915050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156117d957600080fd5b815167ffffffffffffffff808211156117f157600080fd5b818401915084601f83011261180557600080fd5b815181811115611817576118176117b1565b604051601f8201601f19908116603f0116810190838211818310171561183f5761183f6117b1565b8160405282815287602084870101111561185857600080fd5b6118698360208301602088016112fd565b979650505050505050565b600083516118868184602088016112fd565b61040560f31b90830190815283516118a58160028401602088016112fd565b602960f81b60029290910191820152600301949350505050565b664552433131353560c81b815261040560f31b6007820152600082516118ec8160098501602087016112fd565b602960f81b6009939091019283015250600a01919050565b8284823760008382016000815261040560f31b8152835161192c8160028401602088016112fd565b602960f81b6002929091019182015260030195945050505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561197757611977611947565b500290565b6000821982111561198f5761198f611947565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816119b9576119b9611947565b506000190190565b600082516119d38184602087016112fd565b9190910192915050565b6000602082840312156119ef57600080fd5b81516108f481611360565b600082611a1757634e487b7160e01b600052601260045260246000fd5b500490565b600060ff821660ff811415611a3357611a33611947565b6001019291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212207d46cc2d856a1e647d8332437cb9bbfb55e4fb636d56db6e15ccb5bf75d2fe8164736f6c63430008090033";

type YieldBoxURIBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldBoxURIBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldBoxURIBuilder__factory extends ContractFactory {
  constructor(...args: YieldBoxURIBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldBoxURIBuilder";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldBoxURIBuilder> {
    return super.deploy(overrides || {}) as Promise<YieldBoxURIBuilder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YieldBoxURIBuilder {
    return super.attach(address) as YieldBoxURIBuilder;
  }
  connect(signer: Signer): YieldBoxURIBuilder__factory {
    return super.connect(signer) as YieldBoxURIBuilder__factory;
  }
  static readonly contractName: "YieldBoxURIBuilder";
  public readonly contractName: "YieldBoxURIBuilder";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldBoxURIBuilderInterface {
    return new utils.Interface(_abi) as YieldBoxURIBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldBoxURIBuilder {
    return new Contract(address, _abi, signerOrProvider) as YieldBoxURIBuilder;
  }
}
