require 'singleton'
require 'sqlite3'
require "byebug"
class QuestionsDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Users
  attr_accessor :id, :fname, :lname

  def self.find_by_id(id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM 
        users
      WHERE
        id = ?
    SQL
    Users.new(hashed[0])
  end

  def self.find_by_name(fname, lname)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ?  AND lname = ?
    SQL
    
    hashed.map { |hash| Users.new(hash)}
  end

  def initialize(data)
    @fname = data["fname"]
    @lname = data["lname"]
    @id = data["id"]
  end

  def authored_questions
    Questions.find_by_author_id(id)
  end

  def author_replies
    RepliesTable.find_by_user_id(id)
  end

  def followed_questions
    QuestionFollows.followed_questions_for_user_id(id)
  end
end


class Questions
  attr_accessor :id, :title, :body, :author_id

  def self.find_by_id(id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    Questions.new(hashed[0])
  end

  def self.find_by_author_id(author_id)
    questions = QuestionsDBConnection.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL

    questions.map { |question| Questions.new(question) }
  end

  def initialize(data)
    @id = data["id"]
    @title = data["title"]
    @body = data["body"]
    @author_id = data["author_id"]  
  end

  def author
    Users.find_by_id(author_id)
  end

  def replies
    RepliesTable.find_by_question_id(id)
  end
  
  def followers
    QuestionFollows.followers_for_question_id(id)
  end
end


class RepliesTable
  attr_accessor :id, :body, :question_id, :parent_reply, :reply_author

  def self.find_by_id(id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        replies_table
      WHERE
        id = ?
    SQL
    RepliesTable.new(hashed[0])
  end

  def self.find_by_user_id(question_author)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, question_author)
      SELECT 
        *
      FROM
        replies_table
      WHERE
      question_author = ?
    SQL
    hashed.map { |values| RepliesTable.new(values) }
  end

  def self.find_by_question_id(question_id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT 
        *
      FROM
        replies_table
      WHERE
      question_id = ?
    SQL
    hashed.map { |values| RepliesTable.new(values) }
  end

  def initialize(data)
    @id = data["id"]
    @body = data["body"]
    @question_id = data["question_id"]
    @parent_reply = data["parent_reply"]
    @reply_author = data["question_author"]  
  end

  def author
    Users.find_by_id(reply_author)
  end

  def question
    Questions.find_by_id(question_id)
  end

  def parent_reply
    return "I don't have a parent" unless @parent_reply

    RepliesTable.find_by_id(parent_reply)
  end

  def child_replies
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, @id)
      SELECT
        *
      FROM
        replies_table
      WHERE
        parent_reply = ?
    SQL
    hashed.map { |hash| RepliesTable(hash)}
  end
end

class QuestionFollows
  attr_accessor :follower_id, :question_id
  
  def self.find_by_id(id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        question_follows
      WHERE
        follower_id = ? 
    SQL
    QuestionFollows.new(hashed[0])
  end

  def self.followers_for_question_id(question_id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
      question_follows
      JOIN users
        ON users.id = question_follows.follower_id
      WHERE 
        question_follows.question_id = ?
    SQL

    hashed.map { |hash| Users.new(hash)}
  end
  
  def self.followed_questions_for_user_id(user_id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
      question_follows
      JOIN questions
        ON questions.id = question_follows.question_id
      WHERE 
        question_follows.follower_id = ?
    SQL

    hashed.map { |hash| Questions.new(hash)}
  end
  
  def initialize(data)
    @follower_id = data["follower_id"]
    @question_id = data["question_id"]
  end
end

class QuestionLikes

  attr_accessor :user_likes_id, :question_id
  def self.find_by_id(id)
    hashed = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        question_likes
      WHERE
        user_likes_id = ? 
    SQL
    QuestionFollows.new(hashed[0])
  end

  def initialize(data)
    @user_likes_id = data["user_likes_id"]
    @question_id = data["question_id"]
  end
end