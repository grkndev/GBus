import { Tabs } from "expo-router";
import React from "react";
import TabBarLayout from "@/components/TabBar/TabBarLayout";

export default function TabLayout() {
  return <TabBarLayout />;
  // <Tabs tabBar={(props) => <TabBarLayout {...props} />}></Tabs>;
}
