import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
    mode: Modes.service,
    services: {
        trippin: {
            // source: "resource/trippin.xml",
            source: "C:/Users/akallas/Desktop/def_react/source/metadata.xml",
            // sourceUrl: "https://fwsapwd01:44312/sap/opu/odata/sap/Z_AK_PRENVOLI_SRV",
            output: "build/trippin",

        }
    }
}


export default config;