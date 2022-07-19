import { StyleSheet, Button, View } from "react-native";
import colors from "../constants/colors";
import StyledButton from "./StyledButton";

function ButtonsSection({route}) {
    console.log("route in buttons: " , route);
    const type = route.params.displayed_user.user_type;

    return (
        <View style={styles.container}>

            <StyledButton 
                title={ //if the displayed user is a musician => Request to apply
                    type === 2? "Request to Apply": "Apply"} 
                text_style={styles.edit_button_text} 
                style={styles.edit_button}
            />
            <StyledButton 
                title="Message" 
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
        width: 130
    },
    edit_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }

})