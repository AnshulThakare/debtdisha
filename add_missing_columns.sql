ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS monthly_income DECIMAL(12, 2); ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS monthly_expenses DECIMAL(12, 2);
