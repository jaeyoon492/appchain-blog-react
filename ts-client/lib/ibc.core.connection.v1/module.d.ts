import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { Version } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionResponse } from "./types/ibc/core/connection/v1/query";
import { MsgUpdateParams } from "./types/ibc/core/connection/v1/tx";
import { QueryClientConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { Counterparty } from "./types/ibc/core/connection/v1/connection";
import { IdentifiedConnection } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionParamsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryClientConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { ConnectionPaths } from "./types/ibc/core/connection/v1/connection";
import { GenesisState } from "./types/ibc/core/connection/v1/genesis";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirmResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/ibc/core/connection/v1/query";
import { ClientPaths } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenInitResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateResponse } from "./types/ibc/core/connection/v1/query";
import { ConnectionEnd } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenTryResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAckResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";
import { Params } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionClientStateResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateRequest } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
export { QueryConnectionsRequest, Version, QueryConnectionResponse, MsgUpdateParams, QueryClientConnectionsRequest, Counterparty, IdentifiedConnection, QueryConnectionParamsResponse, MsgUpdateParamsResponse, QueryClientConnectionsResponse, ConnectionPaths, GenesisState, MsgConnectionOpenTry, MsgConnectionOpenConfirmResponse, QueryConnectionClientStateRequest, QueryConnectionParamsRequest, ClientPaths, MsgConnectionOpenInit, MsgConnectionOpenInitResponse, QueryConnectionRequest, QueryConnectionConsensusStateResponse, ConnectionEnd, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, Params, QueryConnectionsResponse, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, MsgConnectionOpenAck };
type sendQueryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVersionParams = {
    value: Version;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionResponseParams = {
    value: QueryConnectionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedConnectionParams = {
    value: IdentifiedConnection;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionPathsParams = {
    value: ConnectionPaths;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendClientPathsParams = {
    value: ClientPaths;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionRequestParams = {
    value: QueryConnectionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionEndParams = {
    value: ConnectionEnd;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
    fee?: StdFee;
    memo?: string;
};
type queryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
};
type versionParams = {
    value: Version;
};
type queryConnectionResponseParams = {
    value: QueryConnectionResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
};
type counterpartyParams = {
    value: Counterparty;
};
type identifiedConnectionParams = {
    value: IdentifiedConnection;
};
type queryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
};
type connectionPathsParams = {
    value: ConnectionPaths;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
};
type msgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
};
type queryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
};
type queryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
};
type clientPathsParams = {
    value: ClientPaths;
};
type msgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
};
type msgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
};
type queryConnectionRequestParams = {
    value: QueryConnectionRequest;
};
type queryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
};
type connectionEndParams = {
    value: ConnectionEnd;
};
type msgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
};
type msgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
};
type msgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
};
type paramsParams = {
    value: Params;
};
type queryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
};
type queryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
};
type queryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
};
type msgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryConnectionsRequest({ value, fee, memo }: sendQueryConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendVersion({ value, fee, memo }: sendVersionParams): Promise<DeliverTxResponse>;
    sendQueryConnectionResponse({ value, fee, memo }: sendQueryConnectionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsRequest({ value, fee, memo }: sendQueryClientConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendIdentifiedConnection({ value, fee, memo }: sendIdentifiedConnectionParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsResponse({ value, fee, memo }: sendQueryConnectionParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsResponse({ value, fee, memo }: sendQueryClientConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendConnectionPaths({ value, fee, memo }: sendConnectionPathsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTry({ value, fee, memo }: sendMsgConnectionOpenTryParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirmResponse({ value, fee, memo }: sendMsgConnectionOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateRequest({ value, fee, memo }: sendQueryConnectionClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsRequest({ value, fee, memo }: sendQueryConnectionParamsRequestParams): Promise<DeliverTxResponse>;
    sendClientPaths({ value, fee, memo }: sendClientPathsParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInit({ value, fee, memo }: sendMsgConnectionOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInitResponse({ value, fee, memo }: sendMsgConnectionOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionRequest({ value, fee, memo }: sendQueryConnectionRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateResponse({ value, fee, memo }: sendQueryConnectionConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendConnectionEnd({ value, fee, memo }: sendConnectionEndParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTryResponse({ value, fee, memo }: sendMsgConnectionOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAckResponse({ value, fee, memo }: sendMsgConnectionOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirm({ value, fee, memo }: sendMsgConnectionOpenConfirmParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsResponse({ value, fee, memo }: sendQueryConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateResponse({ value, fee, memo }: sendQueryConnectionClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateRequest({ value, fee, memo }: sendQueryConnectionConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAck({ value, fee, memo }: sendMsgConnectionOpenAckParams): Promise<DeliverTxResponse>;
    queryConnectionsRequest({ value }: queryConnectionsRequestParams): EncodeObject;
    version({ value }: versionParams): EncodeObject;
    queryConnectionResponse({ value }: queryConnectionResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryClientConnectionsRequest({ value }: queryClientConnectionsRequestParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    identifiedConnection({ value }: identifiedConnectionParams): EncodeObject;
    queryConnectionParamsResponse({ value }: queryConnectionParamsResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryClientConnectionsResponse({ value }: queryClientConnectionsResponseParams): EncodeObject;
    connectionPaths({ value }: connectionPathsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgConnectionOpenTry({ value }: msgConnectionOpenTryParams): EncodeObject;
    msgConnectionOpenConfirmResponse({ value }: msgConnectionOpenConfirmResponseParams): EncodeObject;
    queryConnectionClientStateRequest({ value }: queryConnectionClientStateRequestParams): EncodeObject;
    queryConnectionParamsRequest({ value }: queryConnectionParamsRequestParams): EncodeObject;
    clientPaths({ value }: clientPathsParams): EncodeObject;
    msgConnectionOpenInit({ value }: msgConnectionOpenInitParams): EncodeObject;
    msgConnectionOpenInitResponse({ value }: msgConnectionOpenInitResponseParams): EncodeObject;
    queryConnectionRequest({ value }: queryConnectionRequestParams): EncodeObject;
    queryConnectionConsensusStateResponse({ value }: queryConnectionConsensusStateResponseParams): EncodeObject;
    connectionEnd({ value }: connectionEndParams): EncodeObject;
    msgConnectionOpenTryResponse({ value }: msgConnectionOpenTryResponseParams): EncodeObject;
    msgConnectionOpenAckResponse({ value }: msgConnectionOpenAckResponseParams): EncodeObject;
    msgConnectionOpenConfirm({ value }: msgConnectionOpenConfirmParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryConnectionsResponse({ value }: queryConnectionsResponseParams): EncodeObject;
    queryConnectionClientStateResponse({ value }: queryConnectionClientStateResponseParams): EncodeObject;
    queryConnectionConsensusStateRequest({ value }: queryConnectionConsensusStateRequestParams): EncodeObject;
    msgConnectionOpenAck({ value }: msgConnectionOpenAckParams): EncodeObject;
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
        IbcCoreConnectionV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
