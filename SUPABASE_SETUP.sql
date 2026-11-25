-- Ética en acción · contador de visitas
-- Ejecuta este script una sola vez en Supabase > SQL Editor.
-- El registro inicial es 150; la primera visita real devolverá 151.

create table if not exists public.site_metrics (
  id smallint primary key check (id = 1),
  visits bigint not null default 150 check (visits >= 150)
);

insert into public.site_metrics (id, visits)
values (1, 150)
on conflict (id) do nothing;

alter table public.site_metrics enable row level security;

create or replace function public.register_visit()
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_total bigint;
begin
  update public.site_metrics
     set visits = visits + 1
   where id = 1
   returning visits into new_total;

  if new_total is null then
    raise exception 'Visit counter row is missing';
  end if;

  return new_total;
end;
$$;

revoke all on function public.register_visit() from public;
revoke all on function public.register_visit() from anon;
revoke all on function public.register_visit() from authenticated;
grant execute on function public.register_visit() to service_role;
