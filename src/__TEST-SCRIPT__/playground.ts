import { ethers } from 'ethers';
import { ContractCallContext, ContractCallResults, Multicall } from '../';

const execute = async () => {
  console.log('Multicall Playground');
  const provider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
  );

  // you can use any ethers provider context here this example is
  // just shows passing in a default provider, ethers hold providers in
  // other context like wallet, signer etc all can be passed in as well.
  const multicall = new Multicall({
    multicallCustomContractAddress:
      '0xe52c6375e1Ecb1dF7A2e394D33F96887aEe1cB4f',
    ethersProvider: provider,
    tryAggregate: true,
  });

  const contractCallContext: ContractCallContext = {
    reference: 'poolDataProviderContract',
    contractAddress: '0xa7B0F37Fba5a50008b24720B26Cace1F2C95A9bA',
    abi: [
      {
        inputs: [
          {
            internalType: 'contract IChainlinkAggregator',
            name: '_networkBaseTokenPriceInUsdProxyAggregator',
            type: 'address',
          },
          {
            internalType: 'contract IChainlinkAggregator',
            name: '_marketReferenceCurrencyPriceInUsdProxyAggregator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_startergiesConfiguration',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_lendingPool',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'ETH_CURRENCY_UNIT',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'MKRAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '_bytes32',
            type: 'bytes32',
          },
        ],
        name: 'bytes32ToString',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract ILendingPoolAddressesProvider',
            name: '_provider',
            type: 'address',
          },
        ],
        name: 'getReservesData',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'underlyingAsset',
                type: 'address',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'symbol',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'decimals',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'baseLTVasCollateral',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'reserveLiquidationThreshold',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'reserveLiquidationBonus',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'reserveFactor',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'creditReserveFactor',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'usageAsCollateralEnabled',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'borrowingEnabled',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'stableBorrowRateEnabled',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isActive',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isFrozen',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'reserveBorrowCap',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidityIndex',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'variableBorrowIndex',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidityRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'variableBorrowRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'stableBorrowRate',
                type: 'uint128',
              },
              {
                internalType: 'uint40',
                name: 'lastUpdateTimestamp',
                type: 'uint40',
              },
              {
                internalType: 'address',
                name: 'zTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'stableDebtTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'variableDebtTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'creditTokensAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'interestRateStrategyAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'availableLiquidity',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalPrincipalStableDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'averageStableRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'stableDebtLastUpdateTimestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalScaledVariableDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'priceInMarketReferenceCurrency',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'variableRateSlope1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'variableRateSlope2',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'stableRateSlope1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'stableRateSlope2',
                type: 'uint256',
              },
            ],
            internalType:
              'struct IUiPoolDataProviderV2.AggregatedReserveData[]',
            name: '',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'marketReferenceCurrencyUnit',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'marketReferenceCurrencyPriceInUsd',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'networkBaseTokenPriceInUsd',
                type: 'int256',
              },
              {
                internalType: 'uint8',
                name: 'networkBaseTokenPriceDecimals',
                type: 'uint8',
              },
            ],
            internalType: 'struct IUiPoolDataProviderV2.BaseCurrencyInfo',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract ILendingPoolAddressesProvider',
            name: 'provider',
            type: 'address',
          },
        ],
        name: 'getReservesList',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract ILendingPoolAddressesProvider',
            name: 'provider',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'getUserReservesData',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'underlyingAsset',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'scaledZTokenBalance',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'usageAsCollateralEnabledOnUser',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'stableBorrowRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'scaledVariableDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'principalStableDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'stableBorrowLastUpdateTimestamp',
                type: 'uint256',
              },
            ],
            internalType: 'struct IUiPoolDataProviderV2.UserReserveData[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'lendingPool',
        outputs: [
          {
            internalType: 'contract ILendingPool',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'marketReferenceCurrencyPriceInUsdProxyAggregator',
        outputs: [
          {
            internalType: 'contract IChainlinkAggregator',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'networkBaseTokenPriceInUsdProxyAggregator',
        outputs: [
          {
            internalType: 'contract IChainlinkAggregator',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'startergiesConfiguration',
        outputs: [
          {
            internalType: 'contract IStrategiesConfiguration',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    calls: [
      {
        reference: 'getReservesData',
        methodName: 'getReservesData(address)',
        methodParameters: ['0xFA8dAEd246701D518de01c715deeFE5076EEAd3c'],
      },
    ],
  };

  const context: ContractCallResults = await multicall.call(
    contractCallContext
  );
  console.log(
    context.results[contractCallContext.reference].callsReturnContext[0]
      .returnValues
  );
  // const latestBlock = await provider.getBlockNumber();
  // const blockNumber = `${latestBlock - 15}`;
  // const contextOnBlock: ContractCallResults = await multicall.call(
  //   contractCallContext,
  //   { blockNumber }
  // );
};

execute();
