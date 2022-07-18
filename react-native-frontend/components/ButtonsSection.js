import { StyleSheet, Button, View } from "react-native";
import colors from "../constants/colors";
import StyledButton from "./StyledButton";

function ButtonsSection(props) {
    return (
        <View style={styles.container}>
            <StyledButton 
                    title="Edit Profile" 
                    text_style={styles.edit_button_text} 
                    style={styles.edit_button}
                />
            <StyledButton 
                title="Logout" 
                text_style={styles.edit_button_text} 
                style={styles.edit_button}
            />
        </View>
    );
}

export default ButtonsSection;

const styles = StyleSheet.create({
    container:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    edit_button:{
        width: 100
    },
    edit_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }

})