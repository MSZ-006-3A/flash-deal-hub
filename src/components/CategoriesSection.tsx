import { categories } from '@/data/mockDeals';
import { CategoryCard } from './CategoryCard';

export const CategoriesSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Shop by Category</h2>
          <a 
            href="#" 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
