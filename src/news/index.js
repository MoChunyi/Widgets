import {ConnectedHackerNews} from './component/ComponentNews';
import {getNewsModule} from './redux/module';
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import React from 'react';

export default function DynamicHackerNews() {
    return (
        // define the module dependency for the HackerNews component
        // DynamicModuleLoader is a HOC provided by redux-dynamic-modules-react
        // It loads the module on ComponentDidMount and unloads on ComponentDidUnmount
        <DynamicModuleLoader modules={[getNewsModule()]}>
            {/* 
                This is the Hacker News component that is connected to the redux store,
                the connected component need not know anything about modules. 
            */}
            <ConnectedHackerNews />
        </DynamicModuleLoader>
    );
}