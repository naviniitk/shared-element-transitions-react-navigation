import { Dimensions } from "react-native";

export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;
const { width, height } = Dimensions.get("window");

const s = width * 0.68;

export const themeValues = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.5,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
}
