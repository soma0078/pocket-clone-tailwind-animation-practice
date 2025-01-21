interface CardProps {
  title: string;
  content: string;
  author: string;
}

export const Card = ({ title, content, author }: CardProps) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md mb-8">
      <span className="text-[#06b6d4] text-lg">★★★★★</span>
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="my-3">{content}</p>
      <span className="text-[#525252] text-xs font-semibold">- {author}</span>
    </div>
  );
};
