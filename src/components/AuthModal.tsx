'use client';

import { useContext } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AuthModalContext from '@/context/AuthModalContext';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from './ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { registerWithEmailAndPasword } from '@/actions/supabase';

const AuthModal = () => {
  const { isAuthModalOpen, toggleAuthModal } = useContext(AuthModalContext);

  const formSchema = z.object({
    email: z
      .string()
      .email()
      .min(5, { message: 'Job title must be at least 2 characters' }),
    password: z
      .string()
      .min(3, { message: 'Password must at least be 3 characters' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await registerWithEmailAndPasword(values)

  }

  async function githubAuth() { }

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={toggleAuthModal}>
      <DialogContent className='bg-black border-neutral-500'>
        <DialogHeader className='text-white'>
          <DialogTitle>Authenticate</DialogTitle>
        </DialogHeader>

        <Button>GOOGLE</Button>
        <Button onClick={githubAuth}>GITHUB</Button>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='email' {...field} />
                  </FormControl>
                  <FormDescription>Please enter your email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='password' {...field} />
                  </FormControl>
                  <FormDescription>Min 3 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
