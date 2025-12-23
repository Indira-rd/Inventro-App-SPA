import router from "./routes.js";
import theme from "./lib/theme-switcher.js";

router.start();

function handleThemeSwitcher() {
  theme();
}
document.addEventListener("DOMContentLoaded", handleThemeSwitcher);
