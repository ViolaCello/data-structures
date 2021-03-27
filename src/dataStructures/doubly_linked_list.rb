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

   def push(val)
    new_node = Node.new(val)
    if @length==0
        @head = new_node
        @tail = new_node
    else 
        @tail.next = new_node
        new_node.prev = @tail
        @tail = new_node
    end
    @length += 1
    return self
   end

end # end Class