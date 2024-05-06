import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
export { IdentifiedChannel, QueryPacketAcknowledgementsRequest, QueryUnreceivedPacketsRequest, MsgTimeoutResponse, MsgChannelUpgradeTry, MsgUpdateParamsResponse, Counterparty, PacketId, QueryNextSequenceReceiveRequest, QueryNextSequenceSendRequest, QueryChannelParamsResponse, MsgChannelOpenTry, MsgAcknowledgement, Packet, PacketState, QueryPacketCommitmentsRequest, PacketSequence, MsgChannelUpgradeConfirmResponse, MsgChannelUpgradeTimeoutResponse, MsgPruneAcknowledgementsResponse, QueryUpgradeErrorRequest, MsgChannelOpenConfirmResponse, MsgRecvPacketResponse, MsgAcknowledgementResponse, QueryChannelsResponse, QueryConnectionChannelsResponse, QueryPacketReceiptResponse, QueryChannelParamsRequest, QueryChannelConsensusStateResponse, MsgChannelOpenInit, MsgChannelUpgradeAckResponse, ErrorReceipt, MsgChannelUpgradeConfirm, MsgTimeoutOnCloseResponse, MsgChannelUpgradeOpen, MsgChannelUpgradeCancelResponse, MsgPruneAcknowledgements, QueryChannelClientStateRequest, Params, MsgChannelOpenInitResponse, MsgChannelCloseInit, MsgRecvPacket, MsgChannelOpenTryResponse, MsgChannelCloseInitResponse, QueryPacketReceiptRequest, QueryPacketAcknowledgementResponse, QueryUpgradeResponse, MsgChannelOpenAck, MsgChannelUpgradeInit, UpgradeFields, QueryChannelResponse, Timeout, QueryPacketCommitmentRequest, QueryNextSequenceReceiveResponse, GenesisState, MsgChannelUpgradeTryResponse, Channel, QueryNextSequenceSendResponse, QueryUpgradeRequest, QueryUnreceivedAcksResponse, MsgChannelUpgradeTimeout, QueryChannelRequest, QueryChannelsRequest, Upgrade, QueryConnectionChannelsRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsResponse, MsgChannelOpenConfirm, MsgChannelCloseConfirmResponse, MsgChannelUpgradeInitResponse, MsgChannelUpgradeCancel, QueryUpgradeErrorResponse, MsgChannelUpgradeAck, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryChannelClientStateResponse, MsgChannelCloseConfirm, MsgTimeout, MsgTimeoutOnClose, MsgChannelOpenAckResponse, MsgUpdateParams, QueryPacketAcknowledgementRequest, Acknowledgement, MsgChannelUpgradeOpenResponse, QueryChannelConsensusStateRequest };
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendErrorReceiptParams = {
    value: ErrorReceipt;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeFieldsParams = {
    value: UpgradeFields;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeParams = {
    value: Upgrade;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutParams = {
    value: MsgTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
type msgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type packetIdParams = {
    value: PacketId;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
type queryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type packetParams = {
    value: Packet;
};
type packetStateParams = {
    value: PacketState;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type msgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
};
type msgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
};
type msgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
};
type queryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type queryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type msgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
};
type errorReceiptParams = {
    value: ErrorReceipt;
};
type msgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
type msgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
};
type msgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
};
type msgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type paramsParams = {
    value: Params;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type queryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
};
type upgradeFieldsParams = {
    value: UpgradeFields;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type timeoutParams = {
    value: Timeout;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
};
type channelParams = {
    value: Channel;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
type queryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type msgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type upgradeParams = {
    value: Upgrade;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type msgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
};
type msgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
};
type queryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
};
type msgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type msgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsResponse({ value, fee, memo }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorRequest({ value, fee, memo }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsRequest({ value, fee, memo }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAckResponse({ value, fee, memo }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse>;
    sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirm({ value, fee, memo }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgements({ value, fee, memo }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse>;
    sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTryResponse({ value, fee, memo }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeout({ value, fee, memo }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInitResponse({ value, fee, memo }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancel({ value, fee, memo }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorResponse({ value, fee, memo }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject;
    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject;
    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject;
    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject;
    errorReceipt({ value }: errorReceiptParams): EncodeObject;
    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject;
    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject;
    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject;
    upgradeFields({ value }: upgradeFieldsParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    timeout({ value }: timeoutParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    upgrade({ value }: upgradeParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject;
    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject;
    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject;
    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
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
        IbcCoreChannelV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
