import { Stack } from "expo-router";

export default function FavoritesScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Artists" }} />
    </Stack>
  );
}