export interface LtiLaunchPayload {
  iss: string;
  sub: string;
  "https://purl.imsglobal.org/spec/lti/claim/roles": string[];
}

export function isInstructor(roles: string[]): boolean {
  return roles.some((r) => r.toLowerCase().includes("instructor"));
}

export function isLearner(roles: string[]): boolean {
  return roles.some((r) => r.toLowerCase().includes("learner") || r.toLowerCase().includes("student"));
}
