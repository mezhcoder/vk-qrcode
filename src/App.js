import React, {useState} from 'react';

import './App.css';
import bridge from '@vkontakte/vk-bridge';

import QRCodeView from './views/QRCodeView'
import ListCodesView from './views/ListCodesView'
import InfoQRCodesView from './views/InfoQRCodesView'

import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    PanelHeader, Root, PanelHeaderContent, PanelHeaderContext, Cell, List,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    Icon16Dropdown,
    Icon28ArticleOutline, Icon28CameraOutline, Icon28LikeOutline,
} from "@vkontakte/icons";

bridge.send("VKWebAppInit", {}).then(r => console.log("Bridge:" , r));

function App() {
    bridge.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg" });

    const { viewWidth } = useAdaptivity();
    const [activeView, setActiveView] = useState('view1');


    const [activePanel, setActivePanel] = useState(false);

    function toggleContext () {
        setActivePanel(!activePanel);
    }

    return (

        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout header={<PanelHeader separator={false} />}>
                        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>

                            <PanelHeader>
                                <PanelHeaderContent
                                    aside={<Icon16Dropdown style={{ transform: `rotate(${activePanel ? '180deg' : '0'})` }} />}
                                    onClick={toggleContext}>
                                    VK-QRCode
                                </PanelHeaderContent>
                            </PanelHeader>

                            <PanelHeaderContext opened={activePanel} onClose={() => toggleContext}>
                                <List>
                                    <Cell
                                        before={<Icon28CameraOutline />}
                                        onClick={() => {setActiveView("view1"); setActivePanel(false)}}
                                        data-mode="all"
                                    >
                                        Отсканировать QR код
                                    </Cell>
                                    <Cell
                                        before={<Icon28LikeOutline />}
                                        onClick={() => {setActiveView("view2"); setActivePanel(false)}}
                                        data-mode="all"
                                    >
                                        Мои QR коды
                                    </Cell>
                                    <Cell
                                        before={<Icon28ArticleOutline />}
                                        onClick={() => {setActiveView("view3"); setActivePanel(false)}}
                                        data-mode="managed"
                                    >
                                        Количество QR кодов
                                    </Cell>
                                </List>
                            </PanelHeaderContext>

                            <Root activeView={activeView}>
                                <QRCodeView id="view1"/>
                                <ListCodesView id="view2"/>
                                <InfoQRCodesView id="view3"/>
                            </Root>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>


    );
}

export default App;
