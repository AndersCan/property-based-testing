import { add } from "./add";

import * as fc from "fast-check";

test("add 1 + 2 must equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// This test should fail, but might not due to few loops (numRuns)
test(" add(x + y) must equal add(y + x)", () => {
  fc.assert(
    fc.property(fc.integer(0, 100), fc.integer(0, 100), function(a, b) {
      return add(a, b) === add(b, a);
    }),
    {
      // numRuns: 10000, // default is 100
      // seed: 1534760668254 // will fail on test #304
    }
  );
});
