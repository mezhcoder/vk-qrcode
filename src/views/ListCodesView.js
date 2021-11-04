import React  from "react";
import {Group, Panel, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from 'react-async';







const loadCodes = () => {
    const key_codes = new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
                bridge.unsubscribe(fn);
                resolve(e.detail.data.keys);
            }
        };

        bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
        bridge.subscribe(fn);
    });

    return new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppStorageGetResult') {
                bridge.unsubscribe(fn);
                resolve(e.detail.data.keys);
            }
        };

        bridge.send("VKWebAppStorageGet", {"keys": key_codes});
        bridge.subscribe(fn);
    });






};


function QRCodeView() {

    const { data, error, isLoading } = useAsync({ promiseFn: loadCodes });
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error.message}`

    console.log(data);
    return (
        <View activePanel="main" id="view2">
            <Panel id="main">
                <Group>
                    Data: {data.length()}
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;