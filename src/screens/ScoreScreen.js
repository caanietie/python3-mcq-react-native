import { StyleSheet, View } from 'react-native';
import { constants } from '../data/constants';
import ActionsElement from '../elements/ActionsElement';
import ScoreMessage from '../components/scoreScreen/ScoreMessage';

export default function ScoreScreen(props) {
    const { homeElement, score, setScreen, choice, questions } = props;
    return (
        <View style={styles.scoreScreen}>
            {homeElement}
            <ScoreMessage score={score}
                totalQuestions={questions.length}
            />
            <ActionsElement style={styles.scoreActions}
                positiveLabel='Review result' negativeLabel='Go home'
                positiveTextStyle={styles.buttonText}
                negativeTextStyle={styles.buttonText}
                positiveTouchStyle={styles.button}
                negativeTouchStyle={styles.button}
                onPressPositive={() => setScreen({
                    type: constants.REVIEW_SCREEN,
                    payload: { choice, questions }
                })}
                onPressNegative={() => setScreen({
                    type: constants.HOME_SCREEN
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    scoreScreen: {
        height: '100%',
        alignItems: 'center',
    },
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
