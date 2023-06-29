/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UniUsdoToWethBidder,
  UniUsdoToWethBidderInterface,
} from "../../../../contracts/LiquidationQueue/bidders/UniUsdoToWethBidder";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "uniV2Swapper_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wethAssetId",
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
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "UniV2SwapperUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [],
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
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setUniswapSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
    inputs: [],
    name: "univ2Swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100ab57601f61171538819003918201601f19168301916001600160401b038311848410176100b05780849260409485528339810103126100ab5780516001600160a01b03811691908290036100ab576020015160008054336001600160a01b03199182168117835560405194927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600254161760025560035561164e90816100c78239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c90816306fdde03146111ad57508063078dfbe71461108f5780634e71e0c814610fe45780635dd82b3614610bbe57806385267a0114610b975780638da5cb5b14610b71578063b691d78c146103f3578063b6aebf361461037e578063e30c3978146103575763fef744fa1461008f57600080fd5b346103545761009d3661123f565b5050604051636c3d8b8f60e01b8152602094936001600160a01b0391908216908681600481855afa90811561030e57839188918891610319575b506004604051809481936386c8e21d60e01b8352165afa90811561030e5790879187916102dd575b509161010e600493871461138f565b60405163de40657760e01b815292839182905afa908115610276578291879187916102b0575b506064600354956040519586938492638eb22cdd60e01b845289600485015260248401528a6044840152165afa918215610276578592610281575b50600254169160405193633d9545e960e11b85526004850152602484015283604484015283606484015260016084840152600160a484015261014092838160c481865afa93841561027657918693916101ef95938794610247575b50506060848401510152604051808095819463071e388d60e51b835260048301611551565b03915afa91821561023b5791610209575b50604051908152f35b90508181813d8311610234575b6102208183611359565b8101031261022f575138610200565b600080fd5b503d610216565b604051903d90823e3d90fd5b610267929450803d1061026f575b61025f8183611359565b8101906113f9565b9138806101ca565b503d610255565b6040513d87823e3d90fd5b9091508581813d83116102a9575b6102998183611359565b8101031261022f5751903861016f565b503d61028f565b6102d09150823d84116102d6575b6102c88183611359565b8101906113cd565b38610134565b503d6102be565b82819392503d8311610307575b6102f48183611359565b8101031261022f5751869061010e6100ff565b503d6102ea565b6040513d88823e3d90fd5b92505081813d831161034d575b6103308183611359565b810103126103495786610343849261137b565b386100d7565b8580fd5b503d610326565b80fd5b503461035457806003193601126103545760206001600160a01b0360015416604051908152f35b5034610354576020366003190112610354576004356001600160a01b038082168092036103ef576103b38184541633146112a4565b816002549182167f1226a5d51aea8884fdf5761c8e63e98532d3eedcc0a3d56ebe98e3080fcf96dd8580a36001600160a01b0319161760025580f35b8280fd5b5034610354576001600160a01b0361040a3661123f565b94909192931660405193636c3d8b8f60e01b94858152602081600481865afa80156109de578890610b31575b6001600160a01b03915016604051631192124760e11b8152602081600481855afa90811561094f578991610ae3575b5060249161047f6001600160a01b03602093161515611571565b6040519283809263473ec51560e11b82528760048301525afa9081156109de578891610aa9575b5015610a715760405163de40657760e01b815292602084600481865afa9384156109de578894610a50575b5060405163c23ea21f60e01b815295602087600481875afa96871561094f578997610a2e575b5060209060046040518096819382525afa9283156109de5788936109e9575b5060206001600160a01b03936004604051809681936386c8e21d60e01b8352165afa9283156109de5788936109a6575b5061055283831461138f565b6001600160a01b03861633036109775787968061095a575b50506001600160a01b03600254169060405190638eb22cdd60e01b82528060048301528560248301528860448301526020826064816001600160a01b0389165afa91821561094f57899261091b575b506001600160a01b0385163b156109175760405192630208d92960e11b84523060048501526024840152604483015260648201528681608481836001600160a01b0388165af1801561090c576108dc575b50856003549260405190630cf35bdd60e41b8083528460048401526080836024816001600160a01b0386165afa9283156108ac5784936108b7575b506040519081528560048201526080816024816001600160a01b0386165afa9687156108ac576001600160a01b03976020946064938792610871575b506106b28a91604051906106948261133d565b600282526040368a840137836106a9836115e5565b91169052611608565b911690526040519788938492638eb22cdd60e01b84528860048501526024840152866044840152165afa91821561082c578192610839575b61074194506001600160a01b03600254169260405180968192633d9545e960e11b83526101409788956004850160a091949360019360c0830196835260208301526000604083015260608201528260808201520152565b0381855afa91821561082c57604095610785956101c4958495610802575b50506001600160a01b03908751988997889663efa84c6d60e01b885260048801906114e4565b610144860152166101648401526101a0610184840152816101a48401525af19081156107f75782916107bd575b602082604051908152f35b90506040813d6040116107ef575b816107d860409383611359565b810103126107eb576020915051386107b2565b5080fd5b3d91506107cb565b6040513d84823e3d90fd5b6001600160a01b03929550908161082492903d1061026f5761025f8183611359565b93903861075f565b50604051903d90823e3d90fd5b9150506020833d602011610869575b8161085560209383611359565b8101031261022f57856107419351916106ea565b3d9150610848565b8a9192506108996106b29160803d6080116108a5575b6108918183611359565b8101906115ac565b50509050929150610681565b503d610887565b6040513d86823e3d90fd5b6108d191935060803d6080116108a5576108918183611359565b505090509138610645565b67ffffffffffffffff81979297116108f857604052943861060a565b634e487b7160e01b82526041600452602482fd5b6040513d89823e3d90fd5b8880fd5b9091506020813d602011610947575b8161093760209383611359565b81010312610917575190386105b9565b3d915061092a565b6040513d8b823e3d90fd5b819297509060209181010312610973573594388061056a565b8680fd5b60405162461bcd60e51b81526020600482015260076024820152666f6e6c79204c5160c81b6044820152606490fd5b9092506020813d6020116109d6575b816109c260209383611359565b810103126109d257519138610546565b8780fd5b3d91506109b5565b6040513d8a823e3d90fd5b92506020833d602011610a26575b81610a0460209383611359565b810103126109d2576020610a1f6001600160a01b039461137b565b9350610516565b3d91506109f7565b6020919750610a4990823d84116102d6576102c88183611359565b96906104f7565b610a6a91945060203d6020116102d6576102c88183611359565b92386104d1565b60405162461bcd60e51b815260206004820152601060248201526f13585c9ad95d081b9bdd081d985b1a5960821b6044820152606490fd5b90506020813d602011610adb575b81610ac460209383611359565b810103126109d257610ad5906113ec565b386104a6565b3d9150610ab7565b90506020813d602011610b29575b81610afe60209383611359565b810103126109175760249161047f6001600160a01b03610b1f60209461137b565b9350505091610465565b3d9150610af1565b506020813d602011610b69575b81610b4b60209383611359565b810103126109d257610b646001600160a01b039161137b565b610436565b3d9150610b3e565b50346103545780600319360112610354576001600160a01b036020915416604051908152f35b503461035457806003193601126103545760206001600160a01b0360025416604051908152f35b503461035457610bcd3661123f565b50509092916001600160a01b038091169360405194636c3d8b8f60e01b8087526020968781600481865afa90811561090c57859189918991610fad575b50600460405180948193631192124760e11b8352165afa801561090c5785908890610f75575b610c3d9250161515611571565b6040519081528681600481855afa90811561030e5784929188918891610f3c575b506004604051809581936386c8e21d60e01b8352165afa91821561030e579087918793610f09575b50610c9583600494951461138f565b60405163de40657760e01b815292839182905afa908115610276579083918691610eec575b50169160035493604051630cf35bdd60e41b9081815284600482015260809182826024818a5afa91821561094f578992610ec9575b5060405190815287600482015282816024818a5afa92831561094f579185918b9594938b94610ea0575b5050604051610d4091610d2b8261133d565b6002825260403688840137836106a9836115e5565b91169052606460405180968193638eb22cdd60e01b835287600484015260248301528960448301525afa928315610276578593610e6b575b5090610dc891600254169260405180938192633d9545e960e11b83526101409788956004850160a091949360019360c0830196835260208301526000604083015260608201528260808201520152565b0381855afa9283156108ac5791610e00939186938693610e4c575b50506040518080958194630b7ecdc960e31b835260048301611551565b03915afa91821561023b578092610e1c575b5050604051908152f35b9091508282813d8311610e45575b610e348183611359565b810103126103545750513880610e12565b503d610e2a565b610e63929350803d1061026f5761025f8183611359565b903880610de3565b9092508581813d8311610e99575b610e838183611359565b81010312610e95575191610dc8610d78565b8480fd5b503d610e79565b610d409294509081610ebd92903d106108a5576108918183611359565b50509050929038610d19565b610ee1919250833d85116108a5576108918183611359565b505090509038610cef565b610f039150873d89116102d6576102c88183611359565b38610cba565b8281939294503d8311610f35575b610f218183611359565b810103126103495751908690610c95610c86565b503d610f17565b9293505081813d8311610f6e575b610f548183611359565b81010312610349579086610f68859361137b565b38610c5e565b503d610f4a565b50508781813d8311610fa6575b610f8c8183611359565b810103126109735784610fa1610c3d9261137b565b610c30565b503d610f82565b92505081813d8311610fdd575b610fc48183611359565b810103126109735787610fd7869261137b565b38610c0a565b503d610fba565b50346103545780600319360112610354576001546001600160a01b039081811680330361104b578084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b5034610354576060366003190112610354576004356001600160a01b03908181168091036103ef5760243580151581036111a957604435908115158203610e95576110de8486541633146112a4565b1561118b57811590811591611183575b501561113e578083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36bffffffffffffffffffffffff60a01b8092161782556001541660015580f35b60405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606490fd5b9050386110ee565b5090506bffffffffffffffffffffffff60a01b600154161760015580f35b8380fd5b9050346107eb57816003193601126107eb576111c8816112ef565b601981526020917f5553444f202d3e20574554482028556e69737761702056322900000000000000838301526040519283918183528351918281850152815b83811061122857505060408094508284010152601f80199101168101030190f35b808601820151878201604001528694508101611207565b608060031982011261022f576004356001600160a01b038116810361022f5791602435916044359160643567ffffffffffffffff9283821161022f578060238301121561022f57816004013593841161022f576024848301011161022f576024019190565b156112ab57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6040810190811067ffffffffffffffff82111761130b57604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff82111761130b57604052565b6060810190811067ffffffffffffffff82111761130b57604052565b90601f8019910116810190811067ffffffffffffffff82111761130b57604052565b51906001600160a01b038216820361022f57565b1561139657565b60405162461bcd60e51b815260206004820152600f60248201526e1d1bdad95b881b9bdd081d985b1a59608a1b6044820152606490fd5b9081602091031261022f57516001600160a01b038116810361022f5790565b5190811515820361022f57565b80910390610140821261022f5760408051926060840184811067ffffffffffffffff82111761130b578083526080821261022f5761143681611321565b61143f8461137b565b81526020840151608086015261145683850161137b565b60a0860152606084015160c086015284526080607f1982011261022f578190815161148081611321565b6080850151815260a0850151602082015260c08501518382015260e08501516060820152602086015260ff19011261022f576114d96101208251936114c4856112ef565b6114d161010082016113ec565b8552016113ec565b602083015282015290565b6020604061012092606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b61155e81610180936114e4565b6000610160806101408401528201520190565b1561157857565b60405162461bcd60e51b815260206004820152600c60248201526b1554d113c81b9bdd081cd95d60a21b6044820152606490fd5b919082608091031261022f578151600581101561022f57916115d06020820161137b565b9160606115df6040840161137b565b92015190565b8051156115f25760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156115f2576040019056fea2646970667358221220c269feaa6ec6840f3225f524b591afe7cedc4460f00dedf8f84dc7453aef2a5664736f6c63430008120033";

type UniUsdoToWethBidderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniUsdoToWethBidderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniUsdoToWethBidder__factory extends ContractFactory {
  constructor(...args: UniUsdoToWethBidderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniUsdoToWethBidder";
  }

  override deploy(
    uniV2Swapper_: PromiseOrValue<string>,
    _wethAssetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniUsdoToWethBidder> {
    return super.deploy(
      uniV2Swapper_,
      _wethAssetId,
      overrides || {}
    ) as Promise<UniUsdoToWethBidder>;
  }
  override getDeployTransaction(
    uniV2Swapper_: PromiseOrValue<string>,
    _wethAssetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      uniV2Swapper_,
      _wethAssetId,
      overrides || {}
    );
  }
  override attach(address: string): UniUsdoToWethBidder {
    return super.attach(address) as UniUsdoToWethBidder;
  }
  override connect(signer: Signer): UniUsdoToWethBidder__factory {
    return super.connect(signer) as UniUsdoToWethBidder__factory;
  }
  static readonly contractName: "UniUsdoToWethBidder";

  public readonly contractName: "UniUsdoToWethBidder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniUsdoToWethBidderInterface {
    return new utils.Interface(_abi) as UniUsdoToWethBidderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniUsdoToWethBidder {
    return new Contract(address, _abi, signerOrProvider) as UniUsdoToWethBidder;
  }
}
