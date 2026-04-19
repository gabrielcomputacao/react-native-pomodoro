import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#021123",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#021123",
        },
        drawerLabelStyle: {
          color: "#fff",
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerShown: false,
          drawerItemStyle:{
            display: 'none'
          }
        }}
      />
      <Drawer.Screen
        name="add-task/index"
        options={{
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />
      <Drawer.Screen
        name="pomodoro"
        options={{
         title: '',
         drawerLabel: 'Timer'
        }}
      />
      <Drawer.Screen
        name="task/index"
        options={{
         title: '',
         drawerLabel: 'Lista de tarefas'
        }}
      />
    </Drawer>
  );
}
