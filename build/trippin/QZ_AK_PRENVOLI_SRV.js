import { QStringV2Path, QDateTimeV2Path, QId, QStringParam, QueryObject } from "@odata2ts/odata-query-objects";
export class Qz_ak_prenvoli_entity extends QueryObject {
    Mandt = new QStringV2Path(this.withPrefix("Mandt"));
    Passname = new QStringV2Path(this.withPrefix("Passname"));
    Bookid = new QStringV2Path(this.withPrefix("Bookid"));
    Fldate = new QDateTimeV2Path(this.withPrefix("Fldate"));
}
export const qz_ak_prenvoli_entity = new Qz_ak_prenvoli_entity();
export class Qz_ak_prenvoli_entityId extends QId {
    params = [new QStringParam("Bookid")];
    getParams() {
        return this.params;
    }
}
