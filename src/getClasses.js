import { wizard } from "./wizard";
import { barbarian } from "./barbarian";

function getClasses() {
  console.log("getClasses ran flawlessly baby!");
  console.log({ wizard, barbarian });
  console.log("#################");
  console.log("Pick you class:");
  wizard();
  barbarian();
  console.log("#################");
}

export default getClasses;
