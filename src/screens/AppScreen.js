import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { constants } from '../data/constants';
import { getQuestions } from '../data/scores';
import { scoreTest } from '../data/scores';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';
import AboutScreen from './AboutScreen';
import ScoreScreen from './ScoreScreen';
import ReviewScreen from './ReviewScreen';
import homeIcon from '../images/home-icon-white@32.png';
import backgroundImage from '../images/background@128.png';
import TouchImageElement from '../elements/TouchImageElement';

export default function AppScreen() {
    const [screen, setScreen] = useState({ type: constants.HOME_SCREEN });
    const homeElement = (
        <TouchImageElement source={homeIcon}
            imageStyle={styles.homeImageStyle}
            touchStyle={styles.homeTouchStyle}
            onPress={() => setScreen({
                type: constants.HOME_SCREEN
            })}
        />
    );
    let screenType;
    if (screen.type === constants.HOME_SCREEN)
        screenType = <HomeScreen setScreen={setScreen} />;
    else if (screen.type === constants.TEST_SCREEN)
        screenType = (
            <TestScreen setScreen={setScreen}
                screen={screen.payload.screen}
                questions={getQuestions()} homeElement={homeElement}
            />
        );
    else if (screen.type === constants.SCORE_SCREEN)
        screenType = (
            <ScoreScreen setScreen={setScreen}
                questions={screen.payload.questions}
                score={scoreTest(screen.payload.choice)}
                choice={screen.payload.choice} homeElement={homeElement}
            />
        );
    else if (screen.type === constants.REVIEW_SCREEN)
        screenType = (
            <ReviewScreen setScreen={setScreen}
                questions={screen.payload.questions}
                choice={screen.payload.choice} homeElement={homeElement}
            />
        );
    else if (screen.type === constants.ABOUT_SCREEN)
        screenType = <AboutScreen homeElement={homeElement} />;
    return (
        <SafeAreaView style={styles.appScreen}>
            <ImageBackground source={backgroundImage}
                style={styles.backgroundImage} resizeMode='contain'
            >
                {screenType}
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appScreen: {
        width: '96%',
        height: '98%',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    homeImageStyle: {
        width: 20,
        height: 20,
        margin: 'auto',
    },
    homeTouchStyle: {
        width: 30,
        height: 30,
        borderRadius: 4,
        marginLeft: 'auto',
        backgroundColor: 'limegreen',
    },
});
