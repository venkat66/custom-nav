import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const UShapedBackground = ({ width = 415, height = 80, fill = '#000' }) => (
    <View>
      <Svg width={width} height={height} viewBox="0 0 1000 150">
        <Path
          d="M0 120v-100S0 116 500 116s500 -116 500 -116v100H0Z"
          fill={fill}
        />
      </Svg>
    </View>
  );

export default UShapedBackground;
