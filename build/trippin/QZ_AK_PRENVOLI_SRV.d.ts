import { QStringV2Path, QDateTimeV2Path, QId, QStringParam, QueryObject } from "@odata2ts/odata-query-objects";
import { z_ak_prenvoli_entityId } from "./Z_AK_PRENVOLI_SRVModel";
export declare class Qz_ak_prenvoli_entity extends QueryObject {
    readonly Mandt: QStringV2Path<string>;
    readonly Passname: QStringV2Path<string>;
    readonly Bookid: QStringV2Path<string>;
    readonly Fldate: QDateTimeV2Path<string>;
}
export declare const qz_ak_prenvoli_entity: Qz_ak_prenvoli_entity;
export declare class Qz_ak_prenvoli_entityId extends QId<z_ak_prenvoli_entityId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
