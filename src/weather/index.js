import { ConnectedWeather } from './component/ComponentWeather';
import { getWeatherModule } from "./redux/module";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import React from 'react';

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getWeatherModule()]}>
            <ConnectedWeather/>
        </DynamicModuleLoader>
    )
}
