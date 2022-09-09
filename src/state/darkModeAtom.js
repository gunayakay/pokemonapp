import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);
const darkModeAtom = atomWithStorage("darkMode", false, storage);

export default darkModeAtom;
