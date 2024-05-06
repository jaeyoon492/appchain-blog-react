import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { DelayedVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { Period } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { ContinuousVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { PermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { BaseVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { PeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
export { DelayedVestingAccount, Period, MsgCreatePeriodicVestingAccountResponse, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, ContinuousVestingAccount, PermanentLockedAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, BaseVestingAccount, PeriodicVestingAccount, MsgCreateVestingAccount };
type sendDelayedVestingAccountParams = {
    value: DelayedVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodParams = {
    value: Period;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendContinuousVestingAccountParams = {
    value: ContinuousVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPermanentLockedAccountParams = {
    value: PermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendBaseVestingAccountParams = {
    value: BaseVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodicVestingAccountParams = {
    value: PeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type delayedVestingAccountParams = {
    value: DelayedVestingAccount;
};
type periodParams = {
    value: Period;
};
type msgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
};
type msgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
};
type msgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
};
type continuousVestingAccountParams = {
    value: ContinuousVestingAccount;
};
type permanentLockedAccountParams = {
    value: PermanentLockedAccount;
};
type msgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
};
type msgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
};
type baseVestingAccountParams = {
    value: BaseVestingAccount;
};
type periodicVestingAccountParams = {
    value: PeriodicVestingAccount;
};
type msgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendDelayedVestingAccount({ value, fee, memo }: sendDelayedVestingAccountParams): Promise<DeliverTxResponse>;
    sendPeriod({ value, fee, memo }: sendPeriodParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccountResponse({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccountResponse({ value, fee, memo }: sendMsgCreateVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccountResponse({ value, fee, memo }: sendMsgCreatePermanentLockedAccountResponseParams): Promise<DeliverTxResponse>;
    sendContinuousVestingAccount({ value, fee, memo }: sendContinuousVestingAccountParams): Promise<DeliverTxResponse>;
    sendPermanentLockedAccount({ value, fee, memo }: sendPermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccount({ value, fee, memo }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendBaseVestingAccount({ value, fee, memo }: sendBaseVestingAccountParams): Promise<DeliverTxResponse>;
    sendPeriodicVestingAccount({ value, fee, memo }: sendPeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse>;
    delayedVestingAccount({ value }: delayedVestingAccountParams): EncodeObject;
    period({ value }: periodParams): EncodeObject;
    msgCreatePeriodicVestingAccountResponse({ value }: msgCreatePeriodicVestingAccountResponseParams): EncodeObject;
    msgCreateVestingAccountResponse({ value }: msgCreateVestingAccountResponseParams): EncodeObject;
    msgCreatePermanentLockedAccountResponse({ value }: msgCreatePermanentLockedAccountResponseParams): EncodeObject;
    continuousVestingAccount({ value }: continuousVestingAccountParams): EncodeObject;
    permanentLockedAccount({ value }: permanentLockedAccountParams): EncodeObject;
    msgCreatePermanentLockedAccount({ value }: msgCreatePermanentLockedAccountParams): EncodeObject;
    msgCreatePeriodicVestingAccount({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject;
    baseVestingAccount({ value }: baseVestingAccountParams): EncodeObject;
    periodicVestingAccount({ value }: periodicVestingAccountParams): EncodeObject;
    msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject;
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
        CosmosVestingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
