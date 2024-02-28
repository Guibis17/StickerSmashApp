import { Pressable, Text, Pressable } from 'react-native'

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer} >
            <Pressable
                styles={styles.button}
                onPress={()=> alert (`Você pressionou ${label}`)}
            >
                <Text style = {styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )}

const styles = StyleSheet.create({})