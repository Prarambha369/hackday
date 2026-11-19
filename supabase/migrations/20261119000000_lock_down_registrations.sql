-- The public registration form was removed (registration happens on Devpost),
-- but the table was still world-readable: SELECT USING (true) let anyone with the
-- public anon key read every registrant's name, email and phone number.
-- Lock it down without deleting data. Service-role access is unaffected.

DROP POLICY IF EXISTS "Users can view all registrations" ON public.registrations;
DROP POLICY IF EXISTS "Anyone can register" ON public.registrations;

REVOKE ALL ON public.registrations FROM anon, authenticated;

-- Stop broadcasting rows over Realtime.
ALTER PUBLICATION supabase_realtime DROP TABLE public.registrations;
