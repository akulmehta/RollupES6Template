import { ONEGLOBALVARIABLE, GLOBAL2 } from "./globalvars";

export function module2() {
  console.log("module2");
  console.log(ONEGLOBALVARIABLE);
  privatefunction();
}

function privatefunction() {
  console.log('I am a privatefunction() which only gets called in module2()');
}