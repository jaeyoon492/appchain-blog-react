import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCancelProposalResponse } from "./types/cosmos/gov/v1/tx";
import { TallyParams } from "./types/cosmos/gov/v1/gov";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { TallyResult } from "./types/cosmos/gov/v1/gov";
import { VotingParams } from "./types/cosmos/gov/v1/gov";
import { Params } from "./types/cosmos/gov/v1/gov";
import { QueryParamsRequest } from "./types/cosmos/gov/v1/query";
import { WeightedVoteOption } from "./types/cosmos/gov/v1/gov";
import { Deposit } from "./types/cosmos/gov/v1/gov";
import { Proposal } from "./types/cosmos/gov/v1/gov";
import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { GenesisState } from "./types/cosmos/gov/v1/genesis";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";
import { Vote } from "./types/cosmos/gov/v1/gov";
import { QueryConstitutionResponse } from "./types/cosmos/gov/v1/query";
import { QueryParamsResponse } from "./types/cosmos/gov/v1/query";
import { QueryProposalRequest } from "./types/cosmos/gov/v1/query";
import { QueryVoteRequest } from "./types/cosmos/gov/v1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { DepositParams } from "./types/cosmos/gov/v1/gov";
import { QueryVotesResponse } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1/query";
import { MsgDepositResponse } from "./types/cosmos/gov/v1/tx";
import { MsgCancelProposal } from "./types/cosmos/gov/v1/tx";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1/query";
import { QueryVoteResponse } from "./types/cosmos/gov/v1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1/query";
import { MsgExecLegacyContent } from "./types/cosmos/gov/v1/tx";
import { MsgExecLegacyContentResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteResponse } from "./types/cosmos/gov/v1/tx";
import { QueryVotesRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionRequest } from "./types/cosmos/gov/v1/query";
import { QueryProposalResponse } from "./types/cosmos/gov/v1/query";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1/query";
export { MsgCancelProposalResponse, TallyParams, MsgSubmitProposal, TallyResult, VotingParams, Params, QueryParamsRequest, WeightedVoteOption, Deposit, Proposal, MsgVote, GenesisState, MsgUpdateParams, Vote, QueryConstitutionResponse, QueryParamsResponse, QueryProposalRequest, QueryVoteRequest, MsgUpdateParamsResponse, MsgVoteWeighted, MsgDeposit, DepositParams, QueryVotesResponse, QueryTallyResultRequest, QueryDepositResponse, QueryTallyResultResponse, MsgDepositResponse, MsgCancelProposal, QueryProposalsResponse, QueryVoteResponse, QueryDepositRequest, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVoteResponse, QueryVotesRequest, QueryDepositsRequest, QueryDepositsResponse, MsgSubmitProposalResponse, MsgVoteWeightedResponse, QueryConstitutionRequest, QueryProposalResponse, QueryProposalsRequest };
type sendMsgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesResponseParams = {
    value: QueryVotesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelProposalParams = {
    value: MsgCancelProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type msgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
};
type tallyParamsParams = {
    value: TallyParams;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type tallyResultParams = {
    value: TallyResult;
};
type votingParamsParams = {
    value: VotingParams;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type depositParams = {
    value: Deposit;
};
type proposalParams = {
    value: Proposal;
};
type msgVoteParams = {
    value: MsgVote;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type voteParams = {
    value: Vote;
};
type queryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type depositParamsParams = {
    value: DepositParams;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type msgCancelProposalParams = {
    value: MsgCancelProposal;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type msgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
};
type msgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type queryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCancelProposalResponse({ value, fee, memo }: sendMsgCancelProposalResponseParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionResponse({ value, fee, memo }: sendQueryConstitutionResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContentResponse({ value, fee, memo }: sendMsgExecLegacyContentResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionRequest({ value, fee, memo }: sendQueryConstitutionRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    msgCancelProposalResponse({ value }: msgCancelProposalResponseParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    queryConstitutionResponse({ value }: queryConstitutionResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject;
    msgExecLegacyContentResponse({ value }: msgExecLegacyContentResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    queryConstitutionRequest({ value }: queryConstitutionRequestParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
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
        CosmosGovV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
