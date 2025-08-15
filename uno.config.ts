import { globSync } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename } from 'node:path';
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

const iconPaths = globSync('./icons/*.svg');

const collectionName = 'grower-ai';

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

const BASE_COLORS = {
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  accent: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  orange: {
    50: '#FFFAEB',
    100: '#FEEFC7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#792E0D',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
};

const COLOR_PRIMITIVES = {
  ...BASE_COLORS,
  alpha: {
    white: generateAlphaPalette(BASE_COLORS.white),
    gray: generateAlphaPalette(BASE_COLORS.gray[900]),
    red: generateAlphaPalette(BASE_COLORS.red[500]),
    accent: generateAlphaPalette(BASE_COLORS.accent[500]),
  },
};

export default defineConfig({
  safelist: [...Object.keys(customIconCollection[collectionName] || {}).map((x) => `i-grower-ai:${x}`)],
  shortcuts: {
    'grower-ai-ease-cubic-bezier': 'ease-[cubic-bezier(0.4,0,0.2,1)]',
    'transition-theme': 'transition-[background-color,border-color,color] duration-150 grower-ai-ease-cubic-bezier',
    kdb: 'bg-grower-ai-elements-code-background text-grower-ai-elements-code-text py-1 px-1.5 rounded-md',
    'max-w-chat': 'max-w-[var(--chat-max-width)]',
  },
  rules: [
    /**
     * This shorthand doesn't exist in Tailwind and we overwrite it to avoid
     * any conflicts with minified CSS classes.
     */
    ['b', {}],
  ],
  theme: {
    colors: {
      ...COLOR_PRIMITIVES,
      // Individual color definitions for UnoCSS class generation
      'grower-ai-elements-borderColor': 'var(--grower-ai-elements-borderColor)',
      'grower-ai-elements-borderColorActive': 'var(--grower-ai-elements-borderColorActive)',
      'grower-ai-elements-bg-depth-1': 'var(--grower-ai-elements-bg-depth-1)',
      'grower-ai-elements-bg-depth-2': 'var(--grower-ai-elements-bg-depth-2)',
      'grower-ai-elements-bg-depth-3': 'var(--grower-ai-elements-bg-depth-3)',
      'grower-ai-elements-bg-depth-4': 'var(--grower-ai-elements-bg-depth-4)',
      'grower-ai-elements-background-depth-1': 'var(--grower-ai-elements-bg-depth-1)',
      'grower-ai-elements-background-depth-2': 'var(--grower-ai-elements-bg-depth-2)',
      'grower-ai-elements-background-depth-3': 'var(--grower-ai-elements-bg-depth-3)',
      'grower-ai-elements-background-depth-4': 'var(--grower-ai-elements-bg-depth-4)',
      'grower-ai-elements-textPrimary': 'var(--grower-ai-elements-textPrimary)',
      'grower-ai-elements-textSecondary': 'var(--grower-ai-elements-textSecondary)',
      'grower-ai-elements-textTertiary': 'var(--grower-ai-elements-textTertiary)',
      'grower-ai-elements-code-background': 'var(--grower-ai-elements-code-background)',
      'grower-ai-elements-code-text': 'var(--grower-ai-elements-code-text)',
      'grower-ai-elements-button-primary-background': 'var(--grower-ai-elements-button-primary-background)',
      'grower-ai-elements-button-primary-backgroundHover': 'var(--grower-ai-elements-button-primary-backgroundHover)',
      'grower-ai-elements-button-primary-text': 'var(--grower-ai-elements-button-primary-text)',
      'grower-ai-elements-button-secondary-background': 'var(--grower-ai-elements-button-secondary-background)',
      'grower-ai-elements-button-secondary-backgroundHover': 'var(--grower-ai-elements-button-secondary-backgroundHover)',
      'grower-ai-elements-button-secondary-text': 'var(--grower-ai-elements-button-secondary-text)',
      'grower-ai-elements-button-danger-background': 'var(--grower-ai-elements-button-danger-background)',
      'grower-ai-elements-button-danger-backgroundHover': 'var(--grower-ai-elements-button-danger-backgroundHover)',
      'grower-ai-elements-button-danger-text': 'var(--grower-ai-elements-button-danger-text)',
      'grower-ai-elements-item-contentDefault': 'var(--grower-ai-elements-item-contentDefault)',
      'grower-ai-elements-item-contentActive': 'var(--grower-ai-elements-item-contentActive)',
      'grower-ai-elements-item-contentAccent': 'var(--grower-ai-elements-item-contentAccent)',
      'grower-ai-elements-item-contentDanger': 'var(--grower-ai-elements-item-contentDanger)',
      'grower-ai-elements-item-backgroundDefault': 'var(--grower-ai-elements-item-backgroundDefault)',
      'grower-ai-elements-item-backgroundActive': 'var(--grower-ai-elements-item-backgroundActive)',
      'grower-ai-elements-item-backgroundAccent': 'var(--grower-ai-elements-item-backgroundAccent)',
      'grower-ai-elements-item-backgroundDanger': 'var(--grower-ai-elements-item-backgroundDanger)',
      'grower-ai-elements-actions-background': 'var(--grower-ai-elements-actions-background)',
      'grower-ai-elements-actions-code-background': 'var(--grower-ai-elements-actions-code-background)',
      'grower-ai-elements-artifacts-background': 'var(--grower-ai-elements-artifacts-background)',
      'grower-ai-elements-artifacts-backgroundHover': 'var(--grower-ai-elements-artifacts-backgroundHover)',
      'grower-ai-elements-artifacts-borderColor': 'var(--grower-ai-elements-artifacts-borderColor)',
      'grower-ai-elements-artifacts-inlineCode-background': 'var(--grower-ai-elements-artifacts-inlineCode-background)',
      'grower-ai-elements-artifacts-inlineCode-text': 'var(--grower-ai-elements-artifacts-inlineCode-text)',
      'grower-ai-elements-messages-background': 'var(--grower-ai-elements-messages-background)',
      'grower-ai-elements-messages-linkColor': 'var(--grower-ai-elements-messages-linkColor)',
      'grower-ai-elements-messages-code-background': 'var(--grower-ai-elements-messages-code-background)',
      'grower-ai-elements-messages-inlineCode-background': 'var(--grower-ai-elements-messages-inlineCode-background)',
      'grower-ai-elements-messages-inlineCode-text': 'var(--grower-ai-elements-messages-inlineCode-text)',
      'grower-ai-elements-icon-success': 'var(--grower-ai-elements-icon-success)',
      'grower-ai-elements-icon-error': 'var(--grower-ai-elements-icon-error)',
      'grower-ai-elements-icon-primary': 'var(--grower-ai-elements-icon-primary)',
      'grower-ai-elements-icon-secondary': 'var(--grower-ai-elements-icon-secondary)',
      'grower-ai-elements-icon-tertiary': 'var(--grower-ai-elements-icon-tertiary)',
      'grower-ai-elements-preview-addressBar-background': 'var(--grower-ai-elements-preview-addressBar-background)',
      'grower-ai-elements-preview-addressBar-backgroundHover': 'var(--grower-ai-elements-preview-addressBar-backgroundHover)',
      'grower-ai-elements-preview-addressBar-backgroundActive': 'var(--grower-ai-elements-preview-addressBar-backgroundActive)',
      'grower-ai-elements-preview-addressBar-text': 'var(--grower-ai-elements-preview-addressBar-text)',
      'grower-ai-elements-preview-addressBar-textActive': 'var(--grower-ai-elements-preview-addressBar-textActive)',
      'grower-ai-elements-terminals-background': 'var(--grower-ai-elements-terminals-background)',
      'grower-ai-elements-terminals-buttonBackground': 'var(--grower-ai-elements-terminals-buttonBackground)',
      'grower-ai-elements-dividerColor': 'var(--grower-ai-elements-dividerColor)',
      'grower-ai-elements-loader-background': 'var(--grower-ai-elements-loader-background)',
      'grower-ai-elements-loader-progress': 'var(--grower-ai-elements-loader-progress)',
      'grower-ai-elements-prompt-background': 'var(--grower-ai-elements-prompt-background)',
      'grower-ai-elements-sidebar-dropdownShadow': 'var(--grower-ai-elements-sidebar-dropdownShadow)',
      'grower-ai-elements-sidebar-buttonBackgroundDefault': 'var(--grower-ai-elements-sidebar-buttonBackgroundDefault)',
      'grower-ai-elements-sidebar-buttonBackgroundHover': 'var(--grower-ai-elements-sidebar-buttonBackgroundHover)',
      'grower-ai-elements-sidebar-buttonText': 'var(--grower-ai-elements-sidebar-buttonText)',
      'grower-ai-elements-cta-background': 'var(--grower-ai-elements-cta-background)',
      'grower-ai-elements-cta-text': 'var(--grower-ai-elements-cta-text)',
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: {
        light: '[data-theme="light"]',
        dark: '[data-theme="dark"]',
      },
    }),
    presetIcons({
      warn: true,
      collections: {
        ...customIconCollection,
      },
      unit: 'em',
    }),
  ],
});

/**
 * Generates an alpha palette for a given hex color.
 *
 * @param hex - The hex color code (without alpha) to generate the palette from.
 * @returns An object where keys are opacity percentages and values are hex colors with alpha.
 *
 * Example:
 *
 * ```
 * {
 *   '1': '#FFFFFF03',
 *   '2': '#FFFFFF05',
 *   '3': '#FFFFFF08',
 * }
 * ```
 */
function generateAlphaPalette(hex: string) {
  return [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
    (acc, opacity) => {
      const alpha = Math.round((opacity / 100) * 255)
        .toString(16)
        .padStart(2, '0');

      acc[opacity] = `${hex}${alpha}`;

      return acc;
    },
    {} as Record<number, string>,
  );
}
