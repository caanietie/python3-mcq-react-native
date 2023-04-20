import { StyleSheet, View } from 'react-native';
import { constants } from '../../data/constants';
import QuestionItem from './QuestionItem';
import QuestionNumber from './QuestionNumber';
import ActionsElement from '../../elements/ActionsElement';
import TouchTextElement from '../../elements/TouchTextElement';

export default function Questions(props) {
    const { question, questionLen, questionNum, setScreen,
        setQuestion, setChoice, choice, setOverlay } = props;
    return (
        <>
            <QuestionNumber questionNum={questionNum}
                questionLen={questionLen} setQuestion={setQuestion}
            />
            <QuestionItem code={question.code}
                options={question.options}
                questionId={question.id} setChoice={setChoice}
                question={question.question} questionNum={questionNum}
                choice={choice[questionNum] ?
                    choice[questionNum].choice : ''}
            />
            <View style={styles.questionActions}>
                <ActionsElement style={styles.testActions}
                    positiveLabel='Previous' negativeLabel='Next'
                    positiveTextStyle={styles.nextText}
                    negativeTextStyle={styles.nextText}
                    positiveDisabled={questionNum === 0}
                    negativeDisabled={questionNum === questionLen - 1}
                    positiveTouchStyle={[styles.nextTouch, {
                        backgroundColor: questionNum === 0 ?
                            'rgba(50,205,50,0.5)' : 'limegreen'
                    }]}
                    negativeTouchStyle={[styles.nextTouch, {
                        backgroundColor: questionNum === questionLen - 1 ?
                            'rgba(50,205,50,0.5)' : 'limegreen'
                    }]}
                    onPressPositive={() => setQuestion(n => n > 0 ? n - 1 : n)}
                    onPressNegative={() =>
                        setQuestion(n => n < questionLen - 1 ? n + 1 : n)}
                />
                <TouchTextElement textStyle={styles.finishText}
                    label={`Finish ${setChoice ? 'Test' : 'Review'}`}
                    touchStyle={styles.finishTouch}
                    onPress={() => {
                        if (setChoice) setOverlay(overlay => !overlay)
                        else setScreen({ type: constants.HOME_SCREEN })
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    finishText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bolder',
    },
    finishTouch: {
        width: '90%',
        borderRadius: 5,
        paddingVertical: 8,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'limegreen',
    },
    questionActions: {
        width: '100%',
        paddingHorizontal: 10,
    },
    testActions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    nextText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bolder',
    },
    nextTouch: {
        width: '40%',
        borderRadius: 5,
        paddingVertical: 8,
    },
});
