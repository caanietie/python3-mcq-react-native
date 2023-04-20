import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function TouchImageElement(props) {
    const { disabled, touchStyle, imageStyle, source, onPress } = props;
    return (
        <TouchableOpacity style={touchStyle}
            disabled={disabled} onPress={() => onPress()}
        >
            <Image style={imageStyle}
                source={source}
            />
        </TouchableOpacity>
    );
}

TouchImageElement.propTypes = {
    touchStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
    imageStyle: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]).isRequired,
    onPress: PropTypes.func.isRequired,
    source: PropTypes.string.isRequired,
};

TouchImageElement.defaultProps = {
    disabled: false,
};
