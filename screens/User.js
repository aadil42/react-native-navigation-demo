import {View, Text, Pressable, StyleSheet} from "react-native";

const User = ({navigation}) => {
    
    const pressHandler = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>This is User screen</Text>
            <Pressable 
             style={styles.button}
             onPress={pressHandler}
             android_ripple={{color: "#ccc"}}
             >
                <Text style={styles.text}>Open Menu</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    button: {
        backgroundColor: "black",
        padding: 10,
        width: "50%",
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        color: "white",
        overflow: "hidden"
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
});

export default User;