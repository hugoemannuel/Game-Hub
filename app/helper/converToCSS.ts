// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function converToCSS(style?: any) {
  if (!isNaN(Number(style))) {
    return `${style}px`;
  }

  return style as string;
}
