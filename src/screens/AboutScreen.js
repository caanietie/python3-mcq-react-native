import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen(props) {
    const { homeElement } = props;
    return (
        <View style={styles.aboutScreen}>
            {homeElement}
            <Text style={{ fontSize: 20 }}>
                Hello Grace,
            </Text>
            <Text style={{ fontSize: 18 }}>
                This screen shows information about
                the author of this work.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    aboutScreen: {
    },
});
