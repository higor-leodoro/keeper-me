import { TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import SafeScreen from "@/components/SafeScreen";
import Header from "@/components/Header";
import DrawerSceneWrapper from "@/constants/DrawerSceneWarapper";
import ControlledTextInput from "@/components/ControlledTextInput";

import useViewModel from "./useViewModel";
import colors from "@/constants/colors";
import CustomText from "@/components/CustomText";
import MainButton from "@/components/MainButton";
import styles from "./styles";

export default function RegisterTransaction() {
  const { control } = useViewModel();
  return (
    <DrawerSceneWrapper>
      <SafeScreen>
        <View>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <ControlledTextInput
            name="description"
            control={control}
            placeholder="Description"
          />
          <ControlledTextInput
            name="value"
            control={control}
            placeholder="Value"
          />
          <View style={styles.registerButtonContainer}>
            <TouchableOpacity style={styles.registerButton}>
              <Feather name="arrow-up" size={24} color={colors.background} />
              <CustomText text="Income" color={colors.textDark} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
              <Feather name="arrow-down" size={24} color={colors.background} />
              <CustomText text="Expense" color={colors.textDark} />
            </TouchableOpacity>
          </View>
          <MainButton title="Register" />
        </View>
      </SafeScreen>
    </DrawerSceneWrapper>
  );
}
