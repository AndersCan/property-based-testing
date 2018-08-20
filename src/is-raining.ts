export function isRaining(
  groundIsWet: boolean,
  isCloudy: boolean,
  aboveFreezing: boolean
) {
  // Uncommenting this _should_ make the test fail
  // if (!groundIsWet && isCloudy && aboveFreezing) {
  //   return true;
  // }

  return groundIsWet && isCloudy && aboveFreezing;
}
