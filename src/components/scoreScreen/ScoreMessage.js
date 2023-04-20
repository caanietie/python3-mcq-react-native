import { StyleSheet, Text } from 'react-native';

export default function ScoreMessage(props) {
    const { score, totalQuestions } = props;
    const fontWeight = 'bold';
    return (
        <Text style={styles.scoreText}>
            You scored
            <Text style={{ fontWeight }}>
                {` ${score} `}
            </Text>
            out of
            <Text style={{ fontWeight }}>
                {` ${totalQuestions}`}
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    scoreText: {
        fontSize: 25,
        fontWeight: 500,
        marginVertical: 'auto',
    },
});
