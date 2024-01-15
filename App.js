// App.js
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import YourComponent from "./YourComponent";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Any initialization code
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourComponent">
        <Stack.Screen name="YourComponent" component={YourComponent} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
