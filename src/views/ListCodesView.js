import React  from "react";
import {Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from 'react-async';







const myFunction = () => {
    return new Promise((resolve, reject) => {

        bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
        bridge.subscribe((e) => bridgeEvent(e));
        function bridgeEvent(e) {
            if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
                // setCodes(e.detail.data.keys);
                console.log("запрос +1");
                bridge.unsubscribe(e);
                bridge.unsubscribe(bridgeEvent);
                bridge.unsubscribe(this);
                resolve(e.detail.data.keys);
            }
        }
    });
};


function QRCodeView() {

    const { data, error, isLoading } = useAsync({ promiseFn: myFunction });
    if (isLoading) return "Loading...";
    if (error) return `Something went wrong: ${error.message}`

    return (
        <View activePanel="main" id="view2">
            <Panel id="main">
                <Group>
                    Data: {data}
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;