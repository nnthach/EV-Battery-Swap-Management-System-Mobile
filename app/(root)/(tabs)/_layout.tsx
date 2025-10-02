import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Layout() {
  type TabIconProps = {
    focused: boolean;
    iconName: string;
  };

  const TabIcon: React.FC<TabIconProps> = ({ focused, iconName }) => {
    return (
      <View
        className={` ${
          focused && "bg-blue-primary"
        } h-12 w-12 rounded-full justify-center items-center`}
      >
        <FontAwesome5
          name={iconName as keyof typeof FontAwesome5.glyphMap}
          size={24}
          color={focused ? "white" : "gray"}
        />
      </View>
    );
  };
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderRadius: 50,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 64,
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          height: 64,
          position: "relative",
        },
        tabBarIconStyle: {
          position: "absolute",
          top: "50%",
          transform: [{ translateY: -10 }],
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="station"
        options={{
          title: "Station",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="charging-station" />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="calendar-day" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="user-alt" />
          ),
        }}
      />
    </Tabs>
  );
}
