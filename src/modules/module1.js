import { ONEGLOBALVARIABLE, GLOBAL2 } from "./globalvars";

export function module1() {
  console.log("module1");
  console.log(ONEGLOBALVARIABLE);
}

export function changeGlobal() {
  ONEGLOBALVARIABLE.name = "New Global";
}

export function changeGlobal2() {
  GLOBAL2.name = "HAHAHAHA I changed you Global 2";
}