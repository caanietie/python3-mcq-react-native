// @note
// This component has being re-written into a generic component.
// Please see ActionsElement.js file.

import { StyleSheet, View } from 'react-native';
import { constants } from '../../data/constants';
import TouchTextElement from '../../elements/TouchTextElement';

export default function OverlayActions(props) {
    const { choice, onPressCancel, setScreen, questions } = props;
    const marginVertical = 10;
    return (
        <View style={styles.overlayActions}>
            <TouchTextElement label='Submit'
                textStyle={styles.buttonText}
                touchStyle={styles.buttonTouch}
                onPress={() => setScreen({
                    type: constants.SCORE_SCREEN,
                    payload: { questions, choice }
                })}
            />
            <TouchTextElement label='Go back'
                textStyle={styles.buttonText}
                onPress={() => onPressCancel()}
                touchStyle={[styles.buttonTouch, { marginVertical }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlayActions: {
        width: '100%',
        alignItems: 'center',
    },
    buttonTouch: {
        height: 40,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'limegreen',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bolder',
    },
});
