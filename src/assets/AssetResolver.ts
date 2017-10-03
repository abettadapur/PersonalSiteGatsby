import * as project from "./project.svg";
import * as react from "./react.svg";
import * as visualstudio from "./visualstudio.svg";

export namespace AssetResolver {
    export function resolveAsset(assetName: string): any {
        switch (assetName) {
            case "project": return project;
            case "react": return react;
            case "visualstudio": return visualstudio;
        }
    }
}