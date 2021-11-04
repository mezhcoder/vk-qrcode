import React from "react";
import {Div, Button, Group, Panel, PanelHeader, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


function send() {
    bridge.send("VKWebAppOpenCodeReader");
}

function QRCodeView() {
    return (
        <View activePanel="main" id="view2">
            <Panel id="main">
                <Group>
                    <h1>Список твоих QR кодов</h1>
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;