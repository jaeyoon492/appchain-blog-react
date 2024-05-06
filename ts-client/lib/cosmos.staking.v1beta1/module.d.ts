import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryDelegatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoRequest } from "./types/cosmos/staking/v1beta1/query";
import { Validator } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryUnbondingDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { StakeAuthorization_Validators } from "./types/cosmos/staking/v1beta1/authz";
import { QueryValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { LastValidatorPower } from "./types/cosmos/staking/v1beta1/genesis";
import { StakeAuthorization } from "./types/cosmos/staking/v1beta1/authz";
import { QueryUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { DVPair } from "./types/cosmos/staking/v1beta1/staking";
import { UnbondingDelegation } from "./types/cosmos/staking/v1beta1/staking";
import { MsgUpdateParams } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { UnbondingDelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryPoolRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/staking/v1beta1/query";
import { RedelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { MsgCreateValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryRedelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { ValAddresses } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplet } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryRedelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/staking/v1beta1/query";
import { DVPairs } from "./types/cosmos/staking/v1beta1/staking";
import { Delegation } from "./types/cosmos/staking/v1beta1/staking";
import { Description } from "./types/cosmos/staking/v1beta1/staking";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Params } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { Redelegation } from "./types/cosmos/staking/v1beta1/staking";
import { Pool } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Commission } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationEntryResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { HistoricalInfo } from "./types/cosmos/staking/v1beta1/staking";
import { CommissionRates } from "./types/cosmos/staking/v1beta1/staking";
import { MsgDelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolResponse } from "./types/cosmos/staking/v1beta1/query";
import { DVVTriplets } from "./types/cosmos/staking/v1beta1/staking";
import { DelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { MsgBeginRedelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { ValidatorUpdates } from "./types/cosmos/staking/v1beta1/staking";
import { GenesisState } from "./types/cosmos/staking/v1beta1/genesis";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegatorValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
export { QueryDelegatorDelegationsRequest, QueryHistoricalInfoRequest, Validator, QueryValidatorUnbondingDelegationsRequest, QueryUnbondingDelegationRequest, StakeAuthorization_Validators, QueryValidatorsResponse, QueryDelegationRequest, LastValidatorPower, StakeAuthorization, QueryUnbondingDelegationResponse, QueryDelegatorUnbondingDelegationsResponse, DVPair, UnbondingDelegation, MsgUpdateParams, QueryValidatorsRequest, QueryDelegatorValidatorsRequest, UnbondingDelegationEntry, MsgBeginRedelegate, MsgEditValidatorResponse, QueryPoolRequest, QueryParamsResponse, RedelegationResponse, MsgCreateValidatorResponse, QueryRedelegationsResponse, ValAddresses, DVVTriplet, RedelegationEntry, MsgCreateValidator, QueryRedelegationsRequest, QueryDelegatorValidatorRequest, QueryParamsRequest, DVPairs, Delegation, Description, MsgDelegate, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, Params, QueryValidatorUnbondingDelegationsResponse, Redelegation, Pool, QueryDelegationResponse, MsgUpdateParamsResponse, Commission, RedelegationEntryResponse, QueryValidatorRequest, QueryValidatorDelegationsResponse, QueryDelegatorValidatorsResponse, HistoricalInfo, CommissionRates, MsgDelegateResponse, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryPoolResponse, DVVTriplets, DelegationResponse, MsgBeginRedelegateResponse, MsgUndelegateResponse, QueryValidatorResponse, ValidatorUpdates, GenesisState, MsgEditValidator, QueryValidatorDelegationsRequest, QueryHistoricalInfoResponse, MsgUndelegate, QueryDelegatorValidatorResponse };
type sendQueryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorization_ValidatorsParams = {
    value: StakeAuthorization_Validators;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRequestParams = {
    value: QueryDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendLastValidatorPowerParams = {
    value: LastValidatorPower;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorizationParams = {
    value: StakeAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairParams = {
    value: DVPair;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationParams = {
    value: UnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolRequestParams = {
    value: QueryPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationResponseParams = {
    value: RedelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValAddressesParams = {
    value: ValAddresses;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletParams = {
    value: DVVTriplet;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryParams = {
    value: RedelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorParams = {
    value: MsgCreateValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairsParams = {
    value: DVPairs;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationParams = {
    value: Delegation;
    fee?: StdFee;
    memo?: string;
};
type sendDescriptionParams = {
    value: Description;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateParams = {
    value: MsgDelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationParams = {
    value: Redelegation;
    fee?: StdFee;
    memo?: string;
};
type sendPoolParams = {
    value: Pool;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationResponseParams = {
    value: QueryDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionParams = {
    value: Commission;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorRequestParams = {
    value: QueryValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendHistoricalInfoParams = {
    value: HistoricalInfo;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionRatesParams = {
    value: CommissionRates;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateResponseParams = {
    value: MsgDelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolResponseParams = {
    value: QueryPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletsParams = {
    value: DVVTriplets;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationResponseParams = {
    value: DelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorResponseParams = {
    value: QueryValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorUpdatesParams = {
    value: ValidatorUpdates;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorParams = {
    value: MsgEditValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateParams = {
    value: MsgUndelegate;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type queryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
};
type queryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
};
type validatorParams = {
    value: Validator;
};
type queryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
};
type queryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
};
type stakeAuthorizationValidatorsParams = {
    value: StakeAuthorization_Validators;
};
type queryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
};
type queryDelegationRequestParams = {
    value: QueryDelegationRequest;
};
type lastValidatorPowerParams = {
    value: LastValidatorPower;
};
type stakeAuthorizationParams = {
    value: StakeAuthorization;
};
type queryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
};
type queryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
};
type dvpairParams = {
    value: DVPair;
};
type unbondingDelegationParams = {
    value: UnbondingDelegation;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type unbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
};
type msgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
};
type msgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
};
type queryPoolRequestParams = {
    value: QueryPoolRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type redelegationResponseParams = {
    value: RedelegationResponse;
};
type msgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
};
type queryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
};
type valAddressesParams = {
    value: ValAddresses;
};
type dvvtripletParams = {
    value: DVVTriplet;
};
type redelegationEntryParams = {
    value: RedelegationEntry;
};
type msgCreateValidatorParams = {
    value: MsgCreateValidator;
};
type queryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
};
type queryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type dvpairsParams = {
    value: DVPairs;
};
type delegationParams = {
    value: Delegation;
};
type descriptionParams = {
    value: Description;
};
type msgDelegateParams = {
    value: MsgDelegate;
};
type msgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
};
type msgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
};
type paramsParams = {
    value: Params;
};
type queryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
};
type redelegationParams = {
    value: Redelegation;
};
type poolParams = {
    value: Pool;
};
type queryDelegationResponseParams = {
    value: QueryDelegationResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type commissionParams = {
    value: Commission;
};
type redelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
};
type queryValidatorRequestParams = {
    value: QueryValidatorRequest;
};
type queryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type historicalInfoParams = {
    value: HistoricalInfo;
};
type commissionRatesParams = {
    value: CommissionRates;
};
type msgDelegateResponseParams = {
    value: MsgDelegateResponse;
};
type queryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
};
type queryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
};
type queryPoolResponseParams = {
    value: QueryPoolResponse;
};
type dvvtripletsParams = {
    value: DVVTriplets;
};
type delegationResponseParams = {
    value: DelegationResponse;
};
type msgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
};
type msgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
};
type queryValidatorResponseParams = {
    value: QueryValidatorResponse;
};
type validatorUpdatesParams = {
    value: ValidatorUpdates;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgEditValidatorParams = {
    value: MsgEditValidator;
};
type queryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
};
type queryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
};
type msgUndelegateParams = {
    value: MsgUndelegate;
};
type queryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryDelegatorDelegationsRequest({ value, fee, memo }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoRequest({ value, fee, memo }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationRequest({ value, fee, memo }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization_Validators({ value, fee, memo }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsResponse({ value, fee, memo }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRequest({ value, fee, memo }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse>;
    sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationResponse({ value, fee, memo }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsRequest({ value, fee, memo }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegationEntry({ value, fee, memo }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse>;
    sendMsgEditValidatorResponse({ value, fee, memo }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidatorResponse({ value, fee, memo }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsResponse({ value, fee, memo }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse>;
    sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse>;
    sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse>;
    sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsRequest({ value, fee, memo }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorRequest({ value, fee, memo }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse>;
    sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse>;
    sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse>;
    sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse>;
    sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse>;
    sendQueryDelegationResponse({ value, fee, memo }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse>;
    sendRedelegationEntryResponse({ value, fee, memo }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsResponse({ value, fee, memo }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse>;
    sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse>;
    sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsResponse({ value, fee, memo }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse>;
    sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse>;
    sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegateResponse({ value, fee, memo }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorResponse({ value, fee, memo }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse>;
    sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsRequest({ value, fee, memo }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoResponse({ value, fee, memo }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorResponse({ value, fee, memo }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse>;
    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject;
    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    queryValidatorUnbondingDelegationsRequest({ value }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject;
    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject;
    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject;
    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject;
    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject;
    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject;
    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject;
    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject;
    queryDelegatorUnbondingDelegationsResponse({ value }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject;
    dvpair({ value }: dvpairParams): EncodeObject;
    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject;
    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject;
    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject;
    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    redelegationResponse({ value }: redelegationResponseParams): EncodeObject;
    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject;
    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject;
    valAddresses({ value }: valAddressesParams): EncodeObject;
    dvvtriplet({ value }: dvvtripletParams): EncodeObject;
    redelegationEntry({ value }: redelegationEntryParams): EncodeObject;
    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject;
    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject;
    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    dvpairs({ value }: dvpairsParams): EncodeObject;
    delegation({ value }: delegationParams): EncodeObject;
    description({ value }: descriptionParams): EncodeObject;
    msgDelegate({ value }: msgDelegateParams): EncodeObject;
    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject;
    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryValidatorUnbondingDelegationsResponse({ value }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject;
    redelegation({ value }: redelegationParams): EncodeObject;
    pool({ value }: poolParams): EncodeObject;
    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    commission({ value }: commissionParams): EncodeObject;
    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject;
    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject;
    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    historicalInfo({ value }: historicalInfoParams): EncodeObject;
    commissionRates({ value }: commissionRatesParams): EncodeObject;
    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject;
    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject;
    queryDelegatorUnbondingDelegationsRequest({ value }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject;
    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject;
    dvvtriplets({ value }: dvvtripletsParams): EncodeObject;
    delegationResponse({ value }: delegationResponseParams): EncodeObject;
    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject;
    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject;
    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject;
    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject;
    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject;
    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject;
    msgUndelegate({ value }: msgUndelegateParams): EncodeObject;
    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosStakingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
