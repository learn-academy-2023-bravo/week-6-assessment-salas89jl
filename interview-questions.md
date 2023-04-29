# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Adding a migration file add_collumn named cohort_id to add the foreign key to the Student model since each cohort will have assigned many students. Since the Cohort model will have the has_many, the Student model must have belongs_to to finalize the associated.  

Researched answer: 
Adding a column: $rails generate migration add_collumn_to_student
Make the following changes in db/migrate file def change

```rb 
Class AddColumnToStudent < ActiveRecord::Migration[6.0]
	def change
		Add_column :students, :cohort_id, :integer 
	end
end
```
Save file/ run: $ rails db:migrate
Update the Class to create the Association
app/models/cohort.rb
```rb
class Cohort < ApplicationRecord
	has_many :students
end
```
app/models/student.rb
```rb
class Student < ApplicationRecord
	belongs_to  :cohort
end
```

2. Which RESTful routes must always be passed params? Why?

Your answer: I completely drew a blank on this, so I will go straight into the research to help re-spark my memory. 

Researched answer:  The RESTful routes that must have a param passed as well are: Show, New, Create, Update, and Delete. This is because when each of these controller methods is called into action to perform tasks such as manipulation, structuring, or destruction of specific pieces of data.


3. Name three rails generator commands. What is created by each?

Your answer: 1. $rails generate model ModelName  2. $rails generate rspec:intall 3. $rails generate resource ModelName itemname:data-type itemname:data-type ; 

Researched answer:
    1. $rails generate model ModelName ; generates a new model with no columns, 
    2. $rails generate rspec:intall ; installing RSpec dependencies 
    3. $rails generate resource ModelName itemname:data-type itemname:data-type ; generates a new model necessary RESTful routes for the given columns. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    Controller method: index
    Action: dislplay a list of students

action: "POST" location: /students
    Controller method: create
    Action: create a new student

action: "GET" location: /students/new
    Controller method: new
    Action: This will return a HTML form for creating a new student

action: "GET" location: /students/2
    Controller method: show
    Action: This will display the student with the primary key 2
    
action: "GET" location: /students/2/edit
    Controller method: edit
    Action: This will return a HTML form for editing student with the primary key 2

action: "PATCH" location: /students/2
    Controller method: update
    Action: This will update student with the primary key 2

action: "DELETE" location: /students/2
    Controller method: destroy
    Action: This will delete student with the primary key 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. as a User I have the ability to enter and edit the title of my to-do list.
    2. As a User, I can see a list of items/tasks in my to-do list.
    3. As a User, I have the ability to input and generate a new item/task and see it added to my do-to list once created.
    4. As a User, I have the ability to mark complete for each item/task in my to-do list.
    5. As a User, I have the ability to unmark complete if required.
    6. As a User, I can delete an item/task in my to-do list.
    7. As a User, I can see the completed task posted on a new list called Completed.
    8. As a User, I can add priority levels 'Highest, Critical, Alarming, Low' to each item/task.
    9. As a User, I can see text next to my list that indicates the completion percentage status.
    10. As a User, I have the ability to share my do list.

     
