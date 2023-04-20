// @note
// This component has being re-written into a generic component.
// Please see ActionsElement.js file.

import { StyleSheet, View } from 'react-native';
import { constants } from '../../data/constants';
import TouchTextElement from '../../elements/TouchTextElement';

export default function ScoreActions(props) {
    const { choice, setScreen, questions } = props;
    return (
        <View style={styles.scoreActions}>
            <TouchTextElement label='Review result'
                textStyle={styles.buttonText}
                touchStyle={styles.button}
                onPress={() => setScreen({
                    type: constants.REVIEW_SCREEN,
                    payload: { choice, questions }
                })}
            />
            <TouchTextElement label='Go home'
                textStyle={styles.buttonText}
                touchStyle={styles.button}
                onPress={() => setScreen({
                    type: constants.HOME_SCREEN
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    scoreActions: {
        width: '100%',
        marginBottom: '15%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bolder',
    },
    button: {
        height: 40,
        width: '80%',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'limegreen',
    },
});
