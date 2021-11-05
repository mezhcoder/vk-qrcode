import React from "react";
import {Div, Button, Group, Panel, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {useAsync} from "react-async";

const sha1 = require('js-sha256');

function showFrameQR() {
    console.log("Отправлен Show");
    bridge.send("VKWebAppOpenCodeReader");
}

// function bridgeEvent(e) {
//     if (e.detail.type === 'VKWebAppOpenCodeReaderResult') {
//         let url = e.detail.data.code_data.toString();
//         alert("QR код считан")
//         bridge.send("VKWebAppStorageSet", {"key": sha1(url), "value": url});
//     }
//
//     if (e.detail.type === 'VKWebAppStorageSetFailed') {
//         console.log(e.detail.data);
//     }
// }

async function statusQRCode() {
    return await new Promise((resolve, reject) => {
        const fn = e => {
            if (e.detail.type === 'VKWebAppOpenCodeReaderResult') {
                let url = e.detail.data.code_data.toString();
                bridge.send("VKWebAppStorageSet", {"key": sha1(url), "value": url});
                bridge.unsubscribe(fn);
                resolve(url);
            }

            if (e.detail.type === 'VKWebAppStorageSetFailed') {
                console.log(e.detail.data);
            }
        };

        bridge.subscribe(fn);
    });
}

function QRCodeView() {
    const { isLoading } = useAsync({ promiseFn: statusQRCode });


    return (
        <View activePanel="main" id="view1">
            <Panel id="main">
                <Group>
                    <CardGrid style={{display: "flex", justifyContent: "center"}}>
                        <Card size="l" mode="shadow" style={{width: "100%"}}>
                            <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                <Div onClick={() => showFrameQR()}>
                                    <Button style={{height: "70px"}} mode="outline" size="l" >Сканировать QR код</Button>
                                </Div>
                                {!isLoading ? <p style={{color: "green"}}>QR код считан</p> : ""}
                            </div>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
}

export default QRCodeView;