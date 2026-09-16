import snow from "./assets/images/unsplash.jpg";
import summer from "./assets/images/summer.jpg";
import spring from "./assets/images/spring.jpg";
import fall from "./assets/images/fall.jpg";

export const THEMES = [
  { name: "snow", label: "Winter", bg: snow },
  { name: "spring", label: "Spring", bg: spring },
  { name: "summer", label: "Summer", bg: summer },
  { name: "fall", label: "Fall", bg: fall },
];

export const DEFAULT_THEME = THEMES[0];

export const getThemeByBg = (bg) =>
  THEMES.find((theme) => theme.bg === bg) ?? DEFAULT_THEME;
