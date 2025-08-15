import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--grower-ai-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--grower-ai-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--grower-ai-elements-terminal-textColor'),
    background: cssVar('--grower-ai-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--grower-ai-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--grower-ai-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--grower-ai-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--grower-ai-elements-terminal-color-black'),
    red: cssVar('--grower-ai-elements-terminal-color-red'),
    green: cssVar('--grower-ai-elements-terminal-color-green'),
    yellow: cssVar('--grower-ai-elements-terminal-color-yellow'),
    blue: cssVar('--grower-ai-elements-terminal-color-blue'),
    magenta: cssVar('--grower-ai-elements-terminal-color-magenta'),
    cyan: cssVar('--grower-ai-elements-terminal-color-cyan'),
    white: cssVar('--grower-ai-elements-terminal-color-white'),
    brightBlack: cssVar('--grower-ai-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--grower-ai-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--grower-ai-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--grower-ai-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--grower-ai-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--grower-ai-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--grower-ai-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--grower-ai-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
