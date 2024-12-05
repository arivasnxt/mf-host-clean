import type {FederationRuntimePlugin} from '@module-federation/enhanced/runtime';
import type {RemoteWithEntry} from "@module-federation/sdk";


declare global {
    interface Window {
        remotes: {
            [key: string]: string;
        }
    }
}

const versionInjectionPlugin: () => FederationRuntimePlugin = function () {
    return {
        name: 'mfe-version-injection-plugin',
        beforeRequest(args) {
            const version = window.remotes.appearancePage
            args.options.remotes = (args.options.remotes as RemoteWithEntry[]).map((remote) => {
                console.log({remote})
                const templatePath = remote.entry;
                if (!templatePath) {
                    return remote;
                }
                remote.entry = templatePath.replace('$VERSION', version);
                return remote;
            });
            return args;
        },
    };
};
export default versionInjectionPlugin;