import { Tabs, TabList, TabTrigger, TabSlot, useTabSlot } from "expo-router/ui";
import { BlurView } from "expo-blur";
import { Platform, View, Text } from "react-native";
import { Home, Clock, Map, User, Settings } from "lucide-react-native";
import { usePathname } from "expo-router";

const paths = {
  index: "/",
  history: "/history",
  map: "/map",
  profile: "/user",
  settings: "/settings",
};
export default function TabBarLayout() {
  const pathName = usePathname();

  return (
    <Tabs>
      <TabSlot />
      <TabList
        style={{
          backgroundColor: "#0A0A0A",
          borderTopWidth: 1,
          borderTopColor: "#232323",
          height: 96,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 24,
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <TabTrigger name="index" href="/">
          <View className="rounded-2xl p-4">
            <Home
              size={24}
              color={pathName === paths.index ? "#fff" : "#888"}
            />
          </View>
        </TabTrigger>
        <TabTrigger name="explore" href="/history">
          <View className="rounded-2xl p-4">
            <Clock
              size={24}
              color={pathName === paths.history ? "#fff" : "#888"}
            />
          </View>
        </TabTrigger>

        <TabTrigger name="map" href="/map">
          <View className="bg-white rounded-2xl p-4 rotate-45">
            <View className="-rotate-45">
              <Map size={24} color="#000" />
            </View>
          </View>
        </TabTrigger>

        <TabTrigger name="profile" href="/user">
          <View className="rounded-2xl p-4 ">
            <User
              size={24}
              color={pathName === paths.profile ? "#fff" : "#888"}
            />
          </View>
        </TabTrigger>
        <TabTrigger name="settings" href="/settings">
          <View className="rounded-2xl p-4">
            <Settings
              size={24}
              color={pathName === paths.settings ? "#fff" : "#888"}
            />
          </View>
        </TabTrigger>
      </TabList>
      {Platform.OS === "ios" && (
        <BlurView
          tint="dark"
          intensity={100}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 83,
          }}
        />
      )}
    </Tabs>
  );
}
