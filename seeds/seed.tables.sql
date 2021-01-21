BEGIN;

TRUNCATE
  "word",
  "language",
  "user";

INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'mpatel89',
    'Meet Patel',
    -- password = "RandomPatel89#"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "language" ("id", "name", "user_id")
VALUES
  (1, 'Gujarati', 1);

INSERT INTO "word" ("id", "language_id", "original", "translation", "next")
VALUES
  (1, 1, 'hellaro', 'nudge', 2),
  (2, 1, 'shakti', 'power', 3),
  (3, 1, 'devi', 'goddess', 4),
  (4, 1, 'karma', 'deed', 5),
  (5, 1, 'mann', 'mind', 6),
  (6, 1, 'haiyya', 'heart', 7),
  (7, 1, 'ghar', 'home', 8),
  (8, 1, 'bilaadi', 'cat', null);

UPDATE "language" SET head = 1 WHERE id = 1;

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('word_id_seq', (SELECT MAX(id) from "word"));
SELECT setval('language_id_seq', (SELECT MAX(id) from "language"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;
