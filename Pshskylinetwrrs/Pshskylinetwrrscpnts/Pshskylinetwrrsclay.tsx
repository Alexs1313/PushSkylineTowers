import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Pshskylinetwrrsclay = ({
  children,
  pshskylinetwrrsScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  pshskylinetwrrsScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(6, 69, 106)', 'rgb(6, 11, 28)']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.8}}
      style={styles.pshskylinetwrrsBackground}>
      {pshskylinetwrrsScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.pshskylinetwrrsScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.pshskylinetwrrsFill}>{children}</View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pshskylinetwrrsScrollContent: {
    flexGrow: 1,
  },
  pshskylinetwrrsFill: {
    flex: 1,
  },
  pshskylinetwrrsBackground: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
});

export default Pshskylinetwrrsclay;
