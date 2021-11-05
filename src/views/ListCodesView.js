import React  from "react";
import {Group, Headline, Link, Panel, Title, View} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from 'react-async';
import {Icon32CheckCircle, Icon32Crop} from "@vkontakte/icons";







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


function QRCodeView() {

    const { data, error, isLoading } = useAsync({ promiseFn: loadCodes });
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error.message}`

    // const data = [
    //     {key: "123", value: "https://vk.com/zhcoder"},
    //     {key: "1234", value: "abc"}
    // ];

    return (
        <View activePanel="main" id="view2">
            <Panel id="main">
                <Title level="1" weight="bold" style={{fontSize: "26px", marginBottom: "12px", marginLeft: "6px"}}>Сканированные QR коды</Title>

                { data.length !== 0 ? data.map(entry => {
                    return (
                        <Group mode="card" style={{marginBottom: "-6px"}}>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <Icon32CheckCircle style={{marginRight: "6px"}}/>
                                <div className="wrapper">
                                    <Title level="2" weight="300">QR code</Title>


                                    Данные: { (entry.value.startsWith("https://") || entry.value.startsWith("http://")) ? <a target="_blank" rel="noreferrer" href={entry.value} style={{color: "#3F8AE0"}}> {entry.value}</a> : <span style={{color: "#3F8AE0"}}>{entry.value}</span> }
                                </div>
                            </div>
                        </Group>
                    )
                }) : "У вас нет QR кодов."}

            </Panel>
        </View>
    );
}

export default QRCodeView;