//
import * as fs from "fs-extra";
import * as shell from "shelljs";
import * as path from "path";

import { Compiler, linkLibrary } from "../src";


const ROOT = path.join(__dirname, "..")

describe("Link Library", () => {
  it("should find all the assembly files", async () => {
    await linkLibrary(ROOT);
    expect(shell.test("-e",ROOT+"/node_modules/.assembly")).toBe(true)
  }, 4000);
});

describe("echo", () => {
  it("should compile", async () => {
    process.chdir(__dirname);
    await Compiler.compileOne(
      path.join(__dirname, "..", "assembly", "bin", "echo.ts")
    );
  }, 20000);
});
