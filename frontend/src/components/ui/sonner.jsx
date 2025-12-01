import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-yellow-400 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-gray-600',
          actionButton:
            'group-[.toast]:bg-yellow-400 group-[.toast]:text-black',
          cancelButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:text-gray-600',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };