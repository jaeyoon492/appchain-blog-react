import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Input } from "./types/cosmos/bank/v1beta1/bank";
import { QueryAllBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringResponse } from "./types/cosmos/bank/v1beta1/query";
import { Metadata } from "./types/cosmos/bank/v1beta1/bank";
import { MsgSetSendEnabledResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySendEnabledResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryTotalSupplyRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryBalanceResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomOwnersByQueryResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledRequest } from "./types/cosmos/bank/v1beta1/query";
import { Output } from "./types/cosmos/bank/v1beta1/bank";
import { GenesisState } from "./types/cosmos/bank/v1beta1/genesis";
import { MsgSetSendEnabled } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomOwnersResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryBalanceRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySupplyOfRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersByQueryRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySupplyOfResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/bank/v1beta1/query";
import { Params } from "./types/cosmos/bank/v1beta1/bank";
import { QuerySpendableBalanceByDenomResponse } from "./types/cosmos/bank/v1beta1/query";
import { Supply } from "./types/cosmos/bank/v1beta1/bank";
import { Balance } from "./types/cosmos/bank/v1beta1/genesis";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { SendEnabled } from "./types/cosmos/bank/v1beta1/bank";
import { MsgMultiSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { DenomOwner } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryTotalSupplyResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersRequest } from "./types/cosmos/bank/v1beta1/query";
import { DenomUnit } from "./types/cosmos/bank/v1beta1/bank";
import { SendAuthorization } from "./types/cosmos/bank/v1beta1/authz";
import { MsgUpdateParamsResponse } from "./types/cosmos/bank/v1beta1/tx";
export { Input, QueryAllBalancesResponse, QueryDenomsMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, Metadata, MsgSetSendEnabledResponse, QuerySendEnabledResponse, MsgSendResponse, QueryTotalSupplyRequest, QueryParamsResponse, QueryBalanceResponse, QuerySpendableBalanceByDenomRequest, QueryDenomMetadataResponse, MsgSend, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, Output, GenesisState, MsgSetSendEnabled, QueryDenomOwnersResponse, QueryAllBalancesRequest, QueryBalanceRequest, QuerySupplyOfRequest, QueryDenomOwnersByQueryRequest, MsgUpdateParams, QuerySupplyOfResponse, QueryParamsRequest, Params, QuerySpendableBalanceByDenomResponse, Supply, Balance, MsgMultiSend, QueryDenomMetadataRequest, QuerySpendableBalancesResponse, QueryDenomsMetadataRequest, SendEnabled, MsgMultiSendResponse, DenomOwner, QuerySpendableBalancesRequest, QueryTotalSupplyResponse, QueryDenomOwnersRequest, DenomUnit, SendAuthorization, MsgUpdateParamsResponse };
type sendInputParams = {
    value: Input;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
    fee?: StdFee;
    memo?: string;
};
type sendOutputParams = {
    value: Output;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSupplyParams = {
    value: Supply;
    fee?: StdFee;
    memo?: string;
};
type sendBalanceParams = {
    value: Balance;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendParams = {
    value: MsgMultiSend;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSendEnabledParams = {
    value: SendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomOwnerParams = {
    value: DenomOwner;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDenomUnitParams = {
    value: DenomUnit;
    fee?: StdFee;
    memo?: string;
};
type sendSendAuthorizationParams = {
    value: SendAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type inputParams = {
    value: Input;
};
type queryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
};
type queryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
};
type queryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
};
type queryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
};
type metadataParams = {
    value: Metadata;
};
type msgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
};
type querySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type queryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type querySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
};
type queryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
};
type msgSendParams = {
    value: MsgSend;
};
type queryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
};
type querySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
};
type outputParams = {
    value: Output;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
};
type queryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
};
type queryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type querySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
};
type queryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type querySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type paramsParams = {
    value: Params;
};
type querySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
};
type supplyParams = {
    value: Supply;
};
type balanceParams = {
    value: Balance;
};
type msgMultiSendParams = {
    value: MsgMultiSend;
};
type queryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
};
type querySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
};
type queryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
};
type sendEnabledParams = {
    value: SendEnabled;
};
type msgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
};
type denomOwnerParams = {
    value: DenomOwner;
};
type querySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
};
type queryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
};
type queryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
};
type denomUnitParams = {
    value: DenomUnit;
};
type sendAuthorizationParams = {
    value: SendAuthorization;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendInput({ value, fee, memo }: sendInputParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesResponse({ value, fee, memo }: sendQueryAllBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataResponse({ value, fee, memo }: sendQueryDenomsMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringRequest({ value, fee, memo }: sendQueryDenomMetadataByQueryStringRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringResponse({ value, fee, memo }: sendQueryDenomMetadataByQueryStringResponseParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabledResponse({ value, fee, memo }: sendMsgSetSendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledResponse({ value, fee, memo }: sendQuerySendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyRequest({ value, fee, memo }: sendQueryTotalSupplyRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomRequest({ value, fee, memo }: sendQuerySpendableBalanceByDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataResponse({ value, fee, memo }: sendQueryDenomMetadataResponseParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryResponse({ value, fee, memo }: sendQueryDenomOwnersByQueryResponseParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledRequest({ value, fee, memo }: sendQuerySendEnabledRequestParams): Promise<DeliverTxResponse>;
    sendOutput({ value, fee, memo }: sendOutputParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabled({ value, fee, memo }: sendMsgSetSendEnabledParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersResponse({ value, fee, memo }: sendQueryDenomOwnersResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesRequest({ value, fee, memo }: sendQueryAllBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfRequest({ value, fee, memo }: sendQuerySupplyOfRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryRequest({ value, fee, memo }: sendQueryDenomOwnersByQueryRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfResponse({ value, fee, memo }: sendQuerySupplyOfResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomResponse({ value, fee, memo }: sendQuerySpendableBalanceByDenomResponseParams): Promise<DeliverTxResponse>;
    sendSupply({ value, fee, memo }: sendSupplyParams): Promise<DeliverTxResponse>;
    sendBalance({ value, fee, memo }: sendBalanceParams): Promise<DeliverTxResponse>;
    sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataRequest({ value, fee, memo }: sendQueryDenomMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesResponse({ value, fee, memo }: sendQuerySpendableBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataRequest({ value, fee, memo }: sendQueryDenomsMetadataRequestParams): Promise<DeliverTxResponse>;
    sendSendEnabled({ value, fee, memo }: sendSendEnabledParams): Promise<DeliverTxResponse>;
    sendMsgMultiSendResponse({ value, fee, memo }: sendMsgMultiSendResponseParams): Promise<DeliverTxResponse>;
    sendDenomOwner({ value, fee, memo }: sendDenomOwnerParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesRequest({ value, fee, memo }: sendQuerySpendableBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyResponse({ value, fee, memo }: sendQueryTotalSupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersRequest({ value, fee, memo }: sendQueryDenomOwnersRequestParams): Promise<DeliverTxResponse>;
    sendDenomUnit({ value, fee, memo }: sendDenomUnitParams): Promise<DeliverTxResponse>;
    sendSendAuthorization({ value, fee, memo }: sendSendAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    input({ value }: inputParams): EncodeObject;
    queryAllBalancesResponse({ value }: queryAllBalancesResponseParams): EncodeObject;
    queryDenomsMetadataResponse({ value }: queryDenomsMetadataResponseParams): EncodeObject;
    queryDenomMetadataByQueryStringRequest({ value }: queryDenomMetadataByQueryStringRequestParams): EncodeObject;
    queryDenomMetadataByQueryStringResponse({ value }: queryDenomMetadataByQueryStringResponseParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    msgSetSendEnabledResponse({ value }: msgSetSendEnabledResponseParams): EncodeObject;
    querySendEnabledResponse({ value }: querySendEnabledResponseParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    queryTotalSupplyRequest({ value }: queryTotalSupplyRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    querySpendableBalanceByDenomRequest({ value }: querySpendableBalanceByDenomRequestParams): EncodeObject;
    queryDenomMetadataResponse({ value }: queryDenomMetadataResponseParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    queryDenomOwnersByQueryResponse({ value }: queryDenomOwnersByQueryResponseParams): EncodeObject;
    querySendEnabledRequest({ value }: querySendEnabledRequestParams): EncodeObject;
    output({ value }: outputParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgSetSendEnabled({ value }: msgSetSendEnabledParams): EncodeObject;
    queryDenomOwnersResponse({ value }: queryDenomOwnersResponseParams): EncodeObject;
    queryAllBalancesRequest({ value }: queryAllBalancesRequestParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    querySupplyOfRequest({ value }: querySupplyOfRequestParams): EncodeObject;
    queryDenomOwnersByQueryRequest({ value }: queryDenomOwnersByQueryRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    querySupplyOfResponse({ value }: querySupplyOfResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    querySpendableBalanceByDenomResponse({ value }: querySpendableBalanceByDenomResponseParams): EncodeObject;
    supply({ value }: supplyParams): EncodeObject;
    balance({ value }: balanceParams): EncodeObject;
    msgMultiSend({ value }: msgMultiSendParams): EncodeObject;
    queryDenomMetadataRequest({ value }: queryDenomMetadataRequestParams): EncodeObject;
    querySpendableBalancesResponse({ value }: querySpendableBalancesResponseParams): EncodeObject;
    queryDenomsMetadataRequest({ value }: queryDenomsMetadataRequestParams): EncodeObject;
    sendEnabled({ value }: sendEnabledParams): EncodeObject;
    msgMultiSendResponse({ value }: msgMultiSendResponseParams): EncodeObject;
    denomOwner({ value }: denomOwnerParams): EncodeObject;
    querySpendableBalancesRequest({ value }: querySpendableBalancesRequestParams): EncodeObject;
    queryTotalSupplyResponse({ value }: queryTotalSupplyResponseParams): EncodeObject;
    queryDenomOwnersRequest({ value }: queryDenomOwnersRequestParams): EncodeObject;
    denomUnit({ value }: denomUnitParams): EncodeObject;
    sendAuthorization({ value }: sendAuthorizationParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
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
        CosmosBankV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
