import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';
import ViewTextElement from '../../elements/ViewTextElement';

export default function QuestionItem(props) {
    const { choice, code, options, question,
        questionId, questionNum, setChoice } = props;
    let codeText;
    if (code) codeText = (
        <Text style={styles.codeText}>
            {code}
        </Text>
    );
    return (
        <View style={styles.questionItem}>
            <View style={{ flexDirection: 'row' }}>
                <ViewTextElement label={`${questionNum + 1}.`}
                    textStyle={styles.textStyle}
                    viewStyle={styles.viewStyle}
                />
                <ViewTextElement label={question}
                    textStyle={styles.textStyle}
                    viewStyle={[styles.viewStyle, {
                        width: '90%', marginLeft: 5
                    }]}
                />
            </View>
            {codeText}
            <OptionItem choice={choice}
                setChoice={setChoice}
                options={options} qid={questionId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    questionItem: {
        // Using % for height here does 
        // not work as expected. Why?
        padding: 5,
        height: 300,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: 'lightgrey',
    },
    viewStyle: {
        width: '8%',
        marginVertical: 8,
    },
    textStyle: {
        fontSize: 18,
    },
    codeText: {
        width: '80%',
        fontSize: 15,
        paddingLeft: 6,
        borderWidth: 1,
        borderRadius: 4,
        fontWeight: 'bold',
        paddingVertical: 10,
        fontFamily: 'courier',
        borderColor: 'lightgrey',
        marginHorizontal: 'auto',
        backgroundColor: 'rgba(50,205,50,0.11)',
    },
});
