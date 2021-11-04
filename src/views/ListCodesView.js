import React, {useState} from "react";
import { Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";


let global_arr = [];

bridge.subscribe((e) => bridgeEvent(e));
function bridgeEvent(e) {
    if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
        const arr = e.detail.data.keys;
        global_arr = arr;
        console.log("отправлен запрос +1");
    }
}
bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});



function QRCodeView() {
    const [codes, setCodes] = useState([]);
    setCodes(global_arr);

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