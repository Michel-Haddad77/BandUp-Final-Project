import { StyleSheet, Button, View } from "react-native";
import colors from "../colors/colors";

function ButtonsSection(props) {
    return (
        <View style={styles.container}>
            <Button title="Apply" color={colors.primary} style={styles.button}/>
            <Button title="Message" color={colors.primary} style={styles.button}/>
        </View>
    );
}

export default ButtonsSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button:{
        borderRadius: 10
    }

})