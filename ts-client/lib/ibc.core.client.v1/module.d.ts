import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { MsgCreateClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { IdentifiedGenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryClientStatesResponse } from "./types/ibc/core/client/v1/query";
import { MsgIBCSoftwareUpgrade } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/client/v1/tx";
import { QueryClientStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpgradeClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/client/v1/tx";
import { MsgRecoverClient } from "./types/ibc/core/client/v1/tx";
import { ConsensusStateWithHeight } from "./types/ibc/core/client/v1/client";
import { UpgradeProposal } from "./types/ibc/core/client/v1/client";
import { Height } from "./types/ibc/core/client/v1/client";
import { QueryClientStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsRequest } from "./types/ibc/core/client/v1/query";
import { Params } from "./types/ibc/core/client/v1/client";
import { IdentifiedClientState } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStateHeightsResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusResponse } from "./types/ibc/core/client/v1/query";
import { MsgRecoverClientResponse } from "./types/ibc/core/client/v1/tx";
import { QueryClientStatusRequest } from "./types/ibc/core/client/v1/query";
import { MsgSubmitMisbehaviourResponse } from "./types/ibc/core/client/v1/tx";
import { ClientUpdateProposal } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsResponse } from "./types/ibc/core/client/v1/query";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { QueryUpgradedConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpdateClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgradeResponse } from "./types/ibc/core/client/v1/tx";
import { GenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { GenesisState } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsRequest } from "./types/ibc/core/client/v1/query";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { ClientConsensusStates } from "./types/ibc/core/client/v1/client";
export { QueryClientStateResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateResponse, MsgCreateClientResponse, MsgUpgradeClient, IdentifiedGenesisMetadata, QueryClientStatesResponse, MsgIBCSoftwareUpgrade, MsgUpdateParams, QueryClientStateRequest, MsgUpgradeClientResponse, MsgUpdateParamsResponse, MsgRecoverClient, ConsensusStateWithHeight, UpgradeProposal, Height, QueryClientStatesRequest, QueryConsensusStateHeightsRequest, Params, IdentifiedClientState, QueryConsensusStateHeightsResponse, QueryClientStatusResponse, MsgRecoverClientResponse, QueryClientStatusRequest, MsgSubmitMisbehaviourResponse, ClientUpdateProposal, QueryConsensusStatesRequest, QueryClientParamsResponse, MsgCreateClient, MsgUpdateClient, QueryUpgradedConsensusStateRequest, MsgUpdateClientResponse, MsgIBCSoftwareUpgradeResponse, GenesisMetadata, QueryConsensusStateResponse, GenesisState, QueryConsensusStateRequest, QueryConsensusStatesResponse, QueryClientParamsRequest, MsgSubmitMisbehaviour, ClientConsensusStates };
type sendQueryClientStateResponseParams = {
    value: QueryClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientParams = {
    value: MsgUpgradeClient;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateRequestParams = {
    value: QueryClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientParams = {
    value: MsgRecoverClient;
    fee?: StdFee;
    memo?: string;
};
type sendConsensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeProposalParams = {
    value: UpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendHeightParams = {
    value: Height;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedClientStateParams = {
    value: IdentifiedClientState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClientUpdateProposalParams = {
    value: ClientUpdateProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientParams = {
    value: MsgCreateClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientParams = {
    value: MsgUpdateClient;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisMetadataParams = {
    value: GenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
    fee?: StdFee;
    memo?: string;
};
type sendClientConsensusStatesParams = {
    value: ClientConsensusStates;
    fee?: StdFee;
    memo?: string;
};
type queryClientStateResponseParams = {
    value: QueryClientStateResponse;
};
type queryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
};
type queryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type msgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
};
type msgUpgradeClientParams = {
    value: MsgUpgradeClient;
};
type identifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
};
type queryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
};
type msgIbcsoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryClientStateRequestParams = {
    value: QueryClientStateRequest;
};
type msgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgRecoverClientParams = {
    value: MsgRecoverClient;
};
type consensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
};
type upgradeProposalParams = {
    value: UpgradeProposal;
};
type heightParams = {
    value: Height;
};
type queryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
};
type queryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
};
type paramsParams = {
    value: Params;
};
type identifiedClientStateParams = {
    value: IdentifiedClientState;
};
type queryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
};
type queryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
};
type msgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
};
type queryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
};
type msgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
};
type clientUpdateProposalParams = {
    value: ClientUpdateProposal;
};
type queryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
};
type queryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
};
type msgCreateClientParams = {
    value: MsgCreateClient;
};
type msgUpdateClientParams = {
    value: MsgUpdateClient;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type msgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
};
type msgIbcsoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
};
type genesisMetadataParams = {
    value: GenesisMetadata;
};
type queryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
};
type queryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
};
type queryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
};
type msgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
};
type clientConsensusStatesParams = {
    value: ClientConsensusStates;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryClientStateResponse({ value, fee, memo }: sendQueryClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateRequest({ value, fee, memo }: sendQueryUpgradedClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateResponse({ value, fee, memo }: sendQueryUpgradedClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateClientResponse({ value, fee, memo }: sendMsgCreateClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClient({ value, fee, memo }: sendMsgUpgradeClientParams): Promise<DeliverTxResponse>;
    sendIdentifiedGenesisMetadata({ value, fee, memo }: sendIdentifiedGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesResponse({ value, fee, memo }: sendQueryClientStatesResponseParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgrade({ value, fee, memo }: sendMsgIBCSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryClientStateRequest({ value, fee, memo }: sendQueryClientStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClientResponse({ value, fee, memo }: sendMsgUpgradeClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClient({ value, fee, memo }: sendMsgRecoverClientParams): Promise<DeliverTxResponse>;
    sendConsensusStateWithHeight({ value, fee, memo }: sendConsensusStateWithHeightParams): Promise<DeliverTxResponse>;
    sendUpgradeProposal({ value, fee, memo }: sendUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendHeight({ value, fee, memo }: sendHeightParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesRequest({ value, fee, memo }: sendQueryClientStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsRequest({ value, fee, memo }: sendQueryConsensusStateHeightsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendIdentifiedClientState({ value, fee, memo }: sendIdentifiedClientStateParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsResponse({ value, fee, memo }: sendQueryConsensusStateHeightsResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusResponse({ value, fee, memo }: sendQueryClientStatusResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClientResponse({ value, fee, memo }: sendMsgRecoverClientResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusRequest({ value, fee, memo }: sendQueryClientStatusRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviourResponse({ value, fee, memo }: sendMsgSubmitMisbehaviourResponseParams): Promise<DeliverTxResponse>;
    sendClientUpdateProposal({ value, fee, memo }: sendClientUpdateProposalParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesRequest({ value, fee, memo }: sendQueryConsensusStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsResponse({ value, fee, memo }: sendQueryClientParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateClient({ value, fee, memo }: sendMsgCreateClientParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClient({ value, fee, memo }: sendMsgUpdateClientParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClientResponse({ value, fee, memo }: sendMsgUpdateClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgradeResponse({ value, fee, memo }: sendMsgIBCSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendGenesisMetadata({ value, fee, memo }: sendGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateResponse({ value, fee, memo }: sendQueryConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateRequest({ value, fee, memo }: sendQueryConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesResponse({ value, fee, memo }: sendQueryConsensusStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsRequest({ value, fee, memo }: sendQueryClientParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviour({ value, fee, memo }: sendMsgSubmitMisbehaviourParams): Promise<DeliverTxResponse>;
    sendClientConsensusStates({ value, fee, memo }: sendClientConsensusStatesParams): Promise<DeliverTxResponse>;
    queryClientStateResponse({ value }: queryClientStateResponseParams): EncodeObject;
    queryUpgradedClientStateRequest({ value }: queryUpgradedClientStateRequestParams): EncodeObject;
    queryUpgradedClientStateResponse({ value }: queryUpgradedClientStateResponseParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    msgCreateClientResponse({ value }: msgCreateClientResponseParams): EncodeObject;
    msgUpgradeClient({ value }: msgUpgradeClientParams): EncodeObject;
    identifiedGenesisMetadata({ value }: identifiedGenesisMetadataParams): EncodeObject;
    queryClientStatesResponse({ value }: queryClientStatesResponseParams): EncodeObject;
    msgIbcsoftwareUpgrade({ value }: msgIbcsoftwareUpgradeParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryClientStateRequest({ value }: queryClientStateRequestParams): EncodeObject;
    msgUpgradeClientResponse({ value }: msgUpgradeClientResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRecoverClient({ value }: msgRecoverClientParams): EncodeObject;
    consensusStateWithHeight({ value }: consensusStateWithHeightParams): EncodeObject;
    upgradeProposal({ value }: upgradeProposalParams): EncodeObject;
    height({ value }: heightParams): EncodeObject;
    queryClientStatesRequest({ value }: queryClientStatesRequestParams): EncodeObject;
    queryConsensusStateHeightsRequest({ value }: queryConsensusStateHeightsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    identifiedClientState({ value }: identifiedClientStateParams): EncodeObject;
    queryConsensusStateHeightsResponse({ value }: queryConsensusStateHeightsResponseParams): EncodeObject;
    queryClientStatusResponse({ value }: queryClientStatusResponseParams): EncodeObject;
    msgRecoverClientResponse({ value }: msgRecoverClientResponseParams): EncodeObject;
    queryClientStatusRequest({ value }: queryClientStatusRequestParams): EncodeObject;
    msgSubmitMisbehaviourResponse({ value }: msgSubmitMisbehaviourResponseParams): EncodeObject;
    clientUpdateProposal({ value }: clientUpdateProposalParams): EncodeObject;
    queryConsensusStatesRequest({ value }: queryConsensusStatesRequestParams): EncodeObject;
    queryClientParamsResponse({ value }: queryClientParamsResponseParams): EncodeObject;
    msgCreateClient({ value }: msgCreateClientParams): EncodeObject;
    msgUpdateClient({ value }: msgUpdateClientParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    msgUpdateClientResponse({ value }: msgUpdateClientResponseParams): EncodeObject;
    msgIbcsoftwareUpgradeResponse({ value }: msgIbcsoftwareUpgradeResponseParams): EncodeObject;
    genesisMetadata({ value }: genesisMetadataParams): EncodeObject;
    queryConsensusStateResponse({ value }: queryConsensusStateResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryConsensusStateRequest({ value }: queryConsensusStateRequestParams): EncodeObject;
    queryConsensusStatesResponse({ value }: queryConsensusStatesResponseParams): EncodeObject;
    queryClientParamsRequest({ value }: queryClientParamsRequestParams): EncodeObject;
    msgSubmitMisbehaviour({ value }: msgSubmitMisbehaviourParams): EncodeObject;
    clientConsensusStates({ value }: clientConsensusStatesParams): EncodeObject;
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
        IbcCoreClientV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
