import { StyleSheet, View } from 'react-native';
import TouchTextElement from '../../elements/TouchTextElement';

export default function QuestionNumber(props) {
    const { setQuestion, questionNum, questionLen } = props;
    const questionNumber = [];
    let backgroundColor;
    for (let k = 0; k < questionLen; k++) {
        backgroundColor = questionNum === k ?
            'rgba(50,205,50,0.5)' : 'limegreen';
        questionNumber.push(
            <TouchTextElement key={k}
                textStyle={styles.questionTextStyle}
                label={k + 1} disabled={questionNum === k}
                touchStyle={[
                    styles.questionTouchStyle, { backgroundColor }
                ]}
                onPress={() => setQuestion(k)}
            />
        );
    }
    return (
        <View style={styles.questionNumber}>
            {questionNumber}
        </View>
    );
}

const styles = StyleSheet.create({
    questionNumber: {
        flexWrap: 'wrap',
        marginVertical: 5,
        flexDirection: 'row',
    },
    questionTextStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bolder',
    },
    questionTouchStyle: {
        width: 30,
        height: 30,
        borderRadius: 4,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
