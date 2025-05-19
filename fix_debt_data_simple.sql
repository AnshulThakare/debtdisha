-- Simple script to fix the debt_data table by removing the problematic trigger

-- 1. Drop the trigger that's causing the issue
DROP TRIGGER IF EXISTS maintain_priority_order ON debt_data;

-- 2. Drop the trigger function if it exists
DROP FUNCTION IF EXISTS update_priority_order();

-- 3. Now fix the due_date column type
ALTER TABLE debt_data 
ALTER COLUMN due_date TYPE DATE USING due_date::DATE;

-- 4. Let the application handle priority order logic instead of using a database trigger
COMMENT ON TABLE debt_data IS 'The maintain_priority_order trigger was removed to fix type conflicts.
Priority ordering should now be handled at the application level.';

-- 5. Simplify column types to avoid future type mismatches
ALTER TABLE debt_data
ALTER COLUMN balance TYPE NUMERIC,
ALTER COLUMN original_balance TYPE NUMERIC,
ALTER COLUMN interest_rate TYPE NUMERIC,
ALTER COLUMN min_payment TYPE NUMERIC,
ALTER COLUMN tenure_months TYPE INTEGER,
ALTER COLUMN payment_day TYPE INTEGER,
ALTER COLUMN total_paid TYPE NUMERIC,
ALTER COLUMN total_interest_paid TYPE NUMERIC; 