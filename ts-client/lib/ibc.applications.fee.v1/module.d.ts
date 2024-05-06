import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { PacketFees } from "./types/ibc/applications/fee/v1/fee";
import { PacketFee } from "./types/ibc/applications/fee/v1/fee";
import { MsgRegisterPayee } from "./types/ibc/applications/fee/v1/tx";
import { QueryIncentivizedPacketsForChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterCounterpartyPayee } from "./types/ibc/applications/fee/v1/tx";
import { FeeEnabledChannel } from "./types/ibc/applications/fee/v1/genesis";
import { RegisteredCounterpartyPayee } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalRecvFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsRequest } from "./types/ibc/applications/fee/v1/query";
import { Metadata } from "./types/ibc/applications/fee/v1/metadata";
import { IdentifiedPacketFees } from "./types/ibc/applications/fee/v1/fee";
import { QueryIncentivizedPacketsRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsForChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsResponse } from "./types/ibc/applications/fee/v1/query";
import { Fee } from "./types/ibc/applications/fee/v1/fee";
import { QueryCounterpartyPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { IncentivizedAcknowledgement } from "./types/ibc/applications/fee/v1/ack";
import { MsgPayPacketFee } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeAsyncResponse } from "./types/ibc/applications/fee/v1/tx";
import { GenesisState } from "./types/ibc/applications/fee/v1/genesis";
import { ForwardRelayerAddress } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgPayPacketFeeAsync } from "./types/ibc/applications/fee/v1/tx";
import { QueryTotalRecvFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { RegisteredPayee } from "./types/ibc/applications/fee/v1/genesis";
import { QueryPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { QueryTotalTimeoutFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeResponse } from "./types/ibc/applications/fee/v1/query";
export { PacketFees, PacketFee, MsgRegisterPayee, QueryIncentivizedPacketsForChannelResponse, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse, MsgRegisterCounterpartyPayee, FeeEnabledChannel, RegisteredCounterpartyPayee, QueryIncentivizedPacketResponse, QueryTotalRecvFeesResponse, QueryFeeEnabledChannelsRequest, Metadata, IdentifiedPacketFees, QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketsForChannelRequest, QueryTotalAckFeesRequest, QueryTotalTimeoutFeesRequest, QueryFeeEnabledChannelsResponse, Fee, QueryCounterpartyPayeeRequest, QueryTotalAckFeesResponse, IncentivizedAcknowledgement, MsgPayPacketFee, MsgPayPacketFeeAsyncResponse, GenesisState, ForwardRelayerAddress, QueryIncentivizedPacketRequest, MsgPayPacketFeeAsync, QueryTotalRecvFeesRequest, MsgRegisterCounterpartyPayeeResponse, RegisteredPayee, QueryPayeeRequest, MsgRegisterPayeeResponse, MsgPayPacketFeeResponse, QueryTotalTimeoutFeesResponse, QueryPayeeResponse };
type sendPacketFeesParams = {
    value: PacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeeParams = {
    value: PacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeParams = {
    value: MsgRegisterPayee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendFeeEnabledChannelParams = {
    value: FeeEnabledChannel;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIncentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeParams = {
    value: MsgPayPacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendForwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredPayeeParams = {
    value: RegisteredPayee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeRequestParams = {
    value: QueryPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeResponseParams = {
    value: QueryPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type packetFeesParams = {
    value: PacketFees;
};
type packetFeeParams = {
    value: PacketFee;
};
type msgRegisterPayeeParams = {
    value: MsgRegisterPayee;
};
type queryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
};
type queryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
};
type queryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
};
type queryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
};
type msgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
};
type feeEnabledChannelParams = {
    value: FeeEnabledChannel;
};
type registeredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
};
type queryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
};
type queryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
};
type queryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
};
type metadataParams = {
    value: Metadata;
};
type identifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
};
type queryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
};
type queryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
};
type queryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
};
type queryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
};
type queryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
};
type queryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
};
type feeParams = {
    value: Fee;
};
type queryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
};
type queryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
};
type incentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
};
type msgPayPacketFeeParams = {
    value: MsgPayPacketFee;
};
type msgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type forwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
};
type queryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
};
type msgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
};
type queryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
};
type msgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
};
type registeredPayeeParams = {
    value: RegisteredPayee;
};
type queryPayeeRequestParams = {
    value: QueryPayeeRequest;
};
type msgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
};
type msgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
};
type queryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
};
type queryPayeeResponseParams = {
    value: QueryPayeeResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendPacketFees({ value, fee, memo }: sendPacketFeesParams): Promise<DeliverTxResponse>;
    sendPacketFee({ value, fee, memo }: sendPacketFeeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayee({ value, fee, memo }: sendMsgRegisterPayeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelResponse({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeResponse({ value, fee, memo }: sendQueryCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelRequest({ value, fee, memo }: sendQueryFeeEnabledChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelResponse({ value, fee, memo }: sendQueryFeeEnabledChannelResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayee({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendFeeEnabledChannel({ value, fee, memo }: sendFeeEnabledChannelParams): Promise<DeliverTxResponse>;
    sendRegisteredCounterpartyPayee({ value, fee, memo }: sendRegisteredCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketResponse({ value, fee, memo }: sendQueryIncentivizedPacketResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesResponse({ value, fee, memo }: sendQueryTotalRecvFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsRequest({ value, fee, memo }: sendQueryFeeEnabledChannelsRequestParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendIdentifiedPacketFees({ value, fee, memo }: sendIdentifiedPacketFeesParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsRequest({ value, fee, memo }: sendQueryIncentivizedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsResponse({ value, fee, memo }: sendQueryIncentivizedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelRequest({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesRequest({ value, fee, memo }: sendQueryTotalAckFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesRequest({ value, fee, memo }: sendQueryTotalTimeoutFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsResponse({ value, fee, memo }: sendQueryFeeEnabledChannelsResponseParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeRequest({ value, fee, memo }: sendQueryCounterpartyPayeeRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesResponse({ value, fee, memo }: sendQueryTotalAckFeesResponseParams): Promise<DeliverTxResponse>;
    sendIncentivizedAcknowledgement({ value, fee, memo }: sendIncentivizedAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFee({ value, fee, memo }: sendMsgPayPacketFeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsyncResponse({ value, fee, memo }: sendMsgPayPacketFeeAsyncResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendForwardRelayerAddress({ value, fee, memo }: sendForwardRelayerAddressParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketRequest({ value, fee, memo }: sendQueryIncentivizedPacketRequestParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsync({ value, fee, memo }: sendMsgPayPacketFeeAsyncParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesRequest({ value, fee, memo }: sendQueryTotalRecvFeesRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayeeResponse({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendRegisteredPayee({ value, fee, memo }: sendRegisteredPayeeParams): Promise<DeliverTxResponse>;
    sendQueryPayeeRequest({ value, fee, memo }: sendQueryPayeeRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayeeResponse({ value, fee, memo }: sendMsgRegisterPayeeResponseParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeResponse({ value, fee, memo }: sendMsgPayPacketFeeResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesResponse({ value, fee, memo }: sendQueryTotalTimeoutFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryPayeeResponse({ value, fee, memo }: sendQueryPayeeResponseParams): Promise<DeliverTxResponse>;
    packetFees({ value }: packetFeesParams): EncodeObject;
    packetFee({ value }: packetFeeParams): EncodeObject;
    msgRegisterPayee({ value }: msgRegisterPayeeParams): EncodeObject;
    queryIncentivizedPacketsForChannelResponse({ value }: queryIncentivizedPacketsForChannelResponseParams): EncodeObject;
    queryCounterpartyPayeeResponse({ value }: queryCounterpartyPayeeResponseParams): EncodeObject;
    queryFeeEnabledChannelRequest({ value }: queryFeeEnabledChannelRequestParams): EncodeObject;
    queryFeeEnabledChannelResponse({ value }: queryFeeEnabledChannelResponseParams): EncodeObject;
    msgRegisterCounterpartyPayee({ value }: msgRegisterCounterpartyPayeeParams): EncodeObject;
    feeEnabledChannel({ value }: feeEnabledChannelParams): EncodeObject;
    registeredCounterpartyPayee({ value }: registeredCounterpartyPayeeParams): EncodeObject;
    queryIncentivizedPacketResponse({ value }: queryIncentivizedPacketResponseParams): EncodeObject;
    queryTotalRecvFeesResponse({ value }: queryTotalRecvFeesResponseParams): EncodeObject;
    queryFeeEnabledChannelsRequest({ value }: queryFeeEnabledChannelsRequestParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    identifiedPacketFees({ value }: identifiedPacketFeesParams): EncodeObject;
    queryIncentivizedPacketsRequest({ value }: queryIncentivizedPacketsRequestParams): EncodeObject;
    queryIncentivizedPacketsResponse({ value }: queryIncentivizedPacketsResponseParams): EncodeObject;
    queryIncentivizedPacketsForChannelRequest({ value }: queryIncentivizedPacketsForChannelRequestParams): EncodeObject;
    queryTotalAckFeesRequest({ value }: queryTotalAckFeesRequestParams): EncodeObject;
    queryTotalTimeoutFeesRequest({ value }: queryTotalTimeoutFeesRequestParams): EncodeObject;
    queryFeeEnabledChannelsResponse({ value }: queryFeeEnabledChannelsResponseParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    queryCounterpartyPayeeRequest({ value }: queryCounterpartyPayeeRequestParams): EncodeObject;
    queryTotalAckFeesResponse({ value }: queryTotalAckFeesResponseParams): EncodeObject;
    incentivizedAcknowledgement({ value }: incentivizedAcknowledgementParams): EncodeObject;
    msgPayPacketFee({ value }: msgPayPacketFeeParams): EncodeObject;
    msgPayPacketFeeAsyncResponse({ value }: msgPayPacketFeeAsyncResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    forwardRelayerAddress({ value }: forwardRelayerAddressParams): EncodeObject;
    queryIncentivizedPacketRequest({ value }: queryIncentivizedPacketRequestParams): EncodeObject;
    msgPayPacketFeeAsync({ value }: msgPayPacketFeeAsyncParams): EncodeObject;
    queryTotalRecvFeesRequest({ value }: queryTotalRecvFeesRequestParams): EncodeObject;
    msgRegisterCounterpartyPayeeResponse({ value }: msgRegisterCounterpartyPayeeResponseParams): EncodeObject;
    registeredPayee({ value }: registeredPayeeParams): EncodeObject;
    queryPayeeRequest({ value }: queryPayeeRequestParams): EncodeObject;
    msgRegisterPayeeResponse({ value }: msgRegisterPayeeResponseParams): EncodeObject;
    msgPayPacketFeeResponse({ value }: msgPayPacketFeeResponseParams): EncodeObject;
    queryTotalTimeoutFeesResponse({ value }: queryTotalTimeoutFeesResponseParams): EncodeObject;
    queryPayeeResponse({ value }: queryPayeeResponseParams): EncodeObject;
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
        IbcApplicationsFeeV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
