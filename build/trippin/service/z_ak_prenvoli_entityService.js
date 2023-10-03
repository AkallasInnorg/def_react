import { EntityTypeServiceV2, EntitySetServiceV2 } from "@odata2ts/odata-service";
import { qz_ak_prenvoli_entity, Qz_ak_prenvoli_entityId } from "../QZ_AK_PRENVOLI_SRV";
export class z_ak_prenvoli_entityService extends EntityTypeServiceV2 {
    constructor(client, basePath, name) {
        super(client, basePath, name, qz_ak_prenvoli_entity);
    }
}
export class z_ak_prenvoli_entityCollectionService extends EntitySetServiceV2 {
    constructor(client, basePath, name) {
        super(client, basePath, name, qz_ak_prenvoli_entity, new Qz_ak_prenvoli_entityId(name));
    }
}
