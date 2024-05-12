import { Stack } from "expo-router";

export default function PlaylistsScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Playlists" }} />
    </Stack>
  );
}
