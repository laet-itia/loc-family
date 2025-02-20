import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const CustomCarousel = ({ data, itemHeight = 300 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / screenWidth);
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    if (activeIndex < data.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (activeIndex + 1) * screenWidth,
        animated: true,
      });
    } else {
      // Retour au début si on est à la fin
      scrollViewRef.current?.scrollTo({
        x: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={goToNextSlide}
            style={[styles.slideContainer, { height: itemHeight }]}
          >
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Indicateurs */}
      <View style={styles.pagination}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                { width: dotWidth, opacity },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
  },
  slideContainer: {
    width: screenWidth,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginHorizontal: 4,
  },
});

export default CustomCarousel;