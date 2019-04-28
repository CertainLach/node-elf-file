import assert from "assert";
import elf from "../index.js";
import assets from "./assets.js";

describe("reformat", function () {
  assets.all.forEach(({ name, data }) => {
    describe(name, () => {
      it("should produce the same output on parse and format", () => {
        const e = elf.parse(data);
        const buf = elf.format(e);
        assert(Buffer.compare(buf, data) === 0, "reformatted output should be equal");
      });
    });
  });
});
