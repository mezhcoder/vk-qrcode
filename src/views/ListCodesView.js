import React, {useEffect, useState} from "react";
import {Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


function QRCodeView() {
    const [codes, setCodes] = useState([]);

    bridge.subscribe((e) => bridgeEvent(e));
    function bridgeEvent(e) {
        if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
            setCodes(e.detail.data.keys);
            console.log("отправлен запрос +1");
        }
    }

    useEffect(() => {
        console.log("render");
        bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
    }, [])

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