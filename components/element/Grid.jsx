import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../design/BentoGrid";
import AnimatedTitle from "./AnimatedTitle";

const Grid = () => {
  return (
    <section id="approches">
    <AnimatedTitle
    title=" <b>n</b>otre appro<b>c</b>he  <b>p</b>rofessio<b>n</b><b>n</b>els"
    containerClass=" !text-6xl pointer-events-none mix-blend-difference relative z-10 "
          />
      <BentoGrid className="py-20 text-gray-50">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
