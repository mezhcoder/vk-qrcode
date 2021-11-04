import React from "react";
import {Group, Panel, View} from "@vkontakte/vkui";


function InfoQRCodesView() {
    return (
        <View activePanel="main" id="view3">
            <Panel id="main">
                <Group>
                    <h1>Количество QR кодов</h1>
                    <p>123 шт.</p>
                </Group>
            </Panel>
        </View>
    );
}

export default InfoQRCodesView;