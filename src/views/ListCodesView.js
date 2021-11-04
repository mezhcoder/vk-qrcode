import React from "react";
import { Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

bridge.subscribe((e) => bridgeEvent(e));

let CodesContext = React.createContext('test');


function bridgeEvent(e) {
    if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
        const arr = e.detail.data.keys;
        CodesContext = React.createContext(arr);
    }
}

function QRCodeView() {

    console.log("Список кодов:", React.useContext(CodesContext));
    // const [activeView, setActiveView] = useState('f');
    // bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
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