interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    count: number;
  };
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="category-card group">
      <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
        {category.icon}
      </span>
      <span className="text-sm font-medium text-center">{category.name}</span>
      <span className="text-xs text-muted-foreground">{category.count.toLocaleString()} deals</span>
    </div>
  );
};
