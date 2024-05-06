import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgDepositValidatorRewardsPool } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorHistoricalRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorSlashEvent } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorSlashesResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { DelegatorWithdrawInfo } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgWithdrawDelegatorRewardResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryDelegationRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorOutstandingRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgUpdateParams } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryDelegationTotalRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationTotalRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { GenesisState } from "./types/cosmos/distribution/v1beta1/genesis";
import { CommunityPoolSpendProposal } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorAccumulatedCommission } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorAccumulatedCommissionRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryValidatorOutstandingRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorHistoricalRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { ValidatorSlashEventRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgCommunityPoolSpendResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { DelegationDelegatorReward } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorOutstandingRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgSetWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgCommunityPoolSpend } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorCurrentRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryCommunityPoolRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { DelegatorStartingInfo } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryParamsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorDistributionInfoResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorSlashesRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { DelegatorStartingInfoRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryDelegatorWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorCurrentRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgWithdrawValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryValidatorDistributionInfoRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorOutstandingRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorCommissionRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorSlashEvents } from "./types/cosmos/distribution/v1beta1/distribution";
import { CommunityPoolSpendProposalWithDeposit } from "./types/cosmos/distribution/v1beta1/distribution";
import { FeePool } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgDepositValidatorRewardsPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { Params } from "./types/cosmos/distribution/v1beta1/distribution";
export { MsgDepositValidatorRewardsPool, ValidatorHistoricalRewards, ValidatorSlashEvent, QueryValidatorSlashesResponse, QueryDelegationRewardsResponse, DelegatorWithdrawInfo, MsgWithdrawDelegatorRewardResponse, QueryDelegationRewardsRequest, QueryDelegatorWithdrawAddressRequest, ValidatorOutstandingRewards, MsgUpdateParams, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, MsgFundCommunityPool, GenesisState, CommunityPoolSpendProposal, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionRecord, QueryValidatorOutstandingRewardsRequest, ValidatorHistoricalRewardsRecord, ValidatorSlashEventRecord, MsgCommunityPoolSpendResponse, DelegationDelegatorReward, ValidatorOutstandingRewardsRecord, MsgSetWithdrawAddressResponse, MsgCommunityPoolSpend, ValidatorCurrentRewards, QueryCommunityPoolRequest, MsgSetWithdrawAddress, DelegatorStartingInfo, QueryParamsResponse, QueryValidatorDistributionInfoResponse, QueryValidatorSlashesRequest, QueryDelegatorValidatorsResponse, QueryCommunityPoolResponse, QueryParamsRequest, MsgWithdrawDelegatorReward, MsgFundCommunityPoolResponse, DelegatorStartingInfoRecord, QueryDelegatorWithdrawAddressResponse, ValidatorCurrentRewardsRecord, MsgWithdrawValidatorCommissionResponse, MsgUpdateParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, ValidatorSlashEvents, CommunityPoolSpendProposalWithDeposit, FeePool, MsgWithdrawValidatorCommission, MsgDepositValidatorRewardsPoolResponse, Params };
type sendMsgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventParams = {
    value: ValidatorSlashEvent;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventsParams = {
    value: ValidatorSlashEvents;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendFeePoolParams = {
    value: FeePool;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type msgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
};
type validatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
};
type validatorSlashEventParams = {
    value: ValidatorSlashEvent;
};
type queryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
};
type queryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
};
type delegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
};
type msgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
};
type queryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
};
type queryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
};
type validatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
};
type queryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type msgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
};
type genesisStateParams = {
    value: GenesisState;
};
type communityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
};
type validatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
};
type validatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
};
type queryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
};
type validatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
};
type validatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
};
type msgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
};
type delegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
};
type validatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
};
type msgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
};
type msgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
};
type validatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
};
type queryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
};
type msgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
};
type delegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
};
type queryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type queryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
};
type msgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
};
type delegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
};
type queryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
};
type validatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
};
type msgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
};
type queryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
};
type queryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
};
type queryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
};
type validatorSlashEventsParams = {
    value: ValidatorSlashEvents;
};
type communityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
};
type feePoolParams = {
    value: FeePool;
};
type msgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
};
type msgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
};
type paramsParams = {
    value: Params;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgDepositValidatorRewardsPool({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewards({ value, fee, memo }: sendValidatorHistoricalRewardsParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvent({ value, fee, memo }: sendValidatorSlashEventParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesResponse({ value, fee, memo }: sendQueryValidatorSlashesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsResponse({ value, fee, memo }: sendQueryDelegationRewardsResponseParams): Promise<DeliverTxResponse>;
    sendDelegatorWithdrawInfo({ value, fee, memo }: sendDelegatorWithdrawInfoParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorRewardResponse({ value, fee, memo }: sendMsgWithdrawDelegatorRewardResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsRequest({ value, fee, memo }: sendQueryDelegationRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressRequest({ value, fee, memo }: sendQueryDelegatorWithdrawAddressRequestParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewards({ value, fee, memo }: sendValidatorOutstandingRewardsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsRequest({ value, fee, memo }: sendQueryDelegationTotalRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsResponse({ value, fee, memo }: sendQueryDelegationTotalRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposal({ value, fee, memo }: sendCommunityPoolSpendProposalParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommission({ value, fee, memo }: sendValidatorAccumulatedCommissionParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommissionRecord({ value, fee, memo }: sendValidatorAccumulatedCommissionRecordParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsRequest({ value, fee, memo }: sendQueryValidatorOutstandingRewardsRequestParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewardsRecord({ value, fee, memo }: sendValidatorHistoricalRewardsRecordParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEventRecord({ value, fee, memo }: sendValidatorSlashEventRecordParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpendResponse({ value, fee, memo }: sendMsgCommunityPoolSpendResponseParams): Promise<DeliverTxResponse>;
    sendDelegationDelegatorReward({ value, fee, memo }: sendDelegationDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewardsRecord({ value, fee, memo }: sendValidatorOutstandingRewardsRecordParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddressResponse({ value, fee, memo }: sendMsgSetWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewards({ value, fee, memo }: sendValidatorCurrentRewardsParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolRequest({ value, fee, memo }: sendQueryCommunityPoolRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfo({ value, fee, memo }: sendDelegatorStartingInfoParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoResponse({ value, fee, memo }: sendQueryValidatorDistributionInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesRequest({ value, fee, memo }: sendQueryValidatorSlashesRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolResponse({ value, fee, memo }: sendQueryCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPoolResponse({ value, fee, memo }: sendMsgFundCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfoRecord({ value, fee, memo }: sendDelegatorStartingInfoRecordParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressResponse({ value, fee, memo }: sendQueryDelegatorWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewardsRecord({ value, fee, memo }: sendValidatorCurrentRewardsRecordParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommissionResponse({ value, fee, memo }: sendMsgWithdrawValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoRequest({ value, fee, memo }: sendQueryValidatorDistributionInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsResponse({ value, fee, memo }: sendQueryValidatorOutstandingRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionRequest({ value, fee, memo }: sendQueryValidatorCommissionRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionResponse({ value, fee, memo }: sendQueryValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvents({ value, fee, memo }: sendValidatorSlashEventsParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposalWithDeposit({ value, fee, memo }: sendCommunityPoolSpendProposalWithDepositParams): Promise<DeliverTxResponse>;
    sendFeePool({ value, fee, memo }: sendFeePoolParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPoolResponse({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    msgDepositValidatorRewardsPool({ value }: msgDepositValidatorRewardsPoolParams): EncodeObject;
    validatorHistoricalRewards({ value }: validatorHistoricalRewardsParams): EncodeObject;
    validatorSlashEvent({ value }: validatorSlashEventParams): EncodeObject;
    queryValidatorSlashesResponse({ value }: queryValidatorSlashesResponseParams): EncodeObject;
    queryDelegationRewardsResponse({ value }: queryDelegationRewardsResponseParams): EncodeObject;
    delegatorWithdrawInfo({ value }: delegatorWithdrawInfoParams): EncodeObject;
    msgWithdrawDelegatorRewardResponse({ value }: msgWithdrawDelegatorRewardResponseParams): EncodeObject;
    queryDelegationRewardsRequest({ value }: queryDelegationRewardsRequestParams): EncodeObject;
    queryDelegatorWithdrawAddressRequest({ value }: queryDelegatorWithdrawAddressRequestParams): EncodeObject;
    validatorOutstandingRewards({ value }: validatorOutstandingRewardsParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryDelegationTotalRewardsRequest({ value }: queryDelegationTotalRewardsRequestParams): EncodeObject;
    queryDelegationTotalRewardsResponse({ value }: queryDelegationTotalRewardsResponseParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    communityPoolSpendProposal({ value }: communityPoolSpendProposalParams): EncodeObject;
    validatorAccumulatedCommission({ value }: validatorAccumulatedCommissionParams): EncodeObject;
    validatorAccumulatedCommissionRecord({ value }: validatorAccumulatedCommissionRecordParams): EncodeObject;
    queryValidatorOutstandingRewardsRequest({ value }: queryValidatorOutstandingRewardsRequestParams): EncodeObject;
    validatorHistoricalRewardsRecord({ value }: validatorHistoricalRewardsRecordParams): EncodeObject;
    validatorSlashEventRecord({ value }: validatorSlashEventRecordParams): EncodeObject;
    msgCommunityPoolSpendResponse({ value }: msgCommunityPoolSpendResponseParams): EncodeObject;
    delegationDelegatorReward({ value }: delegationDelegatorRewardParams): EncodeObject;
    validatorOutstandingRewardsRecord({ value }: validatorOutstandingRewardsRecordParams): EncodeObject;
    msgSetWithdrawAddressResponse({ value }: msgSetWithdrawAddressResponseParams): EncodeObject;
    msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject;
    validatorCurrentRewards({ value }: validatorCurrentRewardsParams): EncodeObject;
    queryCommunityPoolRequest({ value }: queryCommunityPoolRequestParams): EncodeObject;
    msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject;
    delegatorStartingInfo({ value }: delegatorStartingInfoParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryValidatorDistributionInfoResponse({ value }: queryValidatorDistributionInfoResponseParams): EncodeObject;
    queryValidatorSlashesRequest({ value }: queryValidatorSlashesRequestParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    queryCommunityPoolResponse({ value }: queryCommunityPoolResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject;
    msgFundCommunityPoolResponse({ value }: msgFundCommunityPoolResponseParams): EncodeObject;
    delegatorStartingInfoRecord({ value }: delegatorStartingInfoRecordParams): EncodeObject;
    queryDelegatorWithdrawAddressResponse({ value }: queryDelegatorWithdrawAddressResponseParams): EncodeObject;
    validatorCurrentRewardsRecord({ value }: validatorCurrentRewardsRecordParams): EncodeObject;
    msgWithdrawValidatorCommissionResponse({ value }: msgWithdrawValidatorCommissionResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryValidatorDistributionInfoRequest({ value }: queryValidatorDistributionInfoRequestParams): EncodeObject;
    queryValidatorOutstandingRewardsResponse({ value }: queryValidatorOutstandingRewardsResponseParams): EncodeObject;
    queryValidatorCommissionRequest({ value }: queryValidatorCommissionRequestParams): EncodeObject;
    queryValidatorCommissionResponse({ value }: queryValidatorCommissionResponseParams): EncodeObject;
    validatorSlashEvents({ value }: validatorSlashEventsParams): EncodeObject;
    communityPoolSpendProposalWithDeposit({ value }: communityPoolSpendProposalWithDepositParams): EncodeObject;
    feePool({ value }: feePoolParams): EncodeObject;
    msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject;
    msgDepositValidatorRewardsPoolResponse({ value }: msgDepositValidatorRewardsPoolResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
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
        CosmosDistributionV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
