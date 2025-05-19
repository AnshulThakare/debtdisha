-- This function allows executing arbitrary SQL from the client
-- WARNING: This should be secured with row-level security in production
CREATE OR REPLACE FUNCTION execute_sql(sql_query TEXT)
RETURNS VOID AS $$
BEGIN
  EXECUTE sql_query;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 