import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  //   const TabIcon = ({ focused, iconName }) => {
  //     return (
  //       <View
  //         className={` ${
  //           focused && "bg-beige-primary"
  //         } h-12 w-12 rounded-full justify-center items-center`}
  //       >
  //         <Ionicons
  //           name={iconName}
  //           size={24}
  //           color={focused ? "#57298D" : "gray"}
  //         />
  //       </View>
  //     );
  //   };
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          //   tabBarIcon: ({ focused }) => (
          //     <TabIcon focused={focused} iconName="home-outline" />
          //   ),
        }}
      />

      <Tabs.Screen
        name="station"
        options={{
          title: "Station",
          headerShown: false,
          //   tabBarIcon: ({ focused }) => (
          //     <TabIcon focused={focused} iconName="person-outline" />
          //   ),
        }}
      />
    </Tabs>
  );
}
