
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Users } from "lucide-react";

interface WorkshopCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  time: string;
  instructor: string;
  instructorImage: string;
  participantsCount: number;
  maxParticipants: number;
  isVirtual: boolean;
}

const WorkshopCard = ({
  id,
  title,
  category,
  image,
  date,
  time,
  instructor,
  instructorImage,
  participantsCount,
  maxParticipants,
  isVirtual,
}: WorkshopCardProps) => {
  return (
    <Link to={`/workshops/${id}`}>
      <Card className="overflow-hidden h-full card-hover">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <Badge className="absolute top-2 right-2 bg-barter-orange text-white">
            {category}
          </Badge>
          {isVirtual && (
            <Badge variant="outline" className="absolute top-2 left-2 bg-white">
              Virtual
            </Badge>
          )}
        </div>
        <CardHeader className="p-4">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarCheck className="h-4 w-4" />
            <span>{date} • {time}</span>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            <span>
              {participantsCount}/{maxParticipants} participants
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center gap-2">
          <img
            src={instructorImage}
            alt={instructor}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm">by {instructor}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WorkshopCard;
