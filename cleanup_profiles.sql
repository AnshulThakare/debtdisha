DELETE FROM user_profiles a USING user_profiles b WHERE a.user_id = b.user_id AND a.created_at < b.created_at;
