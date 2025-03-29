
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ItemCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  ownerName: string;
  ownerImage: string;
}

const ItemCard = ({
  id,
  title,
  category,
  image,
  location,
  ownerName,
  ownerImage,
}: ItemCardProps) => {
  return (
    <Link to={`/items/${id}`}>
      <Card className="overflow-hidden h-full card-hover">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <Badge className="absolute top-2 right-2">{category}</Badge>
        </div>
        <CardHeader className="p-4">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </CardHeader>
        <CardFooter className="p-4 pt-0 flex items-center gap-2">
          <img
            src={ownerImage}
            alt={ownerName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm">{ownerName}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ItemCard;
