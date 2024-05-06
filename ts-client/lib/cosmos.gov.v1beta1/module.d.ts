import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { VotingParams } from "./types/cosmos/gov/v1beta1/gov";
import { GenesisState } from "./types/cosmos/gov/v1beta1/genesis";
import { Deposit } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDepositResponse } from "./types/cosmos/gov/v1beta1/tx";
import { Proposal } from "./types/cosmos/gov/v1beta1/gov";
import { QueryParamsResponse } from "./types/cosmos/gov/v1beta1/query";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { TallyResult } from "./types/cosmos/gov/v1beta1/gov";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryVoteResponse } from "./types/cosmos/gov/v1beta1/query";
import { MsgVoteResponse } from "./types/cosmos/gov/v1beta1/tx";
import { QueryDepositRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1beta1/tx";
import { TextProposal } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1beta1/tx";
import { Vote } from "./types/cosmos/gov/v1beta1/gov";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { DepositParams } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1beta1/query";
import { TallyParams } from "./types/cosmos/gov/v1beta1/gov";
import { WeightedVoteOption } from "./types/cosmos/gov/v1beta1/gov";
import { QueryVoteRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryVotesResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
export { VotingParams, GenesisState, Deposit, QueryProposalsResponse, QueryVotesRequest, MsgSubmitProposal, MsgDepositResponse, Proposal, QueryParamsResponse, MsgVoteWeighted, TallyResult, QueryDepositsResponse, QueryVoteResponse, MsgVoteResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, MsgVoteWeightedResponse, TextProposal, QueryProposalRequest, MsgSubmitProposalResponse, Vote, MsgVote, DepositParams, QueryProposalResponse, QueryProposalsRequest, QueryParamsRequest, QueryTallyResultResponse, TallyParams, WeightedVoteOption, QueryVoteRequest, QueryVotesResponse, QueryTallyResultRequest, MsgDeposit };
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTextProposalParams = {
    value: TextProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
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
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
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
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type votingParamsParams = {
    value: VotingParams;
};
type genesisStateParams = {
    value: GenesisState;
};
type depositParams = {
    value: Deposit;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type proposalParams = {
    value: Proposal;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type tallyResultParams = {
    value: TallyResult;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type textProposalParams = {
    value: TextProposal;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type voteParams = {
    value: Vote;
};
type msgVoteParams = {
    value: MsgVote;
};
type depositParamsParams = {
    value: DepositParams;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type tallyParamsParams = {
    value: TallyParams;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type msgDepositParams = {
    value: MsgDeposit;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendTextProposal({ value, fee, memo }: sendTextProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    votingParams({ value }: votingParamsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    textProposal({ value }: textProposalParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
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
        CosmosGovV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
