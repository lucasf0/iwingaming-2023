const menu = [
  {
    title: "Dashboard",
    link: "dashboard",
    icon: "bxs-dashboard",
  },
  {
    title: "User",
    hr: true,
  },
  {
    title: "Users",
    link: "users",
    icon: "bx-user",
  },
  // {
  //   title: "Players",
  //   link: "players",
  //   icon: "bxl-play-store",
  // },
  {
    title: "Tournament",
    hr: true,
  },
  {
    title: "Games",
    link: "games",
    icon: "bxs-game",
  },
  {
    title: "Tournaments",
    link: "tours",
    icon: "bxs-dice-5",
  },
  {
    title: "Rewards",
    link: "prizes",
    icon: "bxs-award",
  },
  {
    title: "Reports",
    link: "reports",
    icon: "bxs-report",
  },
  {
    title: "Configuration",
    hr: true,
  },
  {
    title: "Configuration",
    link: "config",
    icon: "bxs-cog",
  },
];


const str_stage = [
  {
    name: "countdown",
    label: "Countdown",
    type: "number",
    placeholder: "Type Countdown",
    autoFoucs: true,
  },
  {
    name: "min_player",
    label: "Minimum Players",
    type: "number",
    placeholder: "Type Minimum Players",
  },
  {
    name: "max_player",
    label: "Maximum Players",
    type: "number",
    placeholder: "Type Maximum Players",
  },
  {
    name: "buyin",
    label: "Buy in",
    type: "number",
    placeholder: "Type Buy in",
  },
  {
    name: "balance",
    label: "Start Balance",
    type: "number",
    placeholder: "Type Start Balance",
  },
  {
    name: "duration",
    label: "Duration",
    type: "number",
    placeholder: "Type the Number of Hours",
  },
];

const status = [
  { label: "Active", value: 1 },
  { label: "Inactive", value: 0 },
];

const str_prize = [
  { place: 1, advance: false, prizeType: "", value: "" },
  { place: 2, advance: false, prizeType: "", value: "" },
  { place: 3, advance: false, prizeType: "", value: "" },
  { place: 4, advance: false, prizeType: "", value: "" },
  { place: 5, advance: false, prizeType: "", value: "" },
  { place: 6, advance: false, prizeType: "", value: "" },
  { place: 7, advance: false, prizeType: "", value: "" },
  { place: 8, advance: false, prizeType: "", value: "" },
  { place: 9, advance: false, prizeType: "", value: "" },
  { place: 10, advance: false, prizeType: "", value: "" },
];

export { menu, str_stage, status, str_prize };
