import { StyleSheet, Text, View } from 'react-native';
import { sprintf } from 'sprintf-js';

export default function CountDown(props) {
    const { backgroundColor, minute, second } = props;
    return (
        <View style={[styles.timerComponent, { backgroundColor }]}>
            <Text style={styles.timerText}>
                {sprintf('%02d : %02d', minute, second)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    timerComponent: {
        width: '30%',
        borderRadius: 5,
        paddingVertical: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 25,
        color: 'white',
        marginHorizontal: 5,
        fontWeight: 'bolder',
    },
});
