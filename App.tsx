import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        resizeMode="contain"
        controls
        volume={0}
        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
        style={styles.backgroundVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
