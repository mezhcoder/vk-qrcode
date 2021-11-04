import React  from "react";
import {Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from 'react-async';







const loadCodes = () => {
    return new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
                bridge.unsubscribe(fn);
                resolve(e.detail.data.keys);
            }
        };

        bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
        bridge.subscribe(fn);
    });
};


function QRCodeView() {

    const { data, error, isLoading } = useAsync({ promiseFn: loadCodes });
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error.message}`

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