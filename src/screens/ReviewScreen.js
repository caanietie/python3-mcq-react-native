import { constants } from '../data/constants';
import TestScreen from './TestScreen';

export default function ReviewScreen(props) {
    const { choice, homeElement, questions, setScreen } = props;
    return (
        <TestScreen choices={choice}
            setScreen={setScreen}
            screen={constants.REVIEW_SCREEN}
            homeElement={homeElement} questions={questions}
        />
    );
}
