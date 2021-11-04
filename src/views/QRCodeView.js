import React from "react";
import {Div, Button, Group, Panel, PanelHeader, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


function showFrameQR() {
    bridge.send("VKWebAppOpenCodeReader");
}
bridge.subscribe((e) => bridgeEvent(e));

function bridgeEvent(e) {
    if (e.detail.type === 'VKWebAppOpenCodeReaderResult') {
        let url = e.detail.data.code_data.toString();
        console.log("Получен URL", url)
        bridge.send("VKWebAppStorageSet", {"key": url, "value": url});
    }
}

function QRCodeView() {
    return (
        <View activePanel="main" id="view1">
            <Panel id="main">
                <Group>
                    <CardGrid style={{display: "flex", justifyContent: "center"}}>
                        <Card size="l" mode="shadow" style={{width: "100%"}}>
                            <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Div onClick={() => showFrameQR()}>
                                    <Button style={{height: "70px"}} mode="outline" size="l" >Сканировать QR код</Button>
                                </Div>
                            </div>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;