// @note
// This component has being re-written into a generic component.
// Please see ActionsElement.js file.

import { StyleSheet, View } from 'react-native';
import TouchTextElement from '../../elements/TouchTextElement';

export default function TestActions(props) {
    const { setQuestion, questionNum, questionLen } = props;
    return (
        <View style={styles.testActions}>
            <TouchTextElement label='Previous'
                disabled={questionNum === 0}
                textStyle={styles.nextText}
                touchStyle={[styles.nextTouch, {
                    backgroundColor: questionNum === 0 ?
                        'rgba(50,205,50,0.5)' : 'limegreen'
                }
                ]}
                onPress={() => setQuestion(n => n > 0 ? n - 1 : n)}
            />
            <TouchTextElement label='Next'
                disabled={questionNum === questionLen - 1}
                textStyle={styles.nextText}
                touchStyle={[styles.nextTouch, {
                    backgroundColor: questionNum === questionLen - 1 ?
                        'rgba(50,205,50,0.5)' : 'limegreen'
                }]}
                onPress={() =>
                    setQuestion(n => n < questionLen - 1 ? n + 1 : n)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
