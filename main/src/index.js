import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "subapp1", // app name registered
    entry: "//localhost:1111",
    container: "#app",
    activeRule: "/subapp1",
  },
  {
    name: "subapp2",
    entry: "//localhost:2222",
    container: "#app",
    activeRule: "/subapp2",
  },
]);

start();
