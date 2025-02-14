import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

interface ProfileSectionProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const ProfileSection = ({ title, icon, onPress }: ProfileSectionProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center p-4 bg-[#1A1A1A] rounded-lg mb-3"
  >
    <Ionicons name={icon} size={24} color="#FFFFFF" />
    <Text className="text-white text-lg ml-3 flex-1">{title}</Text>
    <Ionicons name="chevron-forward" size={24} color="#666666" />
  </TouchableOpacity>
);

export default function UserScreen() {
  const handlePersonalInfo = () => {
    // Handle personal info navigation
  };

  const handlePasswordUpdate = () => {
    // Handle password update navigation
  };

  const handleCards = () => {
    // Handle cards navigation
  };

  const handleLogout = () => {
    // Handle logout
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]">
      <ScrollView className="flex-1 px-4">
        {/* Header */}
        <View className="items-center py-6">
          <View className="w-24 h-24 bg-[#1A1A1A] rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={48} color="#666666" />
          </View>
          <Text className="text-white text-2xl font-bold">John Doe</Text>
          {/* <Text className="text-gray-400">john.doe@example.com</Text> */}
        </View>

        {/* Profile Sections */}
        <View className="mt-6">
          <ProfileSection
            title="Kişisel Bilgiler"
            icon="person-outline"
            onPress={handlePersonalInfo}
          />
          <ProfileSection
            title="Şifre Güncelle"
            icon="lock-closed-outline"
            onPress={handlePasswordUpdate}
          />
          <ProfileSection
            title="Kartlarım"
            icon="card-outline"
            onPress={handleCards}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          className="mt-6 p-4 bg-red-600 rounded-lg items-center"
        >
          <Text className="text-white text-lg font-semibold">Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
