import React from "react";
import {Div, Button, Group, Panel, View, CardGrid, Card} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import {connect} from 'react-redux'
import {postData} from "../redux/actions";

function showFrameQR() {
    bridge.send("VKWebAppOpenCodeReader");
}
bridge.subscribe((e) => bridgeEvent(e));

function bridgeEvent(e) {
    if (e.detail.type === 'VKWebAppOpenCodeReaderResult') {
        let url = e.detail.data.code_data.toString();
        bridge.send("VKWebAppStorageSet", {"key": url, "value": url});
    }
}

function QRCodeView({syncData}) {
    return (
        <View activePanel="main" id="view1">
            <Panel id="main">
                <Group>
                    <CardGrid style={{display: "flex", justifyContent: "center"}}>
                        <Card size="l" mode="shadow" style={{width: "100%"}}>
                            <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Div onClick={() => showFrameQR()}>
                                    <Button style={{height: "70px"}} mode="outline" size="l" >Сканировать QR код</Button>
                                </Div>
                            </div>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
}

const mapDispatchToProps = { postData }
export default connect(null, mapDispatchToProps)(QRCodeView);