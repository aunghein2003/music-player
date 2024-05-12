import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors, fontSize } from "@/constants/style";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "Playlists",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
