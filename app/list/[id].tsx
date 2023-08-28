import { Stack, useGlobalSearchParams } from "expo-router";
import { View, Text } from "react-native";


const DetailsPage = () => {
    const { id } = useGlobalSearchParams();


    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
            <Text>My Details for : {id}</Text>
        </View>
    )
}

export default DetailsPage;