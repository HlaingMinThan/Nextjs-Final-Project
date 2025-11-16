function ReputationPage() {
  return (
    <section className="space-y-8 rounded-2xl bg-primary/5 p-8 text-white shadow-lg">
      <div>
        <p className="text-sm uppercase tracking-widest text-white/60">Early preview</p>
        <h1 className="text-3xl font-bold text-white">Reputation overview</h1>
        <p className="mt-2 text-white/70">
          Reputation, badges and activity streaks will live here. Until then you can continue
          to earn credit across the community — we will backfill your progress once the feature ships.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-secondary/40 p-6">
          <p className="text-sm text-white/60">Current score</p>
          <p className="text-4xl font-bold text-main">0</p>
          <p className="mt-2 text-white/70">Solve challenges, answer questions and share resources to grow this number.</p>
        </div>
        <div className="rounded-xl bg-secondary/40 p-6">
          <p className="text-sm text-white/60">Milestones</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
            <li>Gain 15 points to unlock voting.</li>
            <li>Earn 100 points to showcase achievements on your profile.</li>
            <li>Reach 250 points for advanced moderation tools.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ReputationPage;
