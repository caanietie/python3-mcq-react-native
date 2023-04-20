import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';
import ActionsElement from '../elements/ActionsElement';

export default function OverlayScreen(props) {
    const { choice, onPressCancel,
        setScreen, questions, unanswered } = props;
    let message = 'Do you want to submit?';
    if (unanswered > 0)
        message = `${unanswered} questions are still unanswered.\n${message}`
    const marginVertical = 10;
    return (
        <>
            <View style={styles.overlay} />
            <View style={styles.overlayScreen}>
                <Text style={styles.overlayText}>{message}</Text>
                <ActionsElement positiveLabel='Submit'
                    style={styles.overlayActions}
                    positiveTextStyle={styles.buttonText}
                    positiveTouchStyle={styles.buttonTouch}
                    onPressPositive={() => setScreen({
                        type: constants.SCORE_SCREEN,
                        payload: { questions, choice }
                    })}
                    negativeLabel='Go back'
                    negativeTextStyle={styles.buttonText}
                    onPressNegative={() => onPressCancel()}
                    negativeTouchStyle={[styles.buttonTouch, {
                        marginVertical
                    }]}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        zIndex: 1,
        opacity: 0.2,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'grey',
    },
    overlayScreen: {
        zIndex: 2,
        top: '15%',
        left: '5%',
        width: '90%',
        opacity: 0.9,
        height: '70%',
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
        justifyContent: 'space-between',
    },
    overlayText: {
        padding: 15,
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center',
    },
    overlayActions: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bolder',
    },
    buttonTouch: {
        height: 40,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'limegreen',
    },
});
