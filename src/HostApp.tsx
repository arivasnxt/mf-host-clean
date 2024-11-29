import React, {Suspense} from "react";
import './App.css';
import {RemoteAppProps} from "mfS3Poc/compiled-types/MfS3Poc";
const MfS3Poc = React.lazy(
    () => import('mfS3Poc/MfS3Poc') as Promise<{ default: React.ComponentType<RemoteAppProps> }>,
);

function HostApp() {
    return (
        <Suspense fallback={<span>loading</span>}>
        <div>
            <div><span>I'm the host app</span></div>

            <div>
                <MfS3Poc count={4} />
            </div>
        </div>
        </Suspense>
    )
}

export default HostApp;
