SELECT user_id, COUNT(*) as profile_count FROM user_profiles GROUP BY user_id HAVING COUNT(*) > 1;
