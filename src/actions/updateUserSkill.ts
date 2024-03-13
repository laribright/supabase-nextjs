'use server';

import { supabaseServerClient } from '@/utils/supabaseServer';
import { error } from 'console';

const updateUserSkill = async (userId: string, skill: string) => {
  const supabase = await supabaseServerClient();

  // Update the user record
  const { data: formResponse, error: formError } = await supabase.rpc(
    'add_skill',
    {
      user_id: userId,
      new_skill: skill,
    }
  );

  return [formResponse, formError];
};

export default updateUserSkill;
