'use client';

import { useToast } from '@documenso/ui/primitives/use-toast';

import { useCopyToClipboard } from '~/hooks/use-copy-to-clipboard';

export type PasswordRevealProps = {
  password: string;
};

export const PasswordReveal = ({ password }: PasswordRevealProps) => {
  const { toast } = useToast();
  const [, copy] = useCopyToClipboard();

  const onCopyClick = () => {
    void copy(password).then(() => {
      toast({
        title: 'Copied to clipboard',
        description: 'Your password has been copied to your clipboard.',
      });
    });
  };

  return (
    <button
      type="button"
      className="px-2 blur-sm hover:opacity-50 hover:blur-none"
      onClick={onCopyClick}
    >
      {password}
    </button>
  );
};
