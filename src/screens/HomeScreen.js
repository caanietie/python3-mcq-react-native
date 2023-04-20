/**
import { StyleSheet, View } from 'react-native';
import { constants } from '../data/constants';
import TouchTextElement from '../elements/TouchTextElement';

export default function HomeScreen(props) {
    const { setScreen } = props;
    return (
        <View style={styles.homeScreen}>
            <TouchTextElement label='Take Test'
                touchStyle={styles.touchStyle}
                textStyle={styles.textStyle}
                onPress={() => setScreen({
                    type: constants.TEST_SCREEN,
                    payload: { screen: constants.TIMELESS_SCREEN }
                })}
            />
            <TouchTextElement label='Take Timed Test'
                touchStyle={styles.touchStyle}
                textStyle={styles.textStyle}
                onPress={() => setScreen({
                    type: constants.TEST_SCREEN,
                    payload: { screen: constants.TIMER_SCREEN }
                })}
            />
            <TouchTextElement label='About'
                textStyle={styles.textStyle}
                touchStyle={styles.touchStyle}
                onPress={() => setScreen({
                    type: constants.ABOUT_SCREEN
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchStyle: {
        margin: 8,
        padding: 10,
        width: '70%',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'limegreen',
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bolder',
    },
});
**/

import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function Fraction(props) {
    const { numerator, denominator } = props;
    const styles = StyleSheet.create({
        fractionComponent: {
            fontSize: 15,
            fontStyle: 'italic',
            width: 'fit-content',
        },
        numerator: {
            display: 'block',
            borderBottomWidth: 2,
        },
        fraction: {
            width: '100%',
            textAlign: 'center',
        },
    });
    return (
        <Text style={styles.fractionComponent}>
            <Text style={[styles.numerator, styles.fraction]}>
                {numerator}
            </Text>
            <Text style={styles.fraction}>
                {denominator}
            </Text>
        </Text>
    );
}

Fraction.propTypes = {
    numerator: PropTypes.string.isRequired,
    denominator: PropTypes.string.isRequired,
};

function Integral(props) {
    const styles = StyleSheet.create({
        integralComponent: {
            flexDirection: 'row',
            // alignItems: 'center',
            backgroundColor: 'green',
        },
        text: {
            fontSize: 25,
            paddingRight: 4,
            fontWeight: 'bold',
        },
    });
    return (
        <Text style={styles.integralComponent}>
            <Text style={styles.text}>∫</Text>
            {props.children}
        </Text>
    );
}

export default function HomeScreen(props) {
    const styles = StyleSheet.create({
        homeScreen: {
            width: 'fit-content',
            flexDirection: 'row',
        },
        operator: {
            fontSize: 18,
            marginHorizontal: 5,
        },
    });
    return (
        <View style={styles.homeScreen}>
            <Fraction numerator={5}
                denominator={17}
            />
            <Text style={styles.operator}>
                +
            </Text>
            <Integral>
                <Fraction numerator={17}
                    denominator={5}
                />
            </Integral>
        </View>
    )
}
