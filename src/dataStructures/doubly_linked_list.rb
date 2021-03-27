class Node
    attr_accessor :val, :next, :prev
   def initialize(val)
       @val = val  
       @next = nil
       @prev = nil
   end
end

class DoublyLinkedList
   attr_accessor :head, :tail, :length

   def initialize()
       @head = nil
       @tail = nil
       @length = 0
   end

end # end Class