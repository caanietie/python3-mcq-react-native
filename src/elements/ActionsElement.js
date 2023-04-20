import { View } from 'react-native';
import PropTypes from 'prop-types';
import TouchTextElement from './TouchTextElement';

export default function ActionsElement(props) {
    const { positiveLabel, positiveTextStyle, positiveTouchStyle,
        negativeLabel, negativeTextStyle, negativeTouchStyle,
        positiveDisabled, negativeDisabled, style,
        onPressPositive, onPressNegative } = props;
    return (
        <View style={style}>
            <TouchTextElement label={positiveLabel}
                onPress={() => onPressPositive()}
                touchStyle={positiveTouchStyle}
                textStyle={positiveTextStyle}
                disabled={positiveDisabled}
            />
            <TouchTextElement label={negativeLabel}
                onPress={() => onPressNegative()}
                touchStyle={negativeTouchStyle}
                textStyle={negativeTextStyle}
                disabled={negativeDisabled}
            />
        </View>
    );
}

ActionsElement.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array, PropTypes.number, PropTypes.object
    ]),

    positiveLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.bool
    ]).isRequired,
    positiveTextStyle: PropTypes.oneOfType([
        PropTypes.array, PropTypes.number, PropTypes.object
    ]),
    positiveTouchStyle: PropTypes.oneOfType([
        PropTypes.array, PropTypes.number, PropTypes.object
    ]),
    positiveDisabled: PropTypes.bool,
    onPressPositive: PropTypes.func.isRequired,

    negativeLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.bool
    ]).isRequired,
    negativeTextStyle: PropTypes.oneOfType([
        PropTypes.array, PropTypes.number, PropTypes.object
    ]),
    negativeTouchStyle: PropTypes.oneOfType([
        PropTypes.array, PropTypes.number, PropTypes.object
    ]),
    negativeDisabled: PropTypes.bool,
    onPressNegative: PropTypes.func.isRequired,
};
