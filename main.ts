import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why this line: the scare is earned, not announced. A concrete, vivid
// image (a baby monitor, a nursery) carries the dread, and the turn is
// withheld until the end: the warning voice is the speaker's own, coming
// from a room they already left. No mirror, doll or basement, no gore,
// no talk of darkness or fear — just one extra fact that makes the room
// unsafe after the sentence is over. The last word lands the blow.
const line =
  "The baby monitor crackled, and my own voice whispered, 'Don't come in yet,' from the nursery I had just left.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 code points, got ${points}`);
}
if (line.includes("\n") || line.slice(0, -1).includes(".")) {
  throw new Error("entry line must be exactly one sentence on one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
