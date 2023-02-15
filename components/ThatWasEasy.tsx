import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

export function ThatWasEasy() {
   const [sound, setSound] = React.useState<Sound>();

   async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/sound/that_was_easy.mp3')
      );
      setSound(sound);
      await sound.playAsync();
   }

   React.useEffect(() => {
      return sound
         ? () => {
              sound.unloadAsync();
           }
         : undefined;
   }, [sound]);
   return (
      <TouchableOpacity onPress={playSound}>
         <Image source={require('../assets/images/buttonImage.jpg')} />
      </TouchableOpacity>
   );
}
