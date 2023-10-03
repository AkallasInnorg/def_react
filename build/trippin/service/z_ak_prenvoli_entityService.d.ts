import { ODataHttpClient } from "@odata2ts/http-client-api";
import { EntityTypeServiceV2, EntitySetServiceV2 } from "@odata2ts/odata-service";
import { z_ak_prenvoli_entity, Editablez_ak_prenvoli_entity, z_ak_prenvoli_entityId } from "../Z_AK_PRENVOLI_SRVModel";
import { Qz_ak_prenvoli_entity } from "../QZ_AK_PRENVOLI_SRV";
export declare class z_ak_prenvoli_entityService<ClientType extends ODataHttpClient> extends EntityTypeServiceV2<ClientType, z_ak_prenvoli_entity, Editablez_ak_prenvoli_entity, Qz_ak_prenvoli_entity> {
    constructor(client: ClientType, basePath: string, name: string);
}
export declare class z_ak_prenvoli_entityCollectionService<ClientType extends ODataHttpClient> extends EntitySetServiceV2<ClientType, z_ak_prenvoli_entity, Editablez_ak_prenvoli_entity, Qz_ak_prenvoli_entity, z_ak_prenvoli_entityId> {
    constructor(client: ClientType, basePath: string, name: string);
}
