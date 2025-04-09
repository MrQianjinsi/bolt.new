import { createOpenRouter } from '@openrouter/ai-sdk-provider';

export function getAnthropicModel(apiKey: string) {
  const openrouter = createOpenRouter({
    apiKey,
  });

  return openrouter('anthropic/claude-3.7-sonnet');
}
