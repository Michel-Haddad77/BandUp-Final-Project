import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";

function StyledButton({ onPress, title, size, style, text_style }) {
    return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        style
      ]}
    >
      <Text style={[styles.appButtonText, text_style]}>
        {title}
      </Text>
    </TouchableOpacity>
    );
}

export default StyledButton;

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: colors.primary,
      borderRadius: 10,
      padding: 10,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",

    }
  });