import { View, Text, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useCallback } from "react";
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  interpolateColor,
  useSharedValue,
  withTiming,
  interpolate
} from "react-native-reanimated";

interface AnimatedSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const AnimatedSwitch = ({ value, onValueChange }: AnimatedSwitchProps) => {
  const offset = useSharedValue(value ? 28 : 0);
  
  const toggleSwitch = useCallback(() => {
    const newValue = !value;
    offset.value = withSpring(newValue ? 28 : 0, {
      mass: 1,
      damping: 15,
      stiffness: 120,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    });
    onValueChange(newValue);
  }, [value, onValueChange]);

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offset.value,
      [0, 28],
      ['#3e3e3e', '#ffffff']
    );

    return {
      backgroundColor,
      transform: [{ translateX: offset.value }],
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offset.value,
      [0, 28],
      ['#1f1f1f', '#333333']
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Pressable onPress={toggleSwitch}>
      <Animated.View 
        className="w-14 h-8 rounded-full justify-center px-[2px]"
        style={containerStyle}
      >
        <Animated.View 
          className="w-7 h-7 rounded-full shadow-sm"
          style={animatedStyles}
        />
      </Animated.View>
    </Pressable>
  );
};

interface SettingsSectionProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  value?: string;
}

const SettingsSection = ({ 
  title, 
  icon, 
  onPress, 
  hasSwitch, 
  switchValue,
  onSwitchChange,
  value
}: SettingsSectionProps) => {
  const handlePress = () => {
    if (hasSwitch && onSwitchChange) {
      onSwitchChange(!switchValue);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      className="flex-row items-center p-4 bg-[#1A1A1A] rounded-lg mb-3"
    >
      <Ionicons name={icon} size={24} color="#FFFFFF" />
      <Text className="text-white text-lg ml-3 flex-1">{title}</Text>
      {hasSwitch ? (
        <AnimatedSwitch
          value={switchValue || false}
          onValueChange={onSwitchChange || (() => {})}
        />
      ) : value ? (
        <Text className="text-gray-400 mr-2">{value}</Text>
      ) : (
        <Ionicons name="chevron-forward" size={24} color="#666666" />
      )}
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("Türkçe");

  const handleThemeToggle = (value: boolean) => {
    setIsDarkMode(value);
    // Implement theme change logic
  };

  const handleLanguagePress = () => {
    // Navigate to language selection screen
  };

  const handleAboutPress = () => {
    // Navigate to about screen
  };

  const handleSupportPress = () => {
    // Navigate to support screen
  };

  const handlePrivacyPress = () => {
    // Navigate to privacy policy screen
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]">
      <ScrollView className="flex-1 px-4">
        {/* Header */}
        <View className="py-6">
          <Text className="text-white text-2xl font-bold">Ayarlar</Text>
        </View>

        {/* Appearance Section */}
        <View className="mb-6">
          <Text className="text-gray-400 text-sm mb-2 uppercase">Görünüm</Text>
          <SettingsSection
            title="Koyu Tema"
            icon="moon-outline"
            hasSwitch={true}
            switchValue={isDarkMode}
            onSwitchChange={handleThemeToggle}
          />
          <SettingsSection
            title="Dil"
            icon="language-outline"
            onPress={handleLanguagePress}
            value={selectedLanguage}
          />
        </View>

        {/* App Info Section */}
        <View className="mb-6">
          <Text className="text-gray-400 text-sm mb-2 uppercase">Uygulama</Text>
          <SettingsSection
            title="Hakkında"
            icon="information-circle-outline"
            onPress={handleAboutPress}
          />
          <SettingsSection
            title="Destek"
            icon="help-circle-outline"
            onPress={handleSupportPress}
          />
          <SettingsSection
            title="Gizlilik Politikası"
            icon="shield-checkmark-outline"
            onPress={handlePrivacyPress}
          />
        </View>

        {/* Version Info */}
        <View className="items-center mt-4">
          <Text className="text-gray-500">Versiyon 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
