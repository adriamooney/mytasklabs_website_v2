import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-3-5-haiku-20241022';

export async function generateAiInsert(prompt: string, apiKey: string): Promise<string> {
  const anthropic = new Anthropic({ apiKey });
  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 200,
    messages: [{ role: 'user', content: prompt }],
  });
  const textBlock = response.content.find((block) => block.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    return '';
  }
  return textBlock.text.trim();
}
