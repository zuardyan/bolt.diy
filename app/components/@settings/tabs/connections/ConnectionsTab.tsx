import { motion } from 'framer-motion';
import React, { Suspense, useState } from 'react';
import { classNames } from '~/utils/classNames';
import ConnectionDiagnostics from './ConnectionDiagnostics';
import { Button } from '~/components/ui/Button';
import VercelConnection from './VercelConnection';

// Use React.lazy for dynamic imports
const GitHubConnection = React.lazy(() => import('./GithubConnection'));
const NetlifyConnection = React.lazy(() => import('./NetlifyConnection'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="p-4 bg-grower-ai-elements-background-depth-1 dark:bg-grower-ai-elements-background-depth-1 rounded-lg border border-grower-ai-elements-borderColor dark:border-grower-ai-elements-borderColor">
    <div className="flex items-center justify-center gap-2 text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary">
      <div className="i-ph:spinner-gap w-4 h-4 animate-spin" />
      <span>Loading connection...</span>
    </div>
  </div>
);

export default function ConnectionsTab() {
  const [isEnvVarsExpanded, setIsEnvVarsExpanded] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <div className="i-ph:plugs-connected w-5 h-5 text-grower-ai-elements-item-contentAccent dark:text-grower-ai-elements-item-contentAccent" />
          <h2 className="text-lg font-medium text-grower-ai-elements-textPrimary dark:text-grower-ai-elements-textPrimary">
            Connection Settings
          </h2>
        </div>
        <Button
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          variant="outline"
          className="flex items-center gap-2 hover:bg-grower-ai-elements-item-backgroundActive/10 hover:text-grower-ai-elements-textPrimary dark:hover:bg-grower-ai-elements-item-backgroundActive/10 dark:hover:text-grower-ai-elements-textPrimary transition-colors"
        >
          {showDiagnostics ? (
            <>
              <div className="i-ph:eye-slash w-4 h-4" />
              Hide Diagnostics
            </>
          ) : (
            <>
              <div className="i-ph:wrench w-4 h-4" />
              Troubleshoot Connections
            </>
          )}
        </Button>
      </motion.div>
      <p className="text-sm text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary">
        Manage your external service connections and integrations
      </p>

      {/* Diagnostics Tool - Conditionally rendered */}
      {showDiagnostics && <ConnectionDiagnostics />}

      {/* Environment Variables Info - Collapsible */}
      <motion.div
        className="bg-grower-ai-elements-background dark:bg-grower-ai-elements-background rounded-lg border border-grower-ai-elements-borderColor dark:border-grower-ai-elements-borderColor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-6">
          <button
            onClick={() => setIsEnvVarsExpanded(!isEnvVarsExpanded)}
            className={classNames(
              'w-full bg-transparent flex items-center justify-between',
              'hover:bg-grower-ai-elements-item-backgroundActive/10 hover:text-grower-ai-elements-textPrimary',
              'dark:hover:bg-grower-ai-elements-item-backgroundActive/10 dark:hover:text-grower-ai-elements-textPrimary',
              'rounded-md p-2 -m-2 transition-colors',
            )}
          >
            <div className="flex items-center gap-2">
              <div className="i-ph:info w-5 h-5 text-grower-ai-elements-item-contentAccent dark:text-grower-ai-elements-item-contentAccent" />
              <h3 className="text-base font-medium text-grower-ai-elements-textPrimary dark:text-grower-ai-elements-textPrimary">
                Environment Variables
              </h3>
            </div>
            <div
              className={classNames(
                'i-ph:caret-down w-4 h-4 text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary transition-transform',
                isEnvVarsExpanded ? 'rotate-180' : '',
              )}
            />
          </button>

          {isEnvVarsExpanded && (
            <div className="mt-4">
              <p className="text-sm text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary mb-2">
                You can configure connections using environment variables in your{' '}
                <code className="px-1 py-0.5 bg-grower-ai-elements-background-depth-2 dark:bg-grower-ai-elements-background-depth-2 rounded">
                  .env.local
                </code>{' '}
                file:
              </p>
              <div className="bg-grower-ai-elements-background-depth-2 dark:bg-grower-ai-elements-background-depth-2 p-3 rounded-md text-xs font-mono overflow-x-auto">
                <div className="text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary">
                  # GitHub Authentication
                </div>
                <div className="text-grower-ai-elements-textPrimary dark:text-grower-ai-elements-textPrimary">
                  VITE_GITHUB_ACCESS_TOKEN=your_token_here
                </div>
                <div className="text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary">
                  # Optional: Specify token type (defaults to 'classic' if not specified)
                </div>
                <div className="text-grower-ai-elements-textPrimary dark:text-grower-ai-elements-textPrimary">
                  VITE_GITHUB_TOKEN_TYPE=classic|fine-grained
                </div>
                <div className="text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary mt-2">
                  # Netlify Authentication
                </div>
                <div className="text-grower-ai-elements-textPrimary dark:text-grower-ai-elements-textPrimary">
                  VITE_NETLIFY_ACCESS_TOKEN=your_token_here
                </div>
              </div>
              <div className="mt-3 text-xs text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary space-y-1">
                <p>
                  <span className="font-medium">Token types:</span>
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1">
                  <li>
                    <span className="font-medium">classic</span> - Personal Access Token with{' '}
                    <code className="px-1 py-0.5 bg-grower-ai-elements-background-depth-2 dark:bg-grower-ai-elements-background-depth-2 rounded">
                      repo, read:org, read:user
                    </code>{' '}
                    scopes
                  </li>
                  <li>
                    <span className="font-medium">fine-grained</span> - Fine-grained token with Repository and
                    Organization access
                  </li>
                </ul>
                <p className="mt-2">
                  When set, these variables will be used automatically without requiring manual connection.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        <Suspense fallback={<LoadingFallback />}>
          <GitHubConnection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <NetlifyConnection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <VercelConnection />
        </Suspense>
      </div>

      {/* Additional help text */}
      <div className="text-sm text-grower-ai-elements-textSecondary dark:text-grower-ai-elements-textSecondary bg-grower-ai-elements-background-depth-2 dark:bg-grower-ai-elements-background-depth-2 p-4 rounded-lg">
        <p className="flex items-center gap-1 mb-2">
          <span className="i-ph:lightbulb w-4 h-4 text-grower-ai-elements-icon-success dark:text-grower-ai-elements-icon-success" />
          <span className="font-medium">Troubleshooting Tip:</span>
        </p>
        <p className="mb-2">
          If you're having trouble with connections, try using the troubleshooting tool at the top of this page. It can
          help diagnose and fix common connection issues.
        </p>
        <p>For persistent issues:</p>
        <ol className="list-decimal list-inside pl-4 mt-1">
          <li>Check your browser console for errors</li>
          <li>Verify that your tokens have the correct permissions</li>
          <li>Try clearing your browser cache and cookies</li>
          <li>Ensure your browser allows third-party cookies if using integrations</li>
        </ol>
      </div>
    </div>
  );
}
