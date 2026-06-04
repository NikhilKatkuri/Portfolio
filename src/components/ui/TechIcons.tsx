/* eslint-disable @next/next/no-img-element */
import TechIcons from "@/constants/icons";

const TechIconsComponent = () => { 
  const rows = [...new Array(5)].map((_, rowIndex) => {
    const targetRow = rowIndex + 1;
    return TechIcons.filter((icon) => icon.row === targetRow);
  });

  return (
    <div className="w-full h-auto flex flex-col gap-y-6 items-center justify-center">
      <div className="min-[1124px]:hidden grid grid-cols-5 gap-4 justify-items-center items-center">
        {TechIcons.map((icon) => (
          <IconCard key={icon.name} icon={icon} />
        ))}
      </div>

      <div className="hidden min-[1124px]:flex flex-col gap-y-6 w-full items-center justify-center">
        {rows.map((rowIcons, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-x-6 justify-items-center items-center"
            style={{
              gridTemplateColumns: `repeat(${rowIcons.length}, minmax(0, 1fr))`,
            }}
          >
            {rowIcons.map((icon) => (
              <IconCard key={icon.name} icon={icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const IconCard = ({ icon }: { icon: { name: string; icon: string } }) => (
  <div
    aria-label={icon.name}
    title={icon.name}
    className="flex flex-col justify-center items-center gap-2 w-24 aspect-square border border-theme-border rounded-xl hover:bg-theme-tertiary cursor-pointer"
  >
    <img
      src={`/icons/${icon.icon}`}
      alt={icon.name}
      className="w-10 aspect-square"
    />
    <span className="text-xs text-gray-500 capitalize my-1.5">{icon.name}</span>
  </div>
);

export default TechIconsComponent;
