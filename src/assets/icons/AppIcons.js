import {
  FontAwesome,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../colors/AppColor";

export const ICONS = {
  search: <FontAwesome name="search" size={24} color={COLORS.white_bg} />,
  top_up: <FontAwesome name="get-pocket" size={24} color={COLORS.white_bg} />,
  arrow_left: (
    <FontAwesome name="arrow-left" size={24} color={COLORS.white_bg} />
  ),
  arrow_right: (
    <FontAwesome name="arrow-right" size={24} color={COLORS.white_bg} />
  ),
  filter: <FontAwesome name="filter" size={24} color={COLORS.white_bg} />,
  location: <Octicons name="location" size={24} />,
  plus_circle: (
    <FontAwesome name="plus-circle" size={24} color={COLORS.white_bg} />
  ),
  times_circle: (
    <FontAwesome name="times-circle" size={24} color={COLORS.white_bg} />
  ),
  play: <FontAwesome name="play" size={24} color={COLORS.white_bg} />,
  home: <FontAwesome name="home" size={24} />,
  credit_card: (
    <FontAwesome name="credit-card" size={24} color={COLORS.white_bg} />
  ),
  ticket: (
    <MaterialCommunityIcons name="ticket" size={24} color={COLORS.white_bg} />
  ),
};
