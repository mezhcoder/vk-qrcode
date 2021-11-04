import React from "react";
import {Div, Button, Group, Panel, PanelHeader, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


function send() {
    bridge.send("VKWebAppOpenCodeReader");
}

function QRCodeView() {
    return (
        <View activePanel="main" id="view1">
            <Panel id="main">
                <PanelHeader>VK-QRCode</PanelHeader>
                <Group>
                    <CardGrid style={{display: "flex", justifyContent: "center"}}>
                        <Card size="l" mode="shadow" style={{width: "100%"}}>
                            <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Div onClick={() => send()}>
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