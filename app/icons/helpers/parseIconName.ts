import { mapIcons } from "../mapIcons";

export default function parseIconName(icon: string): {
  name: keyof typeof mapIcons;
  color?: string;
} {
  const regex = /([a-zA-Z0-9-]+)(?:{([a-zA-Z0-9]+)})?/;
  const match = icon.match(regex);

  if (match) {
    const name = match[1] as keyof typeof mapIcons;
    const color = match[2] || undefined;
    return { name, color };
  }

  return { name: icon as keyof typeof mapIcons };
}
