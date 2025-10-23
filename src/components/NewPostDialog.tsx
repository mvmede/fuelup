import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Textarea } from './ui/textarea';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { toast } from 'sonner@2.0.3';

interface NewPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}

export default function NewPostDialog({ isOpen, onClose, onSubmit }: NewPostDialogProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) {
      toast.error('Please write something before posting');
      return;
    }
    onSubmit(content);
    setContent('');
    onClose();
    toast.success('Post shared with the community!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0e0e0e] border-white/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Create Post</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <Textarea
            placeholder="Share fuel prices, tips, or ask questions..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl resize-none"
          />

          <div className="flex gap-3">
            <SecondaryButton onClick={onClose} className="flex-1">
              Cancel
            </SecondaryButton>
            <PrimaryButton onClick={handleSubmit} className="flex-1">
              Post
            </PrimaryButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
