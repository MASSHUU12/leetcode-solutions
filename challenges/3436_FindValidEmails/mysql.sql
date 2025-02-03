SELECT `user_id`, `email`
FROM `Users`
WHERE `email` REGEXP "^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+\\-/=?^_`{|}~]*?[a-zA-Z0-9._-]?@[a-zA-Z][a-zA-Z]*?[a-zA-Z]?\\.com$"
ORDER BY `user_id` ASC;
