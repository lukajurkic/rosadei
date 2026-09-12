import { getCategoryGalleriesData } from '@/lib/images'
import { CategorySlideshow } from '@/components/category-slideshow'

export function CategoryGalleries() {
  const categories = getCategoryGalleriesData()

  return (
    <section
      id="collections"
      className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center sm:mb-20">
          <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
            Naši proizvodi
          </p>
          <h2 className="mt-4 font-serif text-[2.5rem] leading-tight font-light text-balance sm:text-5xl">
            Iskaži svoju ljubav i pažnju, mi ti u tome pomažemo
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {categories.map((category) => (
            <article key={category.id} id={category.id} className="scroll-mt-28">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-4xl leading-tight font-light sm:text-4xl">
                  {category.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-pretty text-foreground/65">
                  {category.description}
                </p>
              </div>
              <CategorySlideshow category={category} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
