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

   def pop
    return nil if !@head
    old_tail = @tail
    if @length==1
        @head = nil
        @tail = nil
    else 
        @tail = old_tail.prev
        new_tail.next = nil
        old_tail.prev = nil 
    end
    @length -= 1
    return old_tail
   end

   def shift
    return nil if !@head
    old_head = @head
    if length==1
        @head = nil
        @tail = nil
    else 
        @head = old_head.next
        @head.prev = null
        old_head.next = null
    end
    @length -= 1
    return old_head
   end

end # end Class