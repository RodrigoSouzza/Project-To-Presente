import * as React from 'react';
import { Provider, Button as PaperButton, Paragraph, Dialog, Portal } from 'react-native-paper';


const CustomDialog = (props) => {
    return (
    <Provider>
        <Portal>
            <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
            <Dialog.Title>{props.title}</Dialog.Title>
            <Dialog.Content>
            <Paragraph>{props.message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <PaperButton onPress={() => props.onClose(false)}>Ok</PaperButton>
                </Dialog.Actions>
             </Dialog>
        </Portal>
    </Provider>
    )
}
export default CustomDialog 
