import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";

function StyledButton({ onPress, title, size, style, text_style, disabled }) {
    return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled?
        [styles.disabled_button, style] : [styles.appButtonContainer,style]
      }
      // if button is disabled => no functionality
      disabled = {disabled}
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
    disabled_button:{
      backgroundColor: '#FEDDC9', //light orange
      borderRadius: 10,
      padding: 10
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",

    }
  });