Add
SQL
script
to
create
proper
tables

-- Create columns for user_profiles if they don't exist
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS income DECIMAL(12, 2);
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS expenses DECIMAL(12, 2);

-- Create proper debt_data table if it doesn't exist
CREATE TABLE IF NOT EXISTS debt_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    loan_type TEXT,
    loan_name TEXT,
    balance DECIMAL(12, 2),
    original_balance DECIMAL(12, 2),
    interest_rate DECIMAL(6, 2),
    min_payment DECIMAL(12, 2),
    tenure_months INTEGER,
    due_date TIMESTAMP WITH TIME ZONE,
    start_date TIMESTAMP WITH TIME ZONE,
    payment_day INTEGER,
    payment_frequency TEXT DEFAULT 'monthly',
    total_paid DECIMAL(12, 2) DEFAULT 0,
    total_interest_paid DECIMAL(12, 2) DEFAULT 0,
    status TEXT DEFAULT 'active',
    is_high_priority BOOLEAN DEFAULT false,
    payoff_strategy TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for debt_data (if not already enabled)
ALTER TABLE debt_data ENABLE ROW LEVEL SECURITY;

-- The following policies might already exist, so we'll 
-- execute them selectively in the Supabase SQL editor
-- by commenting them out and running them one by one if needed:

/*
-- Create policies for debt_data (run these individually if needed)
CREATE POLICY "Users can view their own debt_data"
    ON debt_data FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own debt_data"
    ON debt_data FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own debt_data"
    ON debt_data FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own debt_data"
    ON debt_data FOR DELETE
    USING (auth.uid() = user_id);
*/
