

Add the package from npm.



## HomeScreen.tsx


```Javascript
import { useUserPreference, UserPreferenceModal } from 'rn-user-preference-modal';
const HomeScreen = () => {
  const { performLogout } = useLogout(); // Provide your logout implementation
 
  const { isUserPreferenceOpen, handleOpenUserPreference, handleCloseUserPreference } = useUserPreference();

  return (
    <View>
      <View>
        <TouchableOpacity onPress={handleOpenUserPreference}>
          <Text>...</Text>
        </TouchableOpacity>
      </View>

    
      <UserPreferenceModal
        visible={isUserPreferenceOpen}
        onClose={handleCloseUserPreference}
        onLogout={performLogout}
        config={{
          headerTitle: 'Custom Settings',
          logoutButtonText: 'Custom Logout',
        }}
      >
        <Text>... specific modal content ...</Text>
      </UserPreferenceModal>
      
    </View>
   );
};

``````


## AppNavigator.tsx

````Javascript

import { UserPreferenceProvider } from 'rn-user-preference-modal';

export const MainApp: React.FC = () => {
...

return (
    <NavigationContainer>
        <UserPreferenceProvider>
          <Stack.Navigator>
            ...
          </Stack.Navigator>
        </UserPreferenceProvider>
    </NavigationContainer>
  );
}

``````


