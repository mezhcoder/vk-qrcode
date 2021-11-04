import React from "react";
import {Div, Button, Group, Panel, PanelHeader, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

bridge.subscribe((e) => bridgeEvent(e));

function bridgeEvent(e) {
    if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
        const arr = e.detail.data.keys;
        console.log("Переменные:", arr);
    }
}

function QRCodeView() {
    bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
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