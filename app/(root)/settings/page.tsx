import React from "react";

function SettingsPage() {
  return (
    <section className="space-y-6 p-8">
      <div className="rounded-3xl bg-gradient-to-br from-primary to-tertiary p-8 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Account</p>
        <h1 className="mt-2 text-4xl font-bold">Settings</h1>
        <p className="mt-3 max-w-2xl text-white/80">
          Personalize your Creative Coder experience. Manage notification
          preferences, update authentication details and fine-tune how you show up
          across the community.
        </p>
      </div>
      <div className="rounded-3xl border border-white/5 bg-card/40 p-6 text-sm text-white/70 shadow-inner">
        <p>
          This page is a placeholder for future settings controls. You can add
          account, privacy or notification preferences here as the product grows.
        </p>
      </div>
    </section>
  );
}

export default SettingsPage;
