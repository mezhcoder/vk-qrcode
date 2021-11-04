import React from 'react';

import './App.css';
import bridge from '@vkontakte/vk-bridge';

import QRCodeView from './views/QRCodeView'

import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    PanelHeader,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

bridge.send("VKWebAppInit", {}).then(r => console.log("Bridge:" , r));

function App() {
    const { viewWidth } = useAdaptivity();

    return (

        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout header={<PanelHeader separator={false} />}>
                        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
                            <QRCodeView/>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>


    );
}

export default App;
