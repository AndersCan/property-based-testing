import { isRaining } from "./is-raining";

import * as fc from "fast-check";

test("ONLY isRaining(true, true, true) returns true", () => {
  fc.assert(
    fc.property(fc.boolean(), fc.boolean(), fc.boolean(), function(a, b, c) {
      return isRaining(a, b, c) ? a && b && c : !(a && b && c);
    })
  );
});
