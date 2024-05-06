import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryDenomHashRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomHashResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomResponse } from "./types/ibc/applications/transfer/v1/query";
import { MsgUpdateParams } from "./types/ibc/applications/transfer/v1/tx";
import { MsgTransfer } from "./types/ibc/applications/transfer/v1/tx";
import { QueryTotalEscrowForDenomRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomTraceResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryParamsResponse } from "./types/ibc/applications/transfer/v1/query";
import { Allocation } from "./types/ibc/applications/transfer/v1/authz";
import { DenomTrace } from "./types/ibc/applications/transfer/v1/transfer";
import { Params } from "./types/ibc/applications/transfer/v1/transfer";
import { TransferAuthorization } from "./types/ibc/applications/transfer/v1/authz";
import { QueryEscrowAddressRequest } from "./types/ibc/applications/transfer/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/transfer/v1/tx";
import { QueryDenomTracesRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomTracesResponse } from "./types/ibc/applications/transfer/v1/query";
import { MsgTransferResponse } from "./types/ibc/applications/transfer/v1/tx";
import { GenesisState } from "./types/ibc/applications/transfer/v1/genesis";
import { QueryDenomTraceRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/transfer/v1/query";
export { QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressResponse, QueryTotalEscrowForDenomResponse, MsgUpdateParams, MsgTransfer, QueryTotalEscrowForDenomRequest, QueryDenomTraceResponse, QueryParamsResponse, Allocation, DenomTrace, Params, TransferAuthorization, QueryEscrowAddressRequest, MsgUpdateParamsResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, MsgTransferResponse, GenesisState, QueryDenomTraceRequest, QueryParamsRequest };
type sendQueryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferParams = {
    value: MsgTransfer;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAllocationParams = {
    value: Allocation;
    fee?: StdFee;
    memo?: string;
};
type sendDenomTraceParams = {
    value: DenomTrace;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendTransferAuthorizationParams = {
    value: TransferAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferResponseParams = {
    value: MsgTransferResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type queryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
};
type queryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
};
type queryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
};
type queryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgTransferParams = {
    value: MsgTransfer;
};
type queryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
};
type queryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type allocationParams = {
    value: Allocation;
};
type denomTraceParams = {
    value: DenomTrace;
};
type paramsParams = {
    value: Params;
};
type transferAuthorizationParams = {
    value: TransferAuthorization;
};
type queryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
};
type queryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
};
type msgTransferResponseParams = {
    value: MsgTransferResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryDenomHashRequest({ value, fee, memo }: sendQueryDenomHashRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomHashResponse({ value, fee, memo }: sendQueryDenomHashResponseParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressResponse({ value, fee, memo }: sendQueryEscrowAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomResponse({ value, fee, memo }: sendQueryTotalEscrowForDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgTransfer({ value, fee, memo }: sendMsgTransferParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomRequest({ value, fee, memo }: sendQueryTotalEscrowForDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceResponse({ value, fee, memo }: sendQueryDenomTraceResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendAllocation({ value, fee, memo }: sendAllocationParams): Promise<DeliverTxResponse>;
    sendDenomTrace({ value, fee, memo }: sendDenomTraceParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendTransferAuthorization({ value, fee, memo }: sendTransferAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressRequest({ value, fee, memo }: sendQueryEscrowAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesRequest({ value, fee, memo }: sendQueryDenomTracesRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesResponse({ value, fee, memo }: sendQueryDenomTracesResponseParams): Promise<DeliverTxResponse>;
    sendMsgTransferResponse({ value, fee, memo }: sendMsgTransferResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceRequest({ value, fee, memo }: sendQueryDenomTraceRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    queryDenomHashRequest({ value }: queryDenomHashRequestParams): EncodeObject;
    queryDenomHashResponse({ value }: queryDenomHashResponseParams): EncodeObject;
    queryEscrowAddressResponse({ value }: queryEscrowAddressResponseParams): EncodeObject;
    queryTotalEscrowForDenomResponse({ value }: queryTotalEscrowForDenomResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgTransfer({ value }: msgTransferParams): EncodeObject;
    queryTotalEscrowForDenomRequest({ value }: queryTotalEscrowForDenomRequestParams): EncodeObject;
    queryDenomTraceResponse({ value }: queryDenomTraceResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    allocation({ value }: allocationParams): EncodeObject;
    denomTrace({ value }: denomTraceParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    transferAuthorization({ value }: transferAuthorizationParams): EncodeObject;
    queryEscrowAddressRequest({ value }: queryEscrowAddressRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryDenomTracesRequest({ value }: queryDenomTracesRequestParams): EncodeObject;
    queryDenomTracesResponse({ value }: queryDenomTracesResponseParams): EncodeObject;
    msgTransferResponse({ value }: msgTransferResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryDenomTraceRequest({ value }: queryDenomTraceRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
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
        IbcApplicationsTransferV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
