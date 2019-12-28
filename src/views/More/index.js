import React from 'react';
import {ScrollView, SafeAreaView, Image, Linking} from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import {Images} from '../../assets/images';
import Responsive from '../../modules/utils/responsive';
import {NavigationRoutes} from '../../navigator/Routes';

const MoreScreen = props => {
  const goto8700 = () => {
    Linking.openURL('https://www.8700.com.au/').catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body}>
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Profile"
          styleGradient={{marginVertical: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          leftIcon={
            <Image source={Images.profile} style={styles.homeBigLeftIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.Profile)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="About kJs"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.AboutkJs)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Kilojoules and Kids"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.KilojoulesAndKids)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Which outlets?"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.WhichOutlets)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Go to 8700.com.au"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() => goto8700()}
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="About the campain"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() =>
            props.navigation.navigate(NavigationRoutes.AboutTheCampaign)
          }
          textStyle={{fontSize: Responsive.h(20)}}
        />
        <Button
          width="100%"
          height={Responsive.h(50)}
          text="Terms of use"
          styleGradient={{marginBottom: Responsive.v(16)}}
          rightIcon={
            <Image source={Images.arrow_right} style={styles.bigArrowIcon} />
          }
          onPress={() => props.navigation.navigate(NavigationRoutes.LegalStuff)}
          textStyle={{fontSize: Responsive.h(20)}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;
