import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="pomodoro" options={{ title: 'Pomodoro'}} />
        </Stack>
    )
}