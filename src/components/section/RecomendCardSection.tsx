import { Card } from "../Card";

export const RecomendCardSection = () => {
  const dummyData = Array.from({ length: 10 }, () => ({
    title: "It really works.",
    content:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "CrazyInvestor",
  }));

  return (
    <section className="section h-[49rem] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-x-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          <div className="animate-autoScrollInfinite">
            {dummyData.map((data) => (
              <Card key={data.title} {...data} />
            ))}
          </div>
          <div className="animate-autoScrollInfiniteSlow">
            {dummyData.map((data) => (
              <Card key={data.title} {...data} />
            ))}
          </div>
          <div className="animate-autoScrollInfinite">
            {dummyData.map((data) => (
              <Card key={data.title} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
