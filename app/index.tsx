import { View, Text, ImageBackground } from 'react-native'
import beachImage from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground
        source={require('@/assets/meditation-images/beach.webp')}
        resizeMode='cover'
        className='flex-1'
      >
        <LinearGradient colors={['rgba(0,0,0,0.4)','rgba(0,0,0,0.8)']} className='flex-1'>
          <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
            <View>
              <Text className='text-center text-white font-bold text-4xl'>
                Simple Meditation
              </Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <CustomButton onPress={()=>console.log('tap')} title='Get Started' />
            <StatusBar style='light' />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}
export default App