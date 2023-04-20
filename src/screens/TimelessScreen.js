import { View } from 'react-native';
import Questions from '../components/testScreen/Questions';

export default function TimelessScreen(props) {
    const { choice, question, questionLen, questionNum,
        setChoice, setOverlay, setQuestionNum, setScreen } = props;
    return (
        <View>
            <Questions question={question}
                setScreen={setScreen}
                choice={choice} questionNum={questionNum}
                questionLen={questionLen} setOverlay={setOverlay}
                setChoice={setChoice} setQuestion={setQuestionNum}
            />
        </View>
    );
}
