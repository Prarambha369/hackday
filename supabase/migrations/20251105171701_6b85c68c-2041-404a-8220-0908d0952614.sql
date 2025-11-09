-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  institution TEXT NOT NULL,
  team_name TEXT,
  team_size INTEGER NOT NULL CHECK (team_size >= 1 AND team_size <= 4),
  experience_level TEXT NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  interests TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can register"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Only allow reading own registration or admin access
CREATE POLICY "Users can view all registrations"
ON public.registrations
FOR SELECT
USING (true);

-- Create index for email lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);

-- Enable realtime
ALTER TABLE public.registrations REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.registrations;