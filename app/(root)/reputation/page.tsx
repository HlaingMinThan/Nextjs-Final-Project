import React from "react";

function ReputationPage() {
  return (
    <section className="space-y-6 p-8">
      <div className="rounded-3xl border border-main/30 bg-secondary/70 p-8 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-main">Insights</p>
        <h1 className="mt-3 text-4xl font-black">My Reputation</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Track how the community responds to your questions and answers. This
          dedicated space will highlight earned badges, streaks and key metrics
          once the reputation system is wired up.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 text-white/80">
          <h2 className="text-lg font-semibold text-white">Coming Soon</h2>
          <p className="mt-2 text-sm">
            Visualize your question impact, accepted answers and collaborations
            here.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 text-white/80">
          <h2 className="text-lg font-semibold text-white">Community Love</h2>
          <p className="mt-2 text-sm">
            Showcase kudos, badges and milestones as soon as the data becomes
            available.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReputationPage;
