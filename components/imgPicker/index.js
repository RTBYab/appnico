// import { mainView } from "./style";
import React, { useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, Alert, View } from "react-native";

const ImgPicker = ({ submitImage, children }) => {
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert("دسترسی به گالری تصاویر میسر نشد :(", [{ text: "باشه" }]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    setUploading(true);
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    setUploading(false);

    if (res.uri == undefined) {
      return;
    }
    setImage(res.uri);
    submitImage(res.uri);
  };

  return (
    <View>
      <TouchableOpacity onPress={takeImageHandler}>{children}</TouchableOpacity>
    </View>
  );
};

export default ImgPicker;
