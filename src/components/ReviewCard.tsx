import { Star } from 'lucide-react';
import { Review } from '../App';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
          {review.userAvatar}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white">{review.userName}</h4>
            <span className="text-white/60 text-sm">{review.date}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'text-[#FF6B00] fill-[#FF6B00]'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-white/80">{review.comment}</p>
        </div>
      </div>
    </div>
  );
}
