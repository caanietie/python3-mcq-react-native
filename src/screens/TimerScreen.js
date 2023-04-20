import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { constants } from '../data/constants';
import CountDown from '../components/testScreen/CountDown';

export default function TimerScreen(props) {
    const { timelessScreen, timeUp } = props;
    const [timer, setTimer] = useState({
        minute: constants.TIMER_MINUTE,
        second: constants.TIMER_SECOND
    });
    useEffect(() => {
        let timerId = setInterval(() => {
            if (timer.minute === 0 && timer.second === 0) timeUp();
            else setTimer(timer => {
                let { minute, second } = timer;
                if ([minute, second].some(e => e))
                    if (second > 0) --second;
                    else { second = 59; --minute }
                return { minute, second };
            });
        }, 1000);
        return () => clearInterval(timerId);
    }, [timer]);
    return (
        <View>
            <CountDown second={timer.second}
                minute={timer.minute}
                backgroundColor={
                    timer.minute <= constants.FLASH_MINUTE &&
                        timer.second <= constants.FLASH_SECOND &&
                        timer.second % 2 ? 'coral' : 'limegreen'}
            />
            {timelessScreen}
        </View>
    );
}
