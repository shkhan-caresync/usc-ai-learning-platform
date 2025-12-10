export default function HomePage() {
  return (
    <div className="space-y-4 text-sm text-slate-200">
      <p>
        This is the secure scaffold for the USC AI Social Work Simulation Platform.
      </p>
      <p>
        The frontend never talks directly to AI providers or LTI services.
        All sensitive operations must go through the backend API.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Backend API base URL is provided via NEXT_PUBLIC_API_BASE_URL.</li>
        <li>Use server components / server actions for privileged operations.</li>
        <li>No API keys or secrets should appear in browser bundles.</li>
      </ul>
    </div>
  );
}
