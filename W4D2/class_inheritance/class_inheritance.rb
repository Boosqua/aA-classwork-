# Class Inheritance

# Ned -- 
# Darren ^ 
# Shawna, David ^



class Employee

    attr_reader :name, :title, :salary, :boss
    
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        # if boss
        #     super(employees)
        # end
    end

    def bonus(multiplier)
      bonus = @salary * multiplier
    #     else
    #         bonus = self.subordinate_salaries(self.employees) * multiplier
    #     end
    end

    # def subordinate_salaries(employees)
    #     # return self.salary if employees.length == 0
    #     some_salaries = 0
    #     queue = employees.dup
    #     until queue.length == 0
    #         current_employee = employees.shift
    #         some_salaries += current_employee.salary
    #         queue += current_employee.employees unless current_employee.employees.empty?
    #     end
    #     some_salaries
    # end
    
end

class Manager < Employee

  def initialize(name, title, salary, boss=nil)
    @employees = [] 
    super
  end

  def bonus(multiplier)
    sum = 0
    @employees.each do |employee|
      sum += employee.salary
    end
    sum * multiplier
  end

  def add_employee(employee)
    @employees << employee
  end

end
# class Employee
#     attr_reader :name, :title, :salary, :boss

#     def initialize(name, title, salary, boss)
#         @name = name
#         @title = title
#         @salary = salary
#         @boss = boss
#     end
# end
# class Manager < Employee
    
#     def initialize(name, title, salary, boss=nil)
#         super(name, title, salary, boss)
#     end
    
# end

# teacher = Employee.new("Jane", "Teacher", 50, "Principal")
# p teacher
# principal = Manager.new("David", "Principal", 100, "Superintendent")
# p principal
# superintendent = Manager.new("The Dude", "Superintendent", 500)
# p superintendent

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "manager", 78000, ned)
ned.add_employee darren

shawna = Employee.new("shawna", "ta", 12000, darren)
darren.add_employee shawna
david = Employee.new("david", "ta", 10000, darren)
darren.add_employee david
ned.add_employee shawna
ned.add_employee david
p ned.bonus(5) # => 50_0000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000