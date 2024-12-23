'use client';

import { AuthForm } from '@/lib/features/auth/auth-form';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      // TODO: Implement actual login logic with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast({
        title: 'Success',
        description: 'Logged in successfully',
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthForm type="login" onSubmit={handleLogin} />
      </main>
      <Footer />
    </div>
  );
}