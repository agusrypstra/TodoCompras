import React from "react";
import { Image, Text, View } from "react-native";

interface NotificationProp {
    id:number;
    message: string;
}


const NotificationComponent: React.FC<NotificationProp> = ({id,message}) => {
  return (
        <View
            style={{
            flex:1,
            backgroundColor: "#f8f8f8",
            padding: 20,
            elevation: 2,
            width: "100%",
            height: 150,
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            marginVertical: 2,
        }}
            >
            <View style={{ width: 50, height: 50, backgroundColor: '#255584', flex:1}} >

            </View>

            <View style={{ flex: 5}}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333"}}>
                    Notificación #{id}
                </Text>
                <Text style={{ fontSize: 16, color: "#333"}}>
                    {message}
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 16, color: "#888", textAlign: "right", marginRight: 10, flex:1, alignItems: "flex-end"}}>
                    18:34
                </Text>
            </View>
        </View>

  );
}
export default NotificationComponent;