import React, {useState} from "react";
import { Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";



function QRCodeView() {
    const [codes, setCodes] = useState([]);

    function bridgeEvent(e) {
        if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
            const arr = e.detail.data.keys;
            setCodes(arr);
        }
    }

    bridge.subscribe((e) => bridgeEvent(e));
    bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});

    return (
        <View activePanel="main" id="view2">
            <Panel id="main">
                <Group>
                    <h1>Список твоих QR кодов</h1>
                    {"Arr"} {codes.toString()}
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;