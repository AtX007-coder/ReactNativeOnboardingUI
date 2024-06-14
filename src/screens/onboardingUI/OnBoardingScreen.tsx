import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';

import {Container} from '../../components';
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const onDone = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.innerContainer}>
      <Onboarding
        onDone={onDone}
        controlStatusBar={true}
        pages={[
          {
            backgroundColor: COLORS.BABY_BLUE,
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/lottieAnimations/sample1.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Get Started',
            subtitle:
              'Create an account or log in to start using the app. Enjoy your journey with us!',
          },
          {
            backgroundColor: COLORS.KELLY_GREEN,
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/lottieAnimations/sample2.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Stay Connected',
            subtitle:
              'Keep in touch with your friends and family with our seamless communication tools. Chat, call, and share your moments.',
          },
          {
            backgroundColor: COLORS.ROSE,
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/lottieAnimations/sample4.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Explore Features',
            subtitle:
              'Discover new features and functionalities designed to make your life easier. Swipe to learn more!',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
  },
  lottieContainer: {
    width: width * 0.9,
    height: width * 0.9,
  },
});

export default OnBoardingScreen;
