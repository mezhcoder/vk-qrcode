import React from "react";
import {Group, Panel, Title, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from "react-async";

async function loadCodes() {
    const key_codes = await new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppStorageGetKeysResult') {
                bridge.unsubscribe(fn);
                resolve(e.detail.data.keys);
            }
        };

        bridge.send("VKWebAppStorageGetKeys", {"count": 1000, "offset": 0});
        bridge.subscribe(fn);
    });
    if (key_codes.length === 0) return [];

    return await new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppStorageGetResult') {
                bridge.unsubscribe(fn);
                resolve(e.detail.data.keys);
            }
        };

        bridge.send("VKWebAppStorageGet", {"keys": key_codes});
        bridge.subscribe(fn);
    });
}


function InfoQRCodesView() {
    const { data, error, isLoading } = useAsync({ promiseFn: loadCodes });
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error.message}`

    return (
        <View activePanel="main" id="view3">
            <Panel id="main">
                <Group>
                    <Title level="1" weight="bold" style={{marginTop: "6px", fontSize: "26px", marginBottom: "12px", marginLeft: "6px"}}>Количество QR кодов</Title>
                    <p>
                        <b style={{marginLeft: "6px"}}>{data.length}</b> шт.
                    </p>
                </Group>
            </Panel>
        </View>
    );
}

export default InfoQRCodesView;