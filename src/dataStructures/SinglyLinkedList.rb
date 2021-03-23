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
    if current==@tail
      @head = nil
       @tail = nil
       @length = 0
       return current
       current = nil
    end
    while current do 
        new_tail = current
        current = current.next
        if current==@tail
            @tail = new_tail
            @tail.next = nil
            @length -= 1
            puts @length
            if @length<=0
                @head = nil
                @tail = nil
            end
            return current
            break
        end
    end
   end

   def shift
    if @head==nil
        return nil 
    end 
    old_head = @head
    @head = @head.next
    @length -= 1
    if @length==0
        @tail = nil
    end
   end

   def unshift(val)
    new_node = Node.new (val)
    if !@head
        @head = new_node
        @tail = new_node
    else 
        new_node.next = @head
        @head = new_node
    end
    @length += 1
    return self
   end

   def get(index)
    if index>=@length || index<0 
        return nil
    end
    i = 0
    current_node = @head
    while i<index do
        current_node = current_node.next
        i += 1
    end
    return current_node
   end

end # end Class