-- Script to inspect the problematic trigger's definition

-- Get trigger information
SELECT trigger_name, event_manipulation, action_statement, action_orientation, action_timing
FROM information_schema.triggers
WHERE event_object_table = 'debt_data'
  AND trigger_name = 'maintain_priority_order';

-- Get the function definition that the trigger uses
SELECT pg_get_functiondef(pg_trigger.tgfoid)
FROM pg_trigger
JOIN pg_class ON pg_trigger.tgrelid = pg_class.oid
WHERE pg_class.relname = 'debt_data'
  AND pg_trigger.tgname = 'maintain_priority_order';

-- Get the actual function source code
SELECT proname, prosrc 
FROM pg_proc 
JOIN pg_trigger ON pg_proc.oid = pg_trigger.tgfoid
JOIN pg_class ON pg_trigger.tgrelid = pg_class.oid
WHERE pg_class.relname = 'debt_data'
  AND pg_trigger.tgname = 'maintain_priority_order';

-- See what columns the function/trigger references
SELECT pg_class.relname AS table_name, 
       pg_attribute.attname AS column_name
FROM pg_depend
JOIN pg_rewrite ON pg_depend.objid = pg_rewrite.oid
JOIN pg_class ON pg_rewrite.ev_class = pg_class.oid
JOIN pg_attribute ON pg_depend.refobjid = pg_attribute.attrelid
                  AND pg_depend.refobjsubid = pg_attribute.attnum
JOIN pg_proc ON pg_depend.refobjid = pg_proc.oid
JOIN pg_trigger ON pg_proc.oid = pg_trigger.tgfoid
WHERE pg_trigger.tgname = 'maintain_priority_order'
  AND pg_class.relname = 'debt_data'; 