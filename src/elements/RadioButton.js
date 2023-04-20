// author='Anietie (aakjhonclems@gmail.com)'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

export function RadioButton(props) {
    const { selectedValue, shape, style,
        onValueChange, buttonColor } = props;
    RadioButton.shape = shape;
    RadioButton.buttonColor = buttonColor;
    RadioButton.selectedValue = selectedValue;
    RadioButton.onValueChange = onValueChange;
    return (
        <View style={style}>
            {props.children}
        </View>
    );
}

RadioButton.Item = function (props) {
    const { label, value, disabled } = props;
    const backgroundColor = RadioButton.selectedValue === value ?
        RadioButton.buttonColor : 'transparent';
    const borderRadius = RadioButton.shape === 'circle' ? '50%' : 2;
    return (
        <View style={styles.itemView}>
            <TouchableOpacity disabled={disabled}
                style={[styles.buttonStyle, { borderRadius }]}
                onPress={() => RadioButton.onValueChange(value)}
            >
                <Text style={[styles.textStyle, {
                    backgroundColor, borderRadius
                }]} />
            </TouchableOpacity>
            <Text style={styles.itemLabel}>{label}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    itemView: {
        margin: 4,
        // width: '80%',
        flexDirection: 'row',
    },
    itemLabel: {
        fontSize: 18,
    },
    buttonStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        borderStyle: 'solid',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    textStyle: {
        width: 14,
        height: 14,
    },
});

RadioButton.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
    selectedValue: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]),
    buttonColor: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    shape: PropTypes.oneOf(['circle', 'square', 'checkmark']),
};

RadioButton.Item.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]),
    value: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]).isRequired,
    // itemLabelStyle: PropTypes.oneOfType([
    //     PropTypes.object, PropTypes.array, PropTypes.number
    // ]),
    // itemViewStyle: PropTypes.oneOfType([
    //     PropTypes.object, PropTypes.array, PropTypes.number
    // ]),
};

RadioButton.defaultProps = {
    shape: 'circle',
    buttonColor: 'dodgerblue',
};

RadioButton.Item.defaultProps = {
    disabled: false,
};
