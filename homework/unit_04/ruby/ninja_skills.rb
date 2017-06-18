#Challenge 1
a = true
b = false
puts a == b
puts a ! = b

#Challenge 2
major = nil
puts major
puts "#{major} nil was here"
print major
puts major.class

#Challenge 3
d = Fixnum
puts d
e = Integer
puts e

d = e
puts d

#Challenge 4
christine = "Hi, I'm Christine"
like_to = "long walks on the beach, kinda."
puts "#{christine} and I like #{like_to}"

g = "2"
g_to_number = 2

puts g_to_number + g.to_i

#Challenge 5
puts "Enter your favorite number"
number_entered = gets.chomp
puts number_entered.to_i * 2

puts "What is your name"
name_entered = gets.chomp
puts "What do you like to do in your free time"
for_fun_entered = gets.chomp

puts "#{name_entered} like to #{for_fun_entered}"

#Challenge 6
my_first_array = []
my_first_array = ["summer", "spring", "winter", "fall", "hot", 3, 6, 8, 9]
puts my_first_array.last
puts my_first_array.first
my_first_array[1] = "Joe"
my_first_array[2] = 3
puts my_first_array.to_s
my_first_array.push(true)
puts my_first_array[3].class


















