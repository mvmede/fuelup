import { motion } from 'motion/react';
import { Heart, MessageSquare, MoreVertical } from 'lucide-react';
import { Post } from '../App';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
          {post.userAvatar}
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h4 className="text-white">{post.userName}</h4>
          <span className="text-white/60 text-sm">{post.timestamp}</span>
        </div>

        {/* More Options */}
        <button className="text-white/60 hover:text-white transition-colors p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <p className="text-white mb-4">{post.content}</p>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-white/60 hover:text-[#FF6B00] transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${post.isLiked ? 'fill-[#FF6B00] text-[#FF6B00]' : ''}`}
          />
          <span className={post.isLiked ? 'text-[#FF6B00]' : ''}>{post.likes}</span>
        </motion.button>

        <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <MessageSquare className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
      </div>
    </motion.div>
  );
}
