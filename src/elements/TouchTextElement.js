import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function TouchTextElement(props) {
    const { touchStyle, disabled,
        onPress, textStyle, label } = props;
    return (
        <TouchableOpacity style={touchStyle}
            disabled={disabled}
            onPress={() => onPress()}
        >
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

TouchTextElement.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.bool
    ]).isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    touchStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
};

TouchTextElement.defaultProps = {
    disabled: false
};
