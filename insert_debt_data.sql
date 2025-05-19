-- This function allows you to insert into the debt_data table by bypassing any CASE statement issues
-- Function takes a JSON object and converts it to a record for insertion
CREATE OR REPLACE FUNCTION insert_debt_data(data_json JSONB)
RETURNS VOID AS $$
BEGIN
  -- Insert using explicit values to avoid any CASE statement issues
  INSERT INTO debt_data (
    user_id, 
    loan_type, 
    loan_name, 
    balance, 
    original_balance, 
    interest_rate, 
    min_payment, 
    tenure_months, 
    due_date, 
    start_date, 
    payment_day, 
    payment_frequency, 
    total_paid, 
    total_interest_paid, 
    status, 
    is_high_priority, 
    notes
  ) VALUES (
    (data_json->>'user_id')::UUID,
    data_json->>'loan_type',
    data_json->>'loan_name',
    (data_json->>'balance')::NUMERIC,
    (data_json->>'original_balance')::NUMERIC,
    (data_json->>'interest_rate')::NUMERIC,
    (data_json->>'min_payment')::NUMERIC,
    (data_json->>'tenure_months')::INTEGER,
    (data_json->>'due_date')::DATE,
    (data_json->>'start_date')::DATE,
    (data_json->>'payment_day')::INTEGER,
    data_json->>'payment_frequency',
    (data_json->>'total_paid')::NUMERIC,
    (data_json->>'total_interest_paid')::NUMERIC,
    data_json->>'status',
    (data_json->>'is_high_priority')::BOOLEAN,
    data_json->>'notes'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 