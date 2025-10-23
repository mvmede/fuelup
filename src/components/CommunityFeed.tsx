import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Post } from '../App';
import PostCard from './PostCard';
import FloatingActionButton from './FloatingActionButton';
import NewPostDialog from './NewPostDialog';

const mockPosts: Post[] = [
  {
    id: '1',
    userId: 'u1',
    userName: 'Sarah Johnson',
    userAvatar: '👩',
    content: '🔥 Dica quente: Posto Shell na Av. Paulista acabou de baixar o preço para R$ 5.79! Aproveitem!',
    likes: 24,
    comments: 8,
    timestamp: 'há 2 horas',
    isLiked: false
  },
  {
    id: '2',
    userId: 'u2',
    userName: 'Mike Chen',
    userAvatar: '👨',
    content: 'Alguém sabe se o Posto Ipiranga na Rua Augusta aceita as recompensas do FuelUp? Vou passar lá amanhã.',
    likes: 12,
    comments: 5,
    timestamp: 'há 5 horas',
    isLiked: true
  },
  {
    id: '3',
    userId: 'u3',
    userName: 'Emma Davis',
    userAvatar: '👩‍🦰',
    content: 'AVISO: Evitem o Posto BR na Marginal. Filas enormes e bombas lentas. Não vale a pena pelo preço um pouco mais baixo.',
    likes: 45,
    comments: 15,
    timestamp: 'há 1 dia',
    isLiked: false
  },
  {
    id: '4',
    userId: 'u4',
    userName: 'John Smith',
    userAvatar: '👨‍💼',
    content: 'Acabei de economizar R$ 30 no abastecimento graças a essa comunidade! Vocês são demais! 🙌',
    likes: 67,
    comments: 12,
    timestamp: 'há 1 dia',
    isLiked: true
  },
  {
    id: '5',
    userId: 'u5',
    userName: 'Lisa Wong',
    userAvatar: '👩‍💻',
    content: 'Thread semanal de comparação de preços! Compartilhem os preços da sua região abaixo 👇',
    likes: 89,
    comments: 34,
    timestamp: 'há 2 dias',
    isLiked: false
  }
];

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      userId: 'currentUser',
      userName: 'Você',
      userAvatar: '😊',
      content,
      likes: 0,
      comments: 0,
      timestamp: 'Agora mesmo',
      isLiked: false
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-[#0e0e0e]/95 backdrop-blur-sm z-10 px-6 py-6 border-b border-white/10">
        <h1 className="text-white text-3xl">Comunidade</h1>
        <p className="text-white/60 mt-1">Conecte-se com outros motoristas</p>
      </div>

      {/* Feed */}
      <div className="px-4 py-4 space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PostCard post={post} onLike={handleLike} />
          </motion.div>
        ))}
      </div>

      {/* FAB */}
      <FloatingActionButton onClick={() => setIsNewPostOpen(true)}>
        <Plus className="w-6 h-6" />
      </FloatingActionButton>

      {/* New Post Dialog */}
      <NewPostDialog
        isOpen={isNewPostOpen}
        onClose={() => setIsNewPostOpen(false)}
        onSubmit={handleNewPost}
      />
    </div>
  );
}
