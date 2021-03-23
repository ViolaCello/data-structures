class Node
    attr_accessor :val, :next
   def initialize(val)
       @val = val  
       @next = nil
   end
end

class SinglyLinkedList
   attr_accessor :head, :tail, :length

   def initialize()
       @head = nil
       @tail = nil
       @length = 0
   end

   def push(val)
       new_node = Node.new (val)
       if !@head 
           @head = new_node
           @tail = new_node
       else 
           @tail.next = new_node
           @tail = new_node
       end
       @length += 1
       return self 
   end

   def pop
    if @head==nil
        return nil 
    end
    current = @head
    while current do 
        new_tail = current
        current = current.next
        if current==@tail
            @tail = new_tail
            @tail.next = nil
            @length -= 1
            if @length<=0
                @head = nil
                @tail = nil
            end
            return current
            break
        end
    end
   end


end # end Class