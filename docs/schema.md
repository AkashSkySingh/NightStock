# Schema information

## posts

column name | data type | details
------------|----------|----------
id          | integer  | not null
title       | string   | not null
description | text     | not null
user_id     | integer  | not null
location    | string   | not null
image_url   | string   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
description     | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
cover_photo_url | integer   |
user_img_url    | integer   |

## follows
column name | data type | details
------------|-----------|------------
id    | integer | not null, primary key
followee_id | integer   | not null
follower_id | integer | not null

## Bonus: tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## Bonus: taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
