export function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
}

export function luminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;

    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrastRatio(l1: number, l2: number) {
  const brighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (brighter + 0.05) / (darker + 0.05);
}

export function getContrastColor(hex: string) {
  const rgb = hexToRgb(hex);
  const lum = luminance(rgb[0], rgb[1], rgb[2]);

  const whiteLum = luminance(255, 255, 255);
  const blackLum = luminance(0, 0, 0);

  const contrastWithWhite = contrastRatio(lum, whiteLum);
  const contrastWithBlack = contrastRatio(lum, blackLum);

  return contrastWithWhite > contrastWithBlack ? "#FFFFFF" : "#000000";
}

export function getInitials(name: string) {
  let initials;
  const words = name.trim().split(" ");

  if (words.length === 1) {
    initials = words[0][0];
  } else {
    initials = words[0][0] + words[1][0];
  }

  return initials.toUpperCase();
}
export function stringToHexColor(str: string) {
  let hash = 0;
  let hexColor = "#";

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;

    hexColor += ("00" + value.toString(16)).slice(-2);
  }

  return hexColor;
}

export function mockVerificationDate(
  created_at: string,
  odds: number,
): string | null {
  const probability = Math.random();

  if (probability > odds) {
    return null;
  } else {
    const createdAtDate = new Date(created_at);
    const currentTime = Date.now();
    const elapsedTime = currentTime - createdAtDate.getTime();
    const maxTimeRange = elapsedTime * odds;
    const randomTime = Math.random() * maxTimeRange;
    const verificationTimestamp = createdAtDate.getTime() + randomTime;
    const verificationDate = new Date(verificationTimestamp);

    return verificationDate.toISOString();
  }
}
