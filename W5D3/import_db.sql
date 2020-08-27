PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  question_id INTEGER NOT NULL,
  follower_id INTEGER NOT NULL,

  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies_table (
  id INTEGER PRIMARY KEY,
  body TEXT,
  question_id INTEGER NOT NULL,
  parent_reply INTEGER,
  question_author INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply) REFERENCES replies_table(id),
  FOREIGN KEY (question_author) REFERENCES users(id)
);

CREATE TABLE question_likes (
  question_id INTEGER NOT NULL,
  user_likes_id INTEGER NOT NULL,

  FOREIGN KEY (user_likes_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
  users (fname, lname)
VALUES
  ('Omar', 'Hernandez');

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('What is sqlite3?', 'Seriously I don''t know what it is!', (SELECT id FROM users WHERE fname = 'Omar' AND lname = 'Hernandez'));

INSERT INTO 
  question_follows(question_id, follower_id)
VALUES
  (1, 1);

INSERT INTO 
  replies_table (body, question_id, question_author)
VALUES
  ('why wont anyone help me :(', 1, 1);

INSERT INTO 
  question_likes (question_id, user_likes_id)
VALUES
  (1, 1);