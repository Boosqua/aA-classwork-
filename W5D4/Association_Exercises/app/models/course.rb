# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Course < ApplicationRecord

  has_many(:course_enrollments,
    primary_key: :id,
    foreign_key: :course_id,
    class_name: :Enrollment
  )

  has_one(:big_boi_course,
    primary_key: :id,
    foreign_key: :prereq_id,
    class_name: :Course
  )

  belongs_to(:required_course,
    primary_key: :id,
    foreign_key: :prereq_id,
    class_name: :Course
  )
    # big_boi_course.required_course.name = returns name of course needed
  has_many(:enrolled_students,
    through: :course_enrollments,
    source: :user
  )

  belongs_to(:instructor,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :User
  )
end
