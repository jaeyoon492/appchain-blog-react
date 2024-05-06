import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { EventVote } from "./types/cosmos/group/v1/events";
import { QueryGroupsByMemberRequest } from "./types/cosmos/group/v1/query";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { QueryGroupPoliciesByAdminRequest } from "./types/cosmos/group/v1/query";
import { EventProposalPruned } from "./types/cosmos/group/v1/events";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { QueryGroupMembersRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByGroupRequest } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { QueryGroupsByMemberResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from "./types/cosmos/group/v1/tx";
import { QueryVotesByProposalResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { MsgVoteResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposalResponse } from "./types/cosmos/group/v1/tx";
import { Proposal } from "./types/cosmos/group/v1/types";
import { EventCreateGroup } from "./types/cosmos/group/v1/events";
import { EventLeaveGroup } from "./types/cosmos/group/v1/events";
import { QueryProposalResponse } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterResponse } from "./types/cosmos/group/v1/query";
import { EventUpdateGroupPolicy } from "./types/cosmos/group/v1/events";
import { QueryVoteByProposalVoterResponse } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterRequest } from "./types/cosmos/group/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { QueryGroupMembersResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyResponse } from "./types/cosmos/group/v1/query";
import { MsgWithdrawProposalResponse } from "./types/cosmos/group/v1/tx";
import { ThresholdDecisionPolicy } from "./types/cosmos/group/v1/types";
import { PercentageDecisionPolicy } from "./types/cosmos/group/v1/types";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { QueryGroupPoliciesByAdminResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyMetadataResponse } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroupResponse } from "./types/cosmos/group/v1/tx";
import { GroupPolicyInfo } from "./types/cosmos/group/v1/types";
import { GenesisState } from "./types/cosmos/group/v1/genesis";
import { QueryProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/group/v1/query";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { EventUpdateGroup } from "./types/cosmos/group/v1/events";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { QueryGroupPolicyInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryVoteByProposalVoterRequest } from "./types/cosmos/group/v1/query";
import { GroupMember } from "./types/cosmos/group/v1/types";
import { Vote } from "./types/cosmos/group/v1/types";
import { QueryGroupsByAdminResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { GroupInfo } from "./types/cosmos/group/v1/types";
import { MemberRequest } from "./types/cosmos/group/v1/types";
import { EventCreateGroupPolicy } from "./types/cosmos/group/v1/events";
import { EventWithdrawProposal } from "./types/cosmos/group/v1/events";
import { QueryProposalsByGroupPolicyRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByGroupResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgExecResponse } from "./types/cosmos/group/v1/tx";
import { Member } from "./types/cosmos/group/v1/types";
import { QueryGroupInfoRequest } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMetadataResponse } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupWithPolicyResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupPolicyInfoRequest } from "./types/cosmos/group/v1/query";
import { TallyResult } from "./types/cosmos/group/v1/types";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembersResponse } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicyResponse } from "./types/cosmos/group/v1/tx";
import { EventSubmitProposal } from "./types/cosmos/group/v1/events";
import { EventExec } from "./types/cosmos/group/v1/events";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { QueryGroupsRequest } from "./types/cosmos/group/v1/query";
import { DecisionPolicyWindows } from "./types/cosmos/group/v1/types";
export { EventVote, QueryGroupsByMemberRequest, MsgWithdrawProposal, QueryGroupPoliciesByAdminRequest, EventProposalPruned, MsgUpdateGroupAdmin, QueryGroupMembersRequest, QueryGroupPoliciesByGroupRequest, MsgUpdateGroupPolicyDecisionPolicy, QueryGroupsByMemberResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, QueryVotesByProposalResponse, MsgUpdateGroupPolicyMetadata, MsgVoteResponse, MsgUpdateGroupPolicyAdminResponse, MsgSubmitProposalResponse, Proposal, EventCreateGroup, EventLeaveGroup, QueryProposalResponse, QueryVotesByVoterResponse, EventUpdateGroupPolicy, QueryVoteByProposalVoterResponse, QueryVotesByVoterRequest, QueryTallyResultRequest, MsgUpdateGroupMembers, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryProposalsByGroupPolicyResponse, MsgWithdrawProposalResponse, ThresholdDecisionPolicy, PercentageDecisionPolicy, MsgCreateGroupPolicy, MsgSubmitProposal, QueryGroupPoliciesByAdminResponse, QueryGroupsResponse, MsgUpdateGroupPolicyMetadataResponse, MsgLeaveGroupResponse, GroupPolicyInfo, GenesisState, QueryProposalRequest, QueryVotesByProposalRequest, QueryTallyResultResponse, MsgExec, MsgLeaveGroup, EventUpdateGroup, MsgUpdateGroupMetadata, QueryGroupPolicyInfoResponse, QueryVoteByProposalVoterRequest, GroupMember, Vote, QueryGroupsByAdminResponse, MsgUpdateGroupPolicyAdmin, MsgVote, GroupInfo, MemberRequest, EventCreateGroupPolicy, EventWithdrawProposal, QueryProposalsByGroupPolicyRequest, QueryGroupInfoResponse, QueryGroupPoliciesByGroupResponse, MsgUpdateGroupAdminResponse, MsgExecResponse, Member, QueryGroupInfoRequest, MsgCreateGroupResponse, MsgUpdateGroupMetadataResponse, MsgCreateGroupWithPolicyResponse, QueryGroupPolicyInfoRequest, TallyResult, MsgCreateGroup, MsgUpdateGroupMembersResponse, MsgCreateGroupPolicyResponse, EventSubmitProposal, EventExec, MsgCreateGroupWithPolicy, QueryGroupsRequest, DecisionPolicyWindows };
type sendEventVoteParams = {
    value: EventVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventProposalPrunedParams = {
    value: EventProposalPruned;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupParams = {
    value: EventCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventLeaveGroupParams = {
    value: EventLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendThresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendPercentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsResponseParams = {
    value: QueryGroupsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGroupPolicyInfoParams = {
    value: GroupPolicyInfo;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupParams = {
    value: MsgLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupParams = {
    value: EventUpdateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGroupMemberParams = {
    value: GroupMember;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendGroupInfoParams = {
    value: GroupInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMemberRequestParams = {
    value: MemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendEventWithdrawProposalParams = {
    value: EventWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMemberParams = {
    value: Member;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupParams = {
    value: MsgCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventSubmitProposalParams = {
    value: EventSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventExecParams = {
    value: EventExec;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsRequestParams = {
    value: QueryGroupsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDecisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
    fee?: StdFee;
    memo?: string;
};
type eventVoteParams = {
    value: EventVote;
};
type queryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
};
type msgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
};
type queryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
};
type eventProposalPrunedParams = {
    value: EventProposalPruned;
};
type msgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
};
type queryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
};
type queryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
};
type msgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
};
type queryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
};
type msgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
};
type queryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
};
type msgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type msgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type proposalParams = {
    value: Proposal;
};
type eventCreateGroupParams = {
    value: EventCreateGroup;
};
type eventLeaveGroupParams = {
    value: EventLeaveGroup;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
};
type eventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
};
type queryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
};
type queryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type msgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
};
type queryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
};
type queryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
};
type queryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
};
type msgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
};
type thresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
};
type percentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
};
type msgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type queryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
};
type queryGroupsResponseParams = {
    value: QueryGroupsResponse;
};
type msgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
};
type msgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
};
type groupPolicyInfoParams = {
    value: GroupPolicyInfo;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type msgExecParams = {
    value: MsgExec;
};
type msgLeaveGroupParams = {
    value: MsgLeaveGroup;
};
type eventUpdateGroupParams = {
    value: EventUpdateGroup;
};
type msgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
};
type queryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
};
type queryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
};
type groupMemberParams = {
    value: GroupMember;
};
type voteParams = {
    value: Vote;
};
type queryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
};
type msgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
};
type msgVoteParams = {
    value: MsgVote;
};
type groupInfoParams = {
    value: GroupInfo;
};
type memberRequestParams = {
    value: MemberRequest;
};
type eventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
};
type eventWithdrawProposalParams = {
    value: EventWithdrawProposal;
};
type queryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
};
type queryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
};
type queryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
};
type msgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type memberParams = {
    value: Member;
};
type queryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
};
type msgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
};
type msgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
};
type msgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
};
type queryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
};
type tallyResultParams = {
    value: TallyResult;
};
type msgCreateGroupParams = {
    value: MsgCreateGroup;
};
type msgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
};
type msgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
};
type eventSubmitProposalParams = {
    value: EventSubmitProposal;
};
type eventExecParams = {
    value: EventExec;
};
type msgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
};
type queryGroupsRequestParams = {
    value: QueryGroupsRequest;
};
type decisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendEventVote({ value, fee, memo }: sendEventVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberRequest({ value, fee, memo }: sendQueryGroupsByMemberRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminRequest({ value, fee, memo }: sendQueryGroupPoliciesByAdminRequestParams): Promise<DeliverTxResponse>;
    sendEventProposalPruned({ value, fee, memo }: sendEventProposalPrunedParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersRequest({ value, fee, memo }: sendQueryGroupMembersRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupRequest({ value, fee, memo }: sendQueryGroupPoliciesByGroupRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberResponse({ value, fee, memo }: sendQueryGroupsByMemberResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicyResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalResponse({ value, fee, memo }: sendQueryVotesByProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdminResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendEventCreateGroup({ value, fee, memo }: sendEventCreateGroupParams): Promise<DeliverTxResponse>;
    sendEventLeaveGroup({ value, fee, memo }: sendEventLeaveGroupParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterResponse({ value, fee, memo }: sendQueryVotesByVoterResponseParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroupPolicy({ value, fee, memo }: sendEventUpdateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterResponse({ value, fee, memo }: sendQueryVoteByProposalVoterResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterRequest({ value, fee, memo }: sendQueryVotesByVoterRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersResponse({ value, fee, memo }: sendQueryGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminRequest({ value, fee, memo }: sendQueryGroupsByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyResponse({ value, fee, memo }: sendQueryProposalsByGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposalResponse({ value, fee, memo }: sendMsgWithdrawProposalResponseParams): Promise<DeliverTxResponse>;
    sendThresholdDecisionPolicy({ value, fee, memo }: sendThresholdDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendPercentageDecisionPolicy({ value, fee, memo }: sendPercentageDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminResponse({ value, fee, memo }: sendQueryGroupPoliciesByAdminResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsResponse({ value, fee, memo }: sendQueryGroupsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataResponseParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroupResponse({ value, fee, memo }: sendMsgLeaveGroupResponseParams): Promise<DeliverTxResponse>;
    sendGroupPolicyInfo({ value, fee, memo }: sendGroupPolicyInfoParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalRequest({ value, fee, memo }: sendQueryVotesByProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroup({ value, fee, memo }: sendEventUpdateGroupParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadata({ value, fee, memo }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoResponse({ value, fee, memo }: sendQueryGroupPolicyInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterRequest({ value, fee, memo }: sendQueryVoteByProposalVoterRequestParams): Promise<DeliverTxResponse>;
    sendGroupMember({ value, fee, memo }: sendGroupMemberParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminResponse({ value, fee, memo }: sendQueryGroupsByAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendGroupInfo({ value, fee, memo }: sendGroupInfoParams): Promise<DeliverTxResponse>;
    sendMemberRequest({ value, fee, memo }: sendMemberRequestParams): Promise<DeliverTxResponse>;
    sendEventCreateGroupPolicy({ value, fee, memo }: sendEventCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendEventWithdrawProposal({ value, fee, memo }: sendEventWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyRequest({ value, fee, memo }: sendQueryProposalsByGroupPolicyRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoResponse({ value, fee, memo }: sendQueryGroupInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupResponse({ value, fee, memo }: sendQueryGroupPoliciesByGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdminResponse({ value, fee, memo }: sendMsgUpdateGroupAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMember({ value, fee, memo }: sendMemberParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoRequest({ value, fee, memo }: sendQueryGroupInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupResponse({ value, fee, memo }: sendMsgCreateGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupMetadataResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicyResponse({ value, fee, memo }: sendMsgCreateGroupWithPolicyResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoRequest({ value, fee, memo }: sendQueryGroupPolicyInfoRequestParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembersResponse({ value, fee, memo }: sendMsgUpdateGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicyResponse({ value, fee, memo }: sendMsgCreateGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendEventSubmitProposal({ value, fee, memo }: sendEventSubmitProposalParams): Promise<DeliverTxResponse>;
    sendEventExec({ value, fee, memo }: sendEventExecParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicy({ value, fee, memo }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupsRequest({ value, fee, memo }: sendQueryGroupsRequestParams): Promise<DeliverTxResponse>;
    sendDecisionPolicyWindows({ value, fee, memo }: sendDecisionPolicyWindowsParams): Promise<DeliverTxResponse>;
    eventVote({ value }: eventVoteParams): EncodeObject;
    queryGroupsByMemberRequest({ value }: queryGroupsByMemberRequestParams): EncodeObject;
    msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject;
    queryGroupPoliciesByAdminRequest({ value }: queryGroupPoliciesByAdminRequestParams): EncodeObject;
    eventProposalPruned({ value }: eventProposalPrunedParams): EncodeObject;
    msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject;
    queryGroupMembersRequest({ value }: queryGroupMembersRequestParams): EncodeObject;
    queryGroupPoliciesByGroupRequest({ value }: queryGroupPoliciesByGroupRequestParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject;
    queryGroupsByMemberResponse({ value }: queryGroupsByMemberResponseParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicyResponse({ value }: msgUpdateGroupPolicyDecisionPolicyResponseParams): EncodeObject;
    queryVotesByProposalResponse({ value }: queryVotesByProposalResponseParams): EncodeObject;
    msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdminResponse({ value }: msgUpdateGroupPolicyAdminResponseParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    eventCreateGroup({ value }: eventCreateGroupParams): EncodeObject;
    eventLeaveGroup({ value }: eventLeaveGroupParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryVotesByVoterResponse({ value }: queryVotesByVoterResponseParams): EncodeObject;
    eventUpdateGroupPolicy({ value }: eventUpdateGroupPolicyParams): EncodeObject;
    queryVoteByProposalVoterResponse({ value }: queryVoteByProposalVoterResponseParams): EncodeObject;
    queryVotesByVoterRequest({ value }: queryVotesByVoterRequestParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject;
    queryGroupMembersResponse({ value }: queryGroupMembersResponseParams): EncodeObject;
    queryGroupsByAdminRequest({ value }: queryGroupsByAdminRequestParams): EncodeObject;
    queryProposalsByGroupPolicyResponse({ value }: queryProposalsByGroupPolicyResponseParams): EncodeObject;
    msgWithdrawProposalResponse({ value }: msgWithdrawProposalResponseParams): EncodeObject;
    thresholdDecisionPolicy({ value }: thresholdDecisionPolicyParams): EncodeObject;
    percentageDecisionPolicy({ value }: percentageDecisionPolicyParams): EncodeObject;
    msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    queryGroupPoliciesByAdminResponse({ value }: queryGroupPoliciesByAdminResponseParams): EncodeObject;
    queryGroupsResponse({ value }: queryGroupsResponseParams): EncodeObject;
    msgUpdateGroupPolicyMetadataResponse({ value }: msgUpdateGroupPolicyMetadataResponseParams): EncodeObject;
    msgLeaveGroupResponse({ value }: msgLeaveGroupResponseParams): EncodeObject;
    groupPolicyInfo({ value }: groupPolicyInfoParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVotesByProposalRequest({ value }: queryVotesByProposalRequestParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject;
    eventUpdateGroup({ value }: eventUpdateGroupParams): EncodeObject;
    msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject;
    queryGroupPolicyInfoResponse({ value }: queryGroupPolicyInfoResponseParams): EncodeObject;
    queryVoteByProposalVoterRequest({ value }: queryVoteByProposalVoterRequestParams): EncodeObject;
    groupMember({ value }: groupMemberParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    queryGroupsByAdminResponse({ value }: queryGroupsByAdminResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    groupInfo({ value }: groupInfoParams): EncodeObject;
    memberRequest({ value }: memberRequestParams): EncodeObject;
    eventCreateGroupPolicy({ value }: eventCreateGroupPolicyParams): EncodeObject;
    eventWithdrawProposal({ value }: eventWithdrawProposalParams): EncodeObject;
    queryProposalsByGroupPolicyRequest({ value }: queryProposalsByGroupPolicyRequestParams): EncodeObject;
    queryGroupInfoResponse({ value }: queryGroupInfoResponseParams): EncodeObject;
    queryGroupPoliciesByGroupResponse({ value }: queryGroupPoliciesByGroupResponseParams): EncodeObject;
    msgUpdateGroupAdminResponse({ value }: msgUpdateGroupAdminResponseParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    member({ value }: memberParams): EncodeObject;
    queryGroupInfoRequest({ value }: queryGroupInfoRequestParams): EncodeObject;
    msgCreateGroupResponse({ value }: msgCreateGroupResponseParams): EncodeObject;
    msgUpdateGroupMetadataResponse({ value }: msgUpdateGroupMetadataResponseParams): EncodeObject;
    msgCreateGroupWithPolicyResponse({ value }: msgCreateGroupWithPolicyResponseParams): EncodeObject;
    queryGroupPolicyInfoRequest({ value }: queryGroupPolicyInfoRequestParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject;
    msgUpdateGroupMembersResponse({ value }: msgUpdateGroupMembersResponseParams): EncodeObject;
    msgCreateGroupPolicyResponse({ value }: msgCreateGroupPolicyResponseParams): EncodeObject;
    eventSubmitProposal({ value }: eventSubmitProposalParams): EncodeObject;
    eventExec({ value }: eventExecParams): EncodeObject;
    msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject;
    queryGroupsRequest({ value }: queryGroupsRequestParams): EncodeObject;
    decisionPolicyWindows({ value }: decisionPolicyWindowsParams): EncodeObject;
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
        CosmosGroupV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
