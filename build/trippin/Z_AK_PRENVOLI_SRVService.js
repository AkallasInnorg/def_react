import { ODataService } from "@odata2ts/odata-service";
import { Qz_ak_prenvoli_entityId } from "./QZ_AK_PRENVOLI_SRV";
import { z_ak_prenvoli_entityCollectionService, z_ak_prenvoli_entityService } from "./service/z_ak_prenvoli_entityService";
export class Z_AK_PRENVOLI_SRVService extends ODataService {
    z_ak_prenvoli_entitySet(id) {
        const fieldName = "z_ak_prenvoli_entitySet";
        const { client, path } = this.__base;
        return typeof id === "undefined" || id === null
            ? new z_ak_prenvoli_entityCollectionService(client, path, fieldName)
            : new z_ak_prenvoli_entityService(client, path, new Qz_ak_prenvoli_entityId(fieldName).buildUrl(id));
    }
}
