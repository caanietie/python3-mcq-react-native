import { ScrollView, StyleSheet, View } from 'react-native';
import { useReducer, useState } from 'react';
import { constants } from '../data/constants';
import clone from 'clone';
import TimerScreen from './TimerScreen';
import OverlayScreen from './OverlayScreen';
import TimelessScreen from './TimelessScreen';

export default function TestScreen(props) {
    const { choices, homeElement, questions, screen, setScreen } = props;
    const [questionNum, setQuestionNum] = useState(0);
    let testScreen, overlayComponent;
    if (screen === constants.REVIEW_SCREEN) testScreen = (
        <TimelessScreen questionNum={questionNum}
            question={questions[questionNum]}
            choice={choices} questionLen={questions.length}
            setQuestionNum={setQuestionNum} setScreen={setScreen}
        />
    );
    else {
        const [overlay, setOverlay] = useState(false);
        const [choice, setChoice] = useReducer(
            function (state, action) {
                const { choice, qid } = action;
                const _state = clone(state, false);
                _state[questionNum] = { choice, qid };
                return _state;
            }, []
        );
        testScreen = (
            <TimelessScreen setOverlay={setOverlay}
                questionNum={questionNum}
                choice={choice} questionLen={questions.length}
                setChoice={setChoice} setQuestionNum={setQuestionNum}
                setScreen={setScreen} question={questions[questionNum]}
            />
        );
        if (screen === constants.TIMER_SCREEN)
            testScreen = (
                <TimerScreen timelessScreen={testScreen}
                    timeUp={() => setScreen({
                        type: constants.SCORE_SCREEN,
                        payload: { choice, questions }
                    })}
                />
            );
        if (overlay) overlayComponent = (
            <OverlayScreen choice={choice}
                onPressCancel={() => setOverlay(!overlay)}
                setScreen={setScreen} questions={questions}
                unanswered={questions.length - choice.filter(c => c).length}
            />
        );
    }
    return (
        <View style={styles.testScreen}>
            <ScrollView style={{ height: '100%' }}>
                {homeElement}
                {testScreen}
            </ScrollView>
            {overlayComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    testScreen: {
        height: '100%',
    },
});
