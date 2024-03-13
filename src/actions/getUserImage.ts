import { supabaseServerClient } from '@/utils/supabaseServer';

const getUserImage = async (imagePath: string) => {
  const supabase = await supabaseServerClient();

  const {
    data: { publicUrl: userLogo },
  } = supabase.storage.from('images').getPublicUrl(imagePath);

  return userLogo;
};

export default getUserImage;
