import { secp256r1 } from "@noble/curves/p256";
import { ethers } from "ethers";

const msgHash = [
  31, 184, 216, 66, 118, 229, 45, 145, 51, 146, 159, 62, 135, 252, 210, 136,
  121, 142, 192, 179, 46, 173, 198, 186, 163, 185, 104, 72, 202, 140, 118, 124,
];

const sig = [
  212, 49, 133, 203, 3, 48, 86, 102, 93, 184, 29, 123, 22, 123, 216, 201, 210,
  85, 157, 117, 113, 9, 54, 20, 151, 77, 28, 18, 102, 85, 8, 216, 190, 247, 57,
  205, 210, 207, 59, 0, 210, 180, 222, 33, 3, 0, 197, 100, 222, 117, 150, 133,
  145, 137, 109, 68, 8, 66, 31, 175, 228, 115, 185, 131,
];

const pubKey = [
  4, 128, 149, 158, 197, 74, 244, 216, 21, 39, 117, 107, 161, 116, 201, 168, 18,
  151, 200, 161, 67, 218, 6, 22, 166, 91, 77, 75, 6, 152, 181, 249, 121, 133, 0,
  34, 115, 239, 103, 95, 127, 205, 120, 253, 83, 64, 14, 46, 99, 191, 51, 152,
  83, 68, 157, 193, 85, 221, 253, 46, 3, 46, 232, 45, 193,
];

const verified = secp256r1.verify(
  Uint8Array.from(sig),
  Uint8Array.from(msgHash),
  Uint8Array.from(pubKey),
);

console.log("verified:", verified); // true

const toArr = (point) =>
  JSON.stringify(Array.from(ethers.getBytes("0x" + point.toString(16))));
const point = secp256r1.ProjectivePoint.fromHex(Uint8Array.from(pubKey));
console.log("key x", toArr(point.x));
console.log("key y", toArr(point.y));
