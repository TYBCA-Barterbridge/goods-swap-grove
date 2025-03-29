
import { Badge } from "@/components/ui/badge";

interface CategoryBadgeProps {
  category: string;
  type: "item" | "skill" | "workshop";
  onClick?: () => void;
  isSelected?: boolean;
}

const CategoryBadge = ({
  category,
  type,
  onClick,
  isSelected = false,
}: CategoryBadgeProps) => {
  const getColorClass = () => {
    if (isSelected) {
      if (type === "item") return "bg-barter-teal text-white";
      if (type === "skill") return "bg-barter-purple text-white";
      if (type === "workshop") return "bg-barter-orange text-white";
    }
    
    return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };

  return (
    <Badge 
      className={`${getColorClass()} cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition-colors`}
      onClick={onClick}
    >
      {category}
    </Badge>
  );
};

export default CategoryBadge;
