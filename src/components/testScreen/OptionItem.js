import { StyleSheet, Text, View } from 'react-native';
import { getAnswer } from '../../data/scores';
import { RadioButton } from '../../elements/RadioButton';

export default function OptionItem(props) {
    const { choice, options, qid, setChoice } = props;
    const optionItems = Object.keys(options).map((option, k) => {
        let radioItem = (
            <RadioButton.Item key={k}
                disabled={setChoice === undefined}
                value={option} label={options[option]}
            />
        );
        if (!setChoice && choice && choice === option) {
            const correct = choice === getAnswer(qid);
            const color = correct ? 'limegreen' : 'coral';
            return (
                <View style={styles.scoreView}>
                    {radioItem}
                    <Text style={[styles.scoreText, { color }]}>
                        {correct ? '✓' : '✗'}
                    </Text>
                </View>
            )
        }
        else return radioItem;
    });
    return (
        <RadioButton shape='square'
            style={styles.optionItem}
            selectedValue={choice} buttonColor='limegreen'
            onValueChange={value => setChoice({ choice: value, qid })}
        >
            {optionItems}
        </RadioButton>
    );
}

const styles = StyleSheet.create({
    optionItem: {
        marginVertical: 8,
    },
    scoreText: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: 'bolder',
    },
    scoreView: {
        flexDirection: 'row',
    }
});
