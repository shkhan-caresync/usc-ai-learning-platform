export interface AiMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AiClient {
  generate(messages: AiMessage[]): Promise<string>;
}

// Placeholder implementation: in production, wire to Claude or other model.
export class MockAiClient implements AiClient {
  async generate(messages: AiMessage[]): Promise<string> {
    return "This is a placeholder AI response. Implement provider-specific logic in production.";
  }
}
