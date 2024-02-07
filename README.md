#### React Native videoplayer with RN-media-console

In the world of React Native development, achieving smooth and engaging video playback is a game-changer. 
Whether you're building a social network, educational platform, or entertainment app, a seamless video experience is essential. 
The most popular and feature-rich library at the time of writing is `react-native-video`, boasting support for ads, subtitles, and various other functionalities. 
However, it's important to note that `react-native-video` lacks a unified set of controls seamlessly compatible between Android and iOS. It relies on basic native controls, 
leading to a fragmented user experience. https://react-native-video.github.io/react-native-video/component/props#controls

This is where `react-native-media-console` steps in. Built on top of `react-native-video`, it serves as a comprehensive video player, 
offering a seamless set of controls that harmoniously work across both Android and iOS platforms. With `react-native-media-console`, 
you can elevate your video interactions, ensuring a consistent and user-friendly experience. 



1. Let's start by creating an Expo app using `npx create-expo-app my-app` in the terminal.
2. Run `cd my-app` to navigate to the project directory.
3. Run `yarn add react-native-video` or `npm install react-native-video`
4. Run `npx expo prebuild` so `ios` and `android` folders are updated accordingly with `react-native-video`'s native code.
5. Run `yarn ios` or `yarn android` to run the app.
