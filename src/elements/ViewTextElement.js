import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function ViewTextElement(props) {
    const { viewStyle, textStyle, label } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{label}</Text>
        </View>
    );
}

ViewTextElement.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.bool
    ]).isRequired,
    viewStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
};
