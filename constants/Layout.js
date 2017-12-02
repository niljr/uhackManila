import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  heightThird: height * 0.3,
  isSmallDevice: width < 375,
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionAbsolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
  }
};
