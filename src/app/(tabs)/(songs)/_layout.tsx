import { Stack } from "expo-router";

export default function SongsScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Songs" }} />
    </Stack>
  );
}
