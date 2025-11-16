function SettingsPage() {
  return (
    <section className="space-y-6 rounded-2xl bg-primary/5 p-8 text-white shadow-lg">
      <div>
        <p className="text-sm uppercase tracking-widest text-white/60">Coming soon</p>
        <h1 className="text-3xl font-bold text-white">Account settings</h1>
        <p className="mt-2 text-white/70">
          We are working on a dedicated settings experience where you will be able to
          manage your profile, notification preferences and privacy controls from one place.
        </p>
      </div>
      <div className="rounded-xl bg-secondary/40 p-6">
        <h2 className="text-xl font-semibold text-white">What to expect</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70">
          <li>Customize your public profile and workspace identity.</li>
          <li>Control the types of alerts and digests you receive.</li>
          <li>Configure authentication, security and backup email options.</li>
        </ul>
      </div>
    </section>
  );
}

export default SettingsPage;
