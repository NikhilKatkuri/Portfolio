import cn from "@/utils/cn";

interface CardItem {
  flag: string;
  title: string;
  body: string;
}

interface ContinousBoxProps<T> {
  card: T[];
}

const isTargeted = (index: number) => index % 4 === 1 || index % 4 === 2;

const ContinousBox = ({ card }: ContinousBoxProps<CardItem>) => {
  return card.map((item, index) => (
    <div
      key={index}
      className={cn(
        "cursor-pointer flex flex-col justify-between h-auto w-full p-6 lg:p-8",
        "bg-theme-surface z-0",
        "transition-all duration-300 ease-out transform-gpu",
        "hover:scale-[1.03] hover:z-10",
        "hover:shadow-[0_20px_50px_rgba(var(--palette-100))]",
        isTargeted(index) && "bg-theme-secondary",
      )}
    >
      <div className="mb-3">
        <span className="text-xs font-mono">{item.flag}</span>
        <h3 className="text-lg font-medium mt-2 text-left text-primary">
          {item.title}
        </h3>
      </div>
      <p className="text-left text-pretty leading-relaxed">{item.body}</p>
    </div>
  ));
};

export default ContinousBox;
