import { ODataHttpClient } from "@odata2ts/http-client-api";
import { ODataService } from "@odata2ts/odata-service";
import { z_ak_prenvoli_entityId } from "./Z_AK_PRENVOLI_SRVModel";
import { z_ak_prenvoli_entityCollectionService, z_ak_prenvoli_entityService } from "./service/z_ak_prenvoli_entityService";
export declare class Z_AK_PRENVOLI_SRVService<ClientType extends ODataHttpClient> extends ODataService<ClientType> {
    z_ak_prenvoli_entitySet(): z_ak_prenvoli_entityCollectionService<ClientType>;
    z_ak_prenvoli_entitySet(id: z_ak_prenvoli_entityId): z_ak_prenvoli_entityService<ClientType>;
}
